<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificationTemplate extends Model
{
	use HasFactory;

	protected $fillable = [
		'title',
		'content',
		'type',
		'shortcodes'
	];

	protected $casts = [
		'shortcodes' => 'array',
	];
}