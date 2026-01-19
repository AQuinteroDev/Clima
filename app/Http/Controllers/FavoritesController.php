<?php

namespace App\Http\Controllers;

use App\Models\Favorites;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoritesController extends Controller
{
    public function store(Request $request)
    {
        Favorites::create([
            'user_id' => Auth::id(),
            'city_name' => $request->city_name,
            'country_code' => $request->country_code,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
        ]);

       return redirect('/favorites');
    }

    public function delete($id)
    {
        $favorite = Favorites::find($id);

        if ($favorite && $favorite->user_id === Auth::id()) {
            $favorite->delete();
        }

        return redirect('/favorites');
    }
}
