<?php

namespace App\Http\Controllers;
use App\Models\User; 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;
use function Symfony\Component\String\s;

class UserController extends Controller
{
    public function store(Request $request)
    {
        // 1. Crear el usuario
        $user =
        User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password), 
            'img_url'  => $request->img_url ?? null,
        ]);
        
        //quiero que cuando se registre se cree ya la sesion

        Auth::login($user);
        $request->session()->regenerate();

        return redirect('/');
    }

    public function login(Request $request){

        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            Auth::login($user);
            $request->session()->regenerate();

            return redirect()->intended('/dashboard');
        }

        return back()->withErrors([
            'email' => 'Las credenciales proporcionadas no coinciden con nuestros registros.',
        ]);
    }
}