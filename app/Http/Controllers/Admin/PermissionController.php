<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Permission;
use App\Services\PermissionService;

class PermissionController extends Controller
{

	private PermissionService $permissionService;

	public function __construct(PermissionService $permissionService)
	{
		$this->permissionService = $permissionService;
	}

	
	/**
	 * Display a listing of permissions
	 * 
	 * @param Request $request
	 * @return Response
	 */
	public function index(Request $request): Response
	{
		return Inertia::render(
			'admin/permissions/Permissions',
			$this->permissionService->permissionList($request)
		);
	}

	
	/**
	 * Store a newly created permission in storage
	 * 
	 * @param Request $request
	 * @return RedirectResponse
	 */
	public function store(Request $request): RedirectResponse
	{

		$permission = $this->permissionService->storePermission($request);

		if (!$permission) return back()->with('error', 'Permission creation failed.');

		return redirect()
			->route('admin.permission.list')
			->with('success', 'Permission created successfully.');
	}

	
	/**
	 * Update the specified permission in storage
	 * 
	 * @param Request $request
	 * @param Permission $permission
	 * @return RedirectResponse
	 */
	public function update(Request $request, Permission $permission): RedirectResponse
	{

		$permission = $this->permissionService->updatePermission($request, $permission);

		if (!$permission) return back()->with('error', 'Permission update failed.');

		return redirect()
			->route('admin.permission.list')
			->with('success', 'Permission updated successfully.');
	}

	
	/**
	 * Remove the specified permission from storage
	 * 
	 * @param Request $request
	 * @param Permission $permission
	 * @return RedirectResponse
	 */
	public function destroy(Request $request, Permission $permission): RedirectResponse
	{
		$permission = $this->permissionService->destroyPermission($permission);

		if (!$permission) return back()->with('error', 'Permission delete failed.');

		return redirect()
			->route('admin.permission.list')
			->with('success', 'Permission deleted successfully.');
	}
}
