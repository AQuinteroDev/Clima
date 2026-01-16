<?php

namespace App\Http\Controllers;

use id;
use Inertia\Inertia;
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

    public function read(){
        $searches = Search::where('user_id', Auth::id())
        ->orderBy('created_at', 'desc') 
        ->get();

        return Inertia::render('historialBusqueda', [
            'searches' => $searches
        ]);
    }

    public function deleteAll(){

        Search::where('user_id', Auth::id())->delete();

        return redirect('/historial');
    }

    public function delete($id){

        $search = Search::where('id', $id)->where('user_id', Auth::id())->first();

        if($search){
            $search->delete();
        }

        return redirect('/historial');
    }
}
