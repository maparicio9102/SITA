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
        $grupos = DB::table("cgrp_grupo")->select('cgrp_id', 'cgrp_nombre') -> get();
        return $grupos;
    }
    
    public function InsertaSesiones(Request $request){
        $usuarioId = $request->input('usuarioId');
        $tipoSesion = $request->input('tipoSesion');
        $hiidde_programE = $request->input('hiidde_programE');
        $hiidde_cuatri = $request->input('hiidde_cuatri');
        $hiidde_grupo = $request->input('hiidde_grupo');
        $hiidde_tipo = $request->input('hiidde_tipo');
        $td_noTuto = $request->input('td_noTuto');
        $td_NoHom = $request->input('td_NoHom');
        $td_NoMujer = $request->input('td_NoMujer');
        $td_NoAsist = $request->input('td_NoAsist');
        $fechaCarga = $request->input('fechaCarga');
        $estatus = 1;
        

       
          $progEdu = DB::select("CALL sPI_InsertaSesion (?,?,?,?,?,?,?,?,?,?,?,?)",
        array($usuarioId, $tipoSesion, $hiidde_programE, $hiidde_cuatri,
        $hiidde_grupo, $hiidde_tipo, $td_noTuto, $td_NoHom, $td_NoMujer, $td_NoAsist, $fechaCarga, $estatus));
        
      
        //$progEdu = DB::select("call sPI_InsertaSesion(".$usuarioId.",".$tipoSesion.",".$hiidde_programE.",".$hiidde_cuatri.",".$hiidde_grupo.",".$hiidde_tipo.",".$td_noTuto.",".$td_NoHom.",".$td_NoMujer.",".$td_NoAsist.",".$fechaCarga.")" ); 

        return $usuarioId & $tipoSesion & $hiidde_programE & $hiidde_cuatri & $hiidde_grupo &
        $hiidde_tipo & $td_noTuto & $td_NoHom & $td_NoMujer & $td_NoAsist & $fechaCarga;    
    }

    public function consultaSesiones(Request $request){
        $usuarioId = $request->input('usuarioId');       
        $fechaCarga = $request->input('fechaCarga');
        $tipoSesion = $request->input('tipoSesion');

        $tbSesiones = DB::select("CALL sPS_ObtieneSesiones (?,?,?)",
        array($usuarioId, $fechaCarga, $tipoSesion));             

        return $tbSesiones;
    }


    public function eliminaSesiones(Request $request){
        $usuarioId = $request->input('usuarioId');       
        $fechaCarga = $request->input('fechaCarga');
        $aSES_Id = $request->input('aSES_Id');
        $opcion = 1;
        

        $dellSesiones = DB::select("CALL spD_Sesiones (?,?,?,?)",
        array($aSES_Id, $usuarioId, $fechaCarga, $opcion));

        return $dellSesiones;

    }

    



}

