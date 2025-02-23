<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Intervention\Image\Laravel\Facades\Image;
use Illuminate\Contracts\Auth\MustVerifyEmail;


class ProfileController extends Controller
{
	/**
	 * Display the user's profile edit form.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Inertia\Response
	 */
	public function edit(Request $request): Response
	{
		return Inertia::render('profile/Edit', [
			'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
			'status' => session('status'),
		]);
	}


	/**
	 * Update the user's profile information
	 * 
	 * @param ProfileUpdateRequest $request
	 * @return RedirectResponse
	 */
	public function update(ProfileUpdateRequest $request): RedirectResponse
	{
		$request->user()->fill($request->validated());

		if ($request->user()->isDirty('email')) {
			$request->user()->email_verified_at = null;
		}

		$request->user()->save();
		return back()->with('success', 'Your profile was updated successfully.');
	}


	/**
	 * Update user's profile picture
	 * 
	 * @param Request $request
	 * @return void
	 */
	public function update_image(Request $request): void
	{
		$user = $request->user();

		if ($request->hasFile('profile_picture')) {
			$currentImagePath = '/public/img/users/avatars/' . $user->profile_picture;
			if (Storage::exists($currentImagePath)) {
				Storage::delete($currentImagePath);
			}

			$file = $request->file('profile_picture');
			$filename = time() . '.webp';
			$image = Image::read($file);
			$image
				->resizeCanvas(256, 256)
				->resize(256, 256)
				->toWebp(100)
				->save("storage/img/users/avatars/$filename");

			if ($filename) {
				$user->update(['profile_picture' => $filename]);
			}
		}
	}


	/**
	 * Remove the user's profile picture
	 * 
	 * @param Request $request
	 * @return RedirectResponse
	 */
	public function remove_image(Request $request): RedirectResponse
	{
		$user = $request->user();

		$imagePath = '/public/img/users/avatars/' . $user->profile_picture;

		if (Storage::exists($imagePath)) {
			Storage::delete($imagePath);
		}

		$user->update(['profile_picture' => null]);
		return back()->with('success', 'Image removed successfully.');
	}


	/**
	 * Delete the user's account
	 * 
	 * @param Request $request
	 * @return RedirectResponse
	 */
	public function destroy(Request $request): RedirectResponse
	{
		$request->validate([
			'password' => ['required', 'current_password'],
		]);

		$user = $request->user();

		Auth::logout();

		$user->delete();

		$request->session()->invalidate();
		$request->session()->regenerateToken();

		return Redirect::to('/');
	}
}
