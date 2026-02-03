<?php

use Inertia\Inertia;
use App\Models\Favorites;
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController; 
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\FavoritesController;


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

Route::get('/perfilInfo', [PerfilController::class, 'showProfile'])->name('perfil');


Route::get('/perfil', function () {
    return Inertia::render('perfil');
})->middleware('auth');

Route::get('/editarPerfil', function () {
    return Inertia::render('editarPerfil');
})->middleware('auth');

Route::get('/borrarPerfil/{id}', [PerfilController::class, 'delete'])->middleware('auth');

Route::post('/updatePerfil', [PerfilController::class, 'update'])->name('update')->middleware('auth');

Route::get('/dashboard', function () {
    if (!Auth::check()) {
        return redirect()->back(fallback: '/')->with('error', 'Debes iniciar sesión para acceder al panel de control.');
    }

    return Inertia::render('dashboard', [ 
        'favorites' => Favorites::where('user_id', Auth::id())->get() 
    ]);  
});

Route::get('/historial', [SearchController::class, 'read']);

Route::get('/deleteSearches', [SearchController::class, 'deleteAll'])->middleware('auth');

Route::delete('/searchesDelete/{id}', [SearchController::class, 'delete'])->middleware('auth');

Route::get('/favorites', function () {

    if (!Auth::check()) {
        return redirect()->back(fallback: '/')->with('error', 'Debes iniciar sesión para acceder al panel de control.');
    }

    return Inertia::render('favorites', [ 
        'favorites' => Favorites::where('user_id', Auth::id())->get() 
    ]); 
});

Route::post('/favoritesStore', [FavoritesController::class, 'store'])->middleware('auth');

Route::delete('/favoritesDelete/{id}', [FavoritesController::class, 'delete'])->middleware('auth');

Route::get('/api/weather-data', function (Request $request) {
    $city = $request->query('city');
    $country = $request->query('country');
    $key = env('OPENWEATHER_KEY');

    $query = $country ? "{$city},{$country}" : $city;

    $current = Http::get("https://api.openweathermap.org/data/2.5/weather", [
        'q' => $query, 'appid' => $key, 'units' => 'metric', 'lang' => 'es'
    ]);

    $forecast = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
        'q' => $query, 'appid' => $key, 'units' => 'metric', 'lang' => 'es'
    ]);

    return response()->json([
        'current' => $current->json(),
        'forecast' => $forecast->json()
    ]);
})->middleware('auth');


require __DIR__.'/settings.php';