<?php

namespace App\Http\Controllers\controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class cargaController extends Controller
{
    public function carga(){
        return view('contenido.carga');
    }
}
