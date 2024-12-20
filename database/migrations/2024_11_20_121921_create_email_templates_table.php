<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('email_templates', function (Blueprint $table) {
			$table->id();
			$table->string('name')->default('');
			$table->string('subject')->default('');
			$table->text('body')->nullable();
			$table->string('view')->default('');
			$table->string('type')->default('');
			$table->json('shortcodes');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('email_templates');
	}
};
