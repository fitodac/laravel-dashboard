<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
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
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index(Request $request)
	{
		return Inertia::render(
			'admin/permissions/Permissions',
			$this->permissionService->permissionList($request)
		);
	}

	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request): RedirectResponse
	{

		$permission = $this->permissionService->storePermission($request);

		if (!$permission) return back()->with('error', 'Permission creation failed.');

		return redirect()
			->route('dashboard.permission.list')
			->with('success', 'Permission created successfully.');
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, Permission $permission): RedirectResponse
	{

		$permission = $this->permissionService->updatePermission($request, $permission);

		if (!$permission) return back()->with('error', 'Permission update failed.');

		return redirect()
			->route('dashboard.permission.list')
			->with('success', 'Permission updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(Permission $permission): RedirectResponse
	{
		$permission = $this->permissionService->destroyPermission($permission);

		if (!$permission) return back()->with('error', 'Permission delete failed.');

		return redirect()
			->route('dashboard.permission.list')
			->with('success', 'Permission deleted successfully.');
	}
}
