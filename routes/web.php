<?php

use App\Http\Controllers\PerfilController;
use Inertia\Inertia;
use App\Models\Search;
// Importamos los controladores con su ruta completa
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request; 
use App\Http\Controllers\UserController; 
use App\Http\Controllers\SearchController;


Route::get('/', function () {
    return Inertia::render('welcome');
});

Route::get('/registerClima', function () {
    return Inertia::render('register');
});

Route::post('/register', [UserController::class, 'store'])->name('register.post');

Route::post('/login', [UserController::class, 'login'])->name('login.post');

Route::post('/searches', [SearchController::class, 'store'])->middleware('auth');

Route::get('/loginClima', function () {
    return Inertia::render('login');
    
});

Route::get('/user-session', function () {
    if (Auth::check()) {
        return response()->json(Auth::user()); 
    }
    return response()->json(null);
});

Route::get('/logout-clima', function (Request $request) {
    Auth::logout(); 
    
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/');
});

Route::get('/perfilInfo', [PerfilController::class, 'showProfile'])->name('perfil')->middleware('auth');

Route::get('/perfil', function () {
    return Inertia::render('perfil');
})->middleware('auth');

Route::get('/editarPerfil', function () {
    return Inertia::render('editarPerfil');
})->middleware('auth');

Route::post('/updatePerfil', [PerfilController::class, 'update'])->name('update')->middleware('auth');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');    
})->middleware(['auth']);

Route::get('/historial', [SearchController::class, 'read'])->middleware('auth');

Route::get('/deleteSearches', [SearchController::class, 'deleteAll'])->middleware('auth');

Route::delete('/searchesDelete/{id}', [SearchController::class, 'delete'])->middleware('auth');

Route::get('/favorites', function () {
    return Inertia::render('favorites');    
})->middleware(['auth']);

require __DIR__.'/settings.php';