<?php

namespace App\Http\Controllers\controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class cargaController extends Controller
{
    public function carga(){
        return view('contenido.carga');
        //return $tipo;
    }

    public function asesoria($tipo){
        return view('contenido.carga', compact("tipo"));
        //return $tipo;
    }
}

