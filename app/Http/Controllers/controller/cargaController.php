<?php

namespace App\Http\Controllers\controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class cargaController extends Controller
{
   
    public function carga(){
        //$progEdu = DB::table("cproe_programaeducativo")->select('cPROE_Id', 'cPROE_Nombre') -> get();
        //$progEdu = DB::select("call sPS_ObtieneProgramas()");
        $progEdu = $this-> ObtieneProgramas();        
        $grupos = $this-> ObtieneGrupos();        
        return view('contenido.carga', compact("progEdu", "grupos"));

    }

    public function asesoria($tipo){
        return view('contenido.carga', compact("tipo"));
        //return $tipo;
    }


    /* Funciones de base de datos*/

    public  function ObtieneProgramas(){
        $progEdu = DB::select("call sPS_ObtieneProgramas()");
        return $progEdu;
    }

    public  function ObtieneGrupos(){
        $grupos = DB::table("cGRP_Grupo")->select('cGRP_Id', 'cGRP_nombre') -> get();
        return $grupos;
    }



}

