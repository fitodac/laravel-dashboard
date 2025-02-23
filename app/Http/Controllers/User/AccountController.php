<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\UpdateAccountRequest;

use App\Models\Account;

use App\Services\AccountService;

class AccountController extends Controller
{

	private AccountService $accountService;

	public function __construct(AccountService $accountService)
	{
		$this->accountService = $accountService;
	}


	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(): Response
	{
		return Inertia::render('account/Edit');
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(UpdateAccountRequest $request): RedirectResponse
	{
		$account = $this->accountService->updateAccount($request);

		if (!$account) return back()->with('error', 'Account not updated.');

		return back()->with('success', 'Account updated successfully.');
	}
}
