<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return Inertia::render('welcome');
});


Route::get('/loginClima', function () {
    return Inertia::render('login');
});

Route::post('/dashboard', function () {
    return Inertia::render('dashboard');    
});



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
 