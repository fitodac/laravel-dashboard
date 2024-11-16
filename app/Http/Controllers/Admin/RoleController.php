<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Role;


use App\Services\RoleService;

class RoleController extends Controller
{

	private RoleService $roleService;

	public function __construct(RoleService $roleService)
	{
		$this->roleService = $roleService;
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
			'admin/roles/Roles',
			$this->roleService->roleList($request)
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

		$role = $this->roleService->storeRole($request);

		if (!$role) return back()->with('error', 'Role creation failed.');

		return redirect()
			->route('dashboard.role.list')
			->with('success', 'Role created successfully.');
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, Role $role): RedirectResponse
	{
		$role = $this->roleService->updateRole($request, $role);

		if (!$role) return back()->with('error', 'Role update failed.');

		return redirect()
			->route('dashboard.role.list')
			->with('success', 'Role updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(Role $role): RedirectResponse
	{
		$role = $this->roleService->destroyRole($role);

		if (!$role) return back()->with('error', 'Role delete failed.');

		return redirect()
			->route('dashboard.role.list')
			->with('success', 'Role deleted successfully.');
	}
}
