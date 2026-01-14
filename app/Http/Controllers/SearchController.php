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
        if (!Auth::check()) {
            return response()->json(['error' => 'No estas logueado'], 401);
        }

        // 2. Guardamos
        Search::create([
            'user_id'          => Auth::id(),
            'city'             => $request->city,
            'country_code'     => $request->country,
            'last_temperature' => $request->temp,
        ]);

        return redirect('/dashboard');
    }
}
