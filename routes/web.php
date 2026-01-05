<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
// Importamos los controladores con su ruta completa
use App\Http\Controllers\UserController; 
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return Inertia::render('welcome');
});

Route::get('/registerClima', function () {
    return Inertia::render('register');
});

Route::post('/register', [UserController::class, 'store'])->name('register');
Route::post('/login', [UserController::class, 'login'])->name('login');

Route::get('/loginClima', function () {
    return Inertia::render('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');    
});

require __DIR__.'/settings.php';