<?php

namespace App\Http\Controllers;
use App\Models\User; 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request)
    {
        User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password), 
        ]);

        
        return redirect('/');
    }

    public function login(Request $request){
        
        User::where('email', $request->email)->first();
        User::where('password', $request->password)->first();
        
        return redirect('/dashboard');
    }
}