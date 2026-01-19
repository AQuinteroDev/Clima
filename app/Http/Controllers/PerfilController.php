<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class PerfilController extends Controller
{
    public function showProfile()
    {
        $usuarioLogueado = Auth::user(); 

        if (!$usuarioLogueado) {
            return redirect('/loginClima');
        }

        return Inertia::render('perfil', [
            'user' => $usuarioLogueado
        ]);
    }

    public function update(Request $request)
    {
        $user = User::find(Auth::id());

        if (!$user) {
            return redirect('/loginClima');
        }

        $user->name = $request->input('name', $user->name);
        $user->email = $request->input('email', $user->email);
        $user->img_url = $request->input('img_url', $user->img_url);
        

        $user->save();

        return redirect('/perfil')->with('success', 'Perfil actualizado correctamente.');
    }

    public function delete($id)
    {
        $user = User::find($id);

        if ($user && $user->id === Auth::id()) {
            Auth::logout();

            $user->delete();

            return redirect('/')->with('success', 'Perfil eliminado correctamente.');
        }

        return redirect('/perfil')->with('error', 'No se pudo eliminar el perfil.');
    }   
}
