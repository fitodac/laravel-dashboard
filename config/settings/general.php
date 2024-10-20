<?php

return [
	// Determine if the super admin should be notified when a new user registers.
	'new_user_superadmin_notification' => env('NEW_USER_SUPERADMIN_NOTIFICATION', true),

	// Determine if the site is in light or dark mode.
	'color_mode' => env('VITE_COLOR_MODE', 'light'),

	// Layout to use for the auth pages. Options are 'layout1', 'layout2', or 'layout3'.
	'auth_layout' => env('VITE_AUTH_LAYOUT', 'layout1'), // 'layout1', 'layout2', or 'layout3'

	// Configure Open Graph settings for the site.
	'og_description' => env('VITE_OG_DESCRIPTION', 'Laravel Vite Boilerplate'),
	'og_image' => env('VITE_OG_IMAGE', 'og-image.jpg'),
	'x_user' => env('VITE_X_USER', '@twitter_X_user'),
	'msapplication_color' => env('VITE_MSAPPLICATION_COLOR', '#000000'),
];
