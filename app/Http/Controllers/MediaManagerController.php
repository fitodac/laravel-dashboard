<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MediaManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\JsonResponse;

class MediaManagerController extends Controller
{

	/**
	 * Get a list of media items from the 'images' collection.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 * 
	 * 
	 * 
	 */
	public function index(): JsonResponse
	{
		$manager = MediaManager::first();
		$images = $manager->getMedia('images')->toArray();
		$images = array_reverse($images);

		$imagesTotal = $manager->getMedia('images')->count();

		return response()->json(compact('images', 'imagesTotal'));
	}



	/**
	 * Store media files in the 'images' collection.
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return void
	 * 
	 * 
	 * 
	 */
	public function store(Request $request): void
	{
		$files = $request->file('files');
		$manager = MediaManager::first();

		foreach ($files as $file) {
			$manager->addMedia($file)
				->withCustomProperties([
					'altText' => '',
					'caption' => '',
					'description' => ''
				])
				->toMediaCollection('images');
		}
	}

	// Create an "update" function to update media files in the 'images' collection.
	public function update(Request $request, $id): JsonResponse
	{
		$manager = MediaManager::first();
		$media = $manager->getMedia('images')->find($id);

		if ($media) {
			if (!empty($request->name)) $media->name = $request->name;
			$media->custom_properties = $request->custom_properties;
			$media->save();
			return response()->json(['message' => 'Image updated successfully']);
		}

		return response()->json(['message' => 'Image not found'], 404);
	}


	/**
	 * Delete a media item from the 'images' collection.
	 *
	 * @param string $uuid The UUID of the media item to be deleted.
	 * @return \Illuminate\Http\JsonResponse
	 * 
	 * 
	 * 
	 */
	public function destroy($id): JsonResponse
	{
		$manager = MediaManager::first();
		$media = $manager->getMedia('images')->find($id);

		if ($media) {
			$media->delete();
			return response()->json(['message' => 'Image deleted successfully']);
		}

		return response()->json(['message' => 'Image not found'], 404);
	}
}
