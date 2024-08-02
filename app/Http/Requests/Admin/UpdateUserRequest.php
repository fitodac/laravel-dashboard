<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array
	{
		$rules = [
			// Professional information
			'job_title' => 'nullable|string|max:255',
			'company' => 'nullable|string|max:255',
			'bio' => 'nullable|string|max:1000',

			// Preferences and settings
			'profile_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Asegura que sea una imagen
		];

		if ($this->has('basic_information')) {
			// Basic information
			$rules['name'] = 'required|string|max:255';
			$rules['lastname'] = 'required|string|max:255';
			$rules['username'] = 'required|string|max:255|unique:users,username,' . $this->user->id;
			$rules['email'] = 'required|email|unique:users,email,' . $this->user->id;
		}

		if ($this->has('personal_information')) {
			$rules['phone'] = 'nullable|string|max:20';
			$rules['birth_date'] = 'nullable|date';
			$rules['address'] = 'nullable|string|max:255';
			$rules['city'] = 'nullable|string|max:255';
			$rules['country'] = 'nullable|string|max:255';
			$rules['zip'] = 'nullable|string|max:10';
		}

		return $rules;
	}


	public function messages(): array
	{
		return [
			// Basic information
			'name.required' => 'Name is required',
			'name.string' => 'Name must be a string',
			'name.max' => 'Name must not exceed 255 characters',
			'lastname.required' => 'Name is required',
			'lastname.string' => 'Name must be a string',
			'lastname.max' => 'Name must not exceed 255 characters',
			'username.required' => 'Username is required',
			'username.string' => 'Username must be a string',
			'username.max' => 'Username must not exceed 255 characters',
			'username.unique' => 'Username already exists',
			'email.required' => 'Email is required',
			'email.email' => 'Email must be a valid email address',
			'email.unique' => 'Email already exists',

			// Personal information
			'phone.string' => 'Phone must be a string',
			'phone.max' => 'Phone must not exceed 20 characters',
			'birth_date.date' => 'Birth date must be a valid date',
			'address.string' => 'Address must be a string',
			'address.max' => 'Address must not exceed 255 characters',
			'city.string' => 'City must be a string',
			'city.max' => 'City must not exceed 255 characters',
			'country.string' => 'Country must be a string',
			'country.max' => 'Country must not exceed 255 characters',
			'zip.string' => 'Zip must be a string',
			'zip.max' => 'Zip must not exceed 10 characters',

			'bio.string' => 'Bio must be a string',
		];
	}
}