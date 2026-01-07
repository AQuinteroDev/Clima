<?php

use Inertia\Inertia;
use App\Models\Search;
// Importamos los controladores con su ruta completa
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController; 
use App\Http\Controllers\SearchController;

Route::get('/', function () {
    return Inertia::render('welcome');
});

Route::get('/registerClima', function () {
    return Inertia::render('register');
});

Route::post('/register', [UserController::class, 'store'])->name('register');

Route::post('/login', [UserController::class, 'login'])->name('login');

Route::post('/searches', [SearchController::class, 'store'])->middleware('auth');

Route::get('/loginClima', function () {
    return Inertia::render('login');
});

Route::get('/perfil', [UserController::class, 'show'])->middleware('auth');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');    
});

require __DIR__.'/settings.php';