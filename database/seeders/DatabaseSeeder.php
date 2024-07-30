<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\demo\UsersSeeder;
use Database\Seeders\demo\ProductsSeeder;
use Database\Seeders\RoleSeeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{

		$this->call([
			UsersSeeder::class,
			RoleSeeder::class,
			ProductsSeeder::class
		]);

		// User::factory(10)->create();

		User::factory()->create([
			'name' => 'Test User',
			'email' => 'test@example.com',
		]);
	}
}
