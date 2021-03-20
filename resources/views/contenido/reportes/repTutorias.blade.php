
@extends('master')
@section('contenido')
<link href="{{ asset(mix('css/app.css')) }}" rel="stylesheet">
<script src="{{ asset(mix('js/app.js')) }}"></script>
<LInk href="{{asset('/css/carga.css')}}" rel="stylesheet">
<script src="{{ url('js/reportes/inicio.js')}}"></script>


        <div class="mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-desktop ">
        <meta name="csrf-token" content="{{ csrf_token() }}">
                <div class="mdc-card">
                <div id="div_msjg" style="position: -webkit-sticky; position: sticky; top: 0; z-index: 99;" class="alert alert-warning"></div> 
                
                <h6 class="card-title" id="lbl_Titulo">Concentrado de </h6>  <br>
                <input type='hidden' name="hid_IdUser_" id="hid_IdUser" value="{{ auth()->user()->id }}">

              
                    <div id="div_chkTipoSesion">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="rdb_tipoAsesoria" id="rdb_Tutoria" value="2" disabled>
                          <label class="form-check-label" for="lbl_Tutoria">Tutoria</label>
                        </div>
                        <div class="form-check form-check-inline">                         
                          <input class="form-check-input" type="radio" name="rdb_tipoAsesoria" id="rdb_Asesoria" value="1" disabled>
                          <label class="form-check-label" for="lbl_Asesoria">Asesoria </label>
                        </div>
                        
                        <label for="fecha">Año -Mes de Registro</label> 
                        <div class="form-check form-check-inline">
                            <form action="" method="POST" id="frm_fecha" class="form-row mb-4">
                                  <input type="month"  min="2020-01" required="required" name="fecha" id="txt_fecha" class="form-control" >
                          </form>
                        </div>
                    </div>                    
                    
        
                <div class="mdc-card">
                <div class="table-responsive">
                  
                    <table id="tb_Datos" class="table">
                      <thead>                         
                        <tr>
                         
                          <th class="text-left">Profesor</th>
                          <th class="text-left">Programa Educativo</th>
                          <th>Cuatrimestre</th>
                          <th>Grupo</th>
                          <th>Tipo de Tutoría</th>
                          <th>No. de tutorías</th>
                          <th>Num. Hombres</th>
                          <th>Num. Mujeres</th>
                          <th>No. de Asistente(s)</th>
                        </tr>
                      </thead>
                      <tbody id="tbody_datos">
                                             
                      </tbody>
                    </table>
                  </div>
                  

                </div>
                <div id="div_btnOpera" mdc-layout-grid__cell--span-12-desktop class="opera mdc-card" >
                        <div id="div_btnCrud" >
                            <button  Id="btn_Reporte_1" onclick="btn_Reporte();"  type="button" class="btn btn-success btn-sm opera">Reporte</button>
                            
                        </div>

                        <div id="div_btnExt" class="div_btnExt" style="display:none;">                            
                            <button  type="button" id="btn_cancel" onclick="cancelar();" class="btn btn-danger btn-sm opera" >Cancelar</button>                            
                        </div>
                        
                        
                  </div>

                  

                <!--   <button type="button" class="btn btn-primary" onclick="muestarModal();" data-toggle="modal" data-target="#exampleModal">
                            Launch demo modal
                  </button>  -->

</div>
 


@endsection

