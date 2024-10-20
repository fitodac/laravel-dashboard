<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\TablesController;

/**
 * Demo pages
 */
$pages = [
	'ui' => [
		'accordion' => 'Accordion',
		'alerts' => 'Alerts',
		'avatar' => 'Avatar',
		'breadcrumbs' => 'Breadcrumbs',
		'buttons' => 'Buttons',
		'cards' => 'Cards',
		'chips' => 'Chips',
		'drawer' => 'Drawer',
		'dropdown' => 'Dropdown',
		'image' => 'Image',
		'listbox' => 'ListBox',
		'loading' => 'Loading indicators',
		'modal' => 'Modal',
		'pagination' => 'Pagination',
		'popover' => 'Popovers',
		'progress' => 'Progress',
		'tabs' => 'Tabs',
		'toasts' => 'Toasts',
		'tooltips' => 'Tooltips',
	],
	'utilities' => [
		'color' => 'Color',
		'image-uploader' => 'Image uploader',
		'icons' => 'Icons',
	],
	'form' => [
		'input' => 'Input',
		'select' => 'Select',
		'textarea' => 'Textarea',
		'checkbox' => 'Checkbox',
		'radio' => 'Radio Button',
		'switch' => 'Switch',
		'slider' => 'Slider',
		'datepicker' => 'Date Picker',
		'layouts' => 'Form layouts',
		'wysiwyg' => 'Wysiwyg',
	],
	'tables' => [
		'styles' => 'Tables styles',
		// 'real-data' => 'Real data table',
	],
	'charts' => [
		'apexcharts' => 'Apex charts'
	]
];




/**
 * Corporate
 */
Route::middleware(['auth', 'verified'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () use ($pages) {
		Route::inertia('/', 'demo/pages/corporate/DashboardPage')->name('corporate');


		foreach ($pages as $group => $page_group) {
			if ($group === 'ui') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/corporate/UiElementsPage", ['title' => $title])
						->name("corporate.$group.$page");
				}
			}

			if ($group === 'form') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/corporate/FormsPage", ['title' => $title])
						->name("corporate.$group.$page");
				}
			}

			if ($group === 'utilities') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/corporate/UtilitiesPage", ['title' => $title])
						->name("corporate.$group.$page");
				}
			}

			if ($group === 'tables') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/corporate/TablesPage", ['title' => $title])
						->name("corporate.$group.$page");
				}
			}

			if ($group === 'charts') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/corporate/ChartsPage", ['title' => $title])
						->name("corporate.$group.$page");
				}
			}
		}

		Route::get("/tables/real-data", [TablesController::class, 'index'])
			->name('corporate.tables.real-data')
			->defaults('template', 'corporate');
	});


/**
 * Executive
 */
Route::middleware(['auth', 'verified'])
	->prefix('dashboard/executive')
	->name('dashboard.')
	->group(function () use ($pages) {
		Route::inertia('/', "demo/pages/executive/DashboardPage")->name('executive');

		foreach ($pages as $group => $page_group) {
			if ($group === 'ui') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/executive/UiElementsPage", ['title' => $title])
						->name("executive.$group.$page");
				}
			}

			if ($group === 'form') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/executive/FormsPage", ['title' => $title])
						->name("executive.$group.$page");
				}
			}

			if ($group === 'utilities') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/executive/UtilitiesPage", ['title' => $title])
						->name("executive.$group.$page");
				}
			}

			if ($group === 'tables') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/executive/TablesPage", ['title' => $title])
						->name("executive.$group.$page");
				}
			}

			if ($group === 'charts') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/executive/ChartsPage", ['title' => $title])
						->name("executive.$group.$page");
				}
			}
		}

		Route::get("/tables/real-data", [TablesController::class, 'index'])
			->name('executive.tables.real-data')
			->defaults('template', 'executive');
	});
