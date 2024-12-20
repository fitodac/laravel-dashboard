<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Lab404\Impersonate\Models\Impersonate;
use App\Notifications\ResetPasswordNotification;
use App\Data\AccountData;

class User extends Authenticatable implements MustVerifyEmail
{
	use HasFactory, Notifiable, HasRoles, Impersonate;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		// Basic information
		'name',
		'lastname',
		'username',
		'email',
		'password',
		'phone',

		// Personal information
		'birth_date',
		'address',
		'city',
		'country',
		'zip',

		// Professional information
		'job_title',
		'company',
		'bio',

		// Prefferences
		'profile_picture',
		'status',
	];


	protected $hidden = [
		'password',
		'remember_token',
	];


	/**
	 * The attributes that should be cast to native types.
	 *
	 * @return array
	 */
	protected function casts(): array
	{
		return [
			'email_verified_at' => 'datetime',
			'password' => 'hashed',
		];
	}

	/**
	 * Get the sessions associated with the user.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function sessions()
	{
		return $this->hasMany(Session::class);
	}

	/**
	 * Get the user's permissions.
	 *
	 * @return \Illuminate\Support\Collection<int, string>
	 */
	public function getPermissionsAttribute()
	{
		if ($this->id) {
			return $this->getPermissionsViaRoles()->pluck('name');
		}

		return [];
	}


	/**
	 * Determine if the user can impersonate other users.
	 *
	 * @return bool True if the user has impersonation rights, false otherwise.
	 */
	public function canImpersonate(): bool
	{
		if (config('settings.general.admin_can_impersonate')) {
			return $this->hasRole(['Admin', 'Super Admin']);
		} else {
			return $this->hasRole('Super Admin');
		}
	}

	/**
	 * Get the account associated with the user.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasOne
	 */
	public function account()
	{
		return $this->hasOne(Account::class);
	}


	/**
	 * Get the user's roles.
	 *
	 * @return array An array of the user's roles.
	 */
	public function getRoles(): array
	{
		return $this->roles->map(fn($role) => ['id' => $role->id, 'name' => $role->name])->toArray();
	}

	/**
	 * Get the user's account data.
	 *
	 * @return \App\Data\AccountData
	 */
	public function getAccount(): AccountData
	{
		return AccountData::from($this->account->toArray());
	}


	/**
	 * Send a password reset notification to the user.
	 *
	 * @param  string  $token
	 */
	public function sendPasswordResetNotification($token): void
	{
		$url = 'https://example.com/reset-password?token=' . $token;

		$this->notify(new ResetPasswordNotification($url));
	}
}
