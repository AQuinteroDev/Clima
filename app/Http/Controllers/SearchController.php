<?php

namespace App\Http\Controllers;

use id;
use App\Models\Search;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    public function store(Request $request)
    {
        // 1. Verificamos si hay usuario (esto es para debug)
        if (!Auth::check()) {
            return response()->json(['error' => 'No estas logueado'], 401);
        }

        // 2. Guardamos
        Search::create([
            'user_id'          => Auth::id(),
            'city'             => $request->city,
            'country_code'     => $request->country_code,
            'last_temperature' => $request->last_temperature,
        ]);

        return redirect('/dashboard');
    }
}
