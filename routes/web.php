<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return Inertia::render('welcome');
});

Route::get('/registerClima', function () {
    return Inertia::render('register');
});


Route::get('/loginClima', function () {
    return Inertia::render('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');    
});



require __DIR__.'/settings.php';
 