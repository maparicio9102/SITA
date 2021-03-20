<?php

namespace App\Http\Controllers\controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class reportesController extends Controller
{
    

    public function ReporteConcentrado(){                
        return view('contenido.reportes.repTutorias');
    }

    public function consultaConcentradoSes(Request $request){
        $usuarioId = $request->input('usuarioId');       
        $fechaCarga = $request->input('fechaCarga');
        $tipoSesion = $request->input('tipoSesion');

        $tbSesiones = DB::select("CALL sPS_ObtieneConcentradoSes (?,?)",
        array($tipoSesion, $fechaCarga ));             

        return $tbSesiones;
    }


}
