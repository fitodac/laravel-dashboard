<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\AccountController;
use App\Http\Controllers\User\MediaManagerController;
use App\Http\Controllers\User\GalleryController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\NotificationController;


Route::middleware(['auth', 'verified'])->group(function () {

	Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

	/**
	 * Profile
	 * 
	 * 
	 * 
	 */
	Route::get('profile', [ProfileController::class, 'edit'])
		->name('profile.edit');

	Route::match(['put', 'patch'], 'profile', [ProfileController::class, 'update'])
		->name('profile.update');

	Route::delete('profile', [ProfileController::class, 'destroy'])
		->name('profile.destroy');

	Route::post('profile/image-profile', [ProfileController::class, 'update_image'])
		->name('profile.update_image');

	Route::delete('profile/image-profile', [ProfileController::class, 'remove_image'])
		->name('profile.remove_image');

	Route::get('account', [AccountController::class, 'edit'])
		->name('account.edit');

	Route::match(['put', 'patch'], 'account', [AccountController::class, 'update'])
		->name('account.update');

	// Image uploader
	Route::get('media', [MediaManagerController::class, 'index'])->name('media.list');
	Route::post('media', [MediaManagerController::class, 'store'])->name('media.upload');
	Route::patch('media/{id}', [MediaManagerController::class, 'update'])->name('media.update');
	Route::delete('media/{id}', [MediaManagerController::class, 'destroy'])->name('media.delete');


	/**
	 * Notifications
	 * 
	 * 
	 * 
	 */
	Route::get('notifications', [NotificationController::class, 'index'])->name('notification.index');
	Route::post('notification-templates/{notification}/mark-as-read', [NotificationController::class, 'markAsRead'])->name('notification.markAsRead');
	Route::post('notification-templates/mark-all-as-read', [NotificationController::class, 'markAllAsRead'])->name('notification.markAllAsRead');


	/**
	 * Image gallery
	 * 
	 * 
	 * 
	 */
	Route::get('gallery', [GalleryController::class, 'index'])->name('gallery.index');

	/**
	 * Keep alive
	 */
	Route::get('keep-alive', function () {
		return response()->json(['status' => 'alive']);
	})->name('keepAlive');
});
