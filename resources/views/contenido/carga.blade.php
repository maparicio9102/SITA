
@extends('master')
@section('contenido')
<link href="{{ asset(mix('css/app.css')) }}" rel="stylesheet">
<script src="{{ asset(mix('js/app.js')) }}"></script>

<LInk href="{{asset('/css/carga.css')}}" rel="stylesheet">
<script src="{{ url('js/carga/carga.js')}}"></script>
<script src="{{ url('js/carga/elimina.js')}}"></script>
<script src="{{ url('js/carga/cambio.js')}}"></script>
<script src="{{ url('js/carga/consulta.js')}}"></script>
<script src="{{ url('js/carga/validaciones.js')}}"></script>

        <div class="mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-desktop ">
        <meta name="csrf-token" content="{{ csrf_token() }}">
                <div class="mdc-card">
                <div id="div_msjg" style="position: -webkit-sticky; position: sticky; top: 0; z-index: 99;" class="alert alert-warning"></div> 
                
                <h6 class="card-title" id="lbl_Titulo">Carga de información para la asesoria  </h6>  <br>
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
                    

                  <div class="table-responsive">                    
                  <table class="table" >
                  <tbody>
                    <tr>
                    <td  class="text-left">Programa Educativo</td>
                    <td class="text-left">
                          <select id="ddl_programE" class="form-select" aria-label="Default select example">
                          <option selected value="-1">Programa Educativo</option>
                          @foreach($progEdu as $program)
                          <option value="'{{$program -> cPROE_Id}}'"> {{ $program ->cPROE_Nombre}} </option>
                          @endforeach
                          </select>
                    </td>
                    <td  class="text-left">No. de tutorías</td>
                    <td  class="text-left">
                        <input type="text" class="form-control" id="txt_noTuto" maxlength="3" value="0" disabled placeholder="0">
                    </td>
                    </tr>
                    <tr>
                    <td  class="text-left">Cuatrimestre</td>
                    <td class="text-left">
                          <select id="ddl_cuatri" class="form-select" aria-label="Default select example">
                            <option selected value="-1">Cuatrimestre</option>
                            <option value="1">1º</option>
                            <option value="2">2º</option>
                            <option value="3">3º</option>
                            <option value="4">4º</option>
                            <option value="5">5º</option>
                            <option value="6">6º</option>
                            <option value="7">7º</option>
                            <option value="8">8º</option>
                            <option value="9">9º</option>
                            <option value="10">10º</option>
                            <option value="11">11º</option>                            
                          </select>
                    </td>
                    <td  class="text-left">Num. Hombres</td>
                    <td  class="text-left">
                        <input type="text" class="form-control" id="txt_NoHom"  maxlength="3" placeholder="0">
                        
                    </td>
                    </tr>
                    <tr>
                    <td  class="text-left">Grupo</td>
                    <td class="text-left">
                          <select id="ddl_grupo" class="form-select" aria-label="Default select example">
                            <option selected value="-1">Grupo</option>                           
                          @foreach($grupos as $grupo)
                          <option value="'{{$grupo -> cgrp_id}}'"> {{ $grupo ->cgrp_nombre}} </option>
                          @endforeach
                          </select>
                    </td>
                    <td  class="text-left">Num. Mujeres</td>
                    <td  class="text-left">
                        <input type="text" class="form-control" id="txt_NoMujer" maxlength="3"  placeholder="0">
                    </td>
                    </tr>
                    <tr>
                    <td  class="text-left">Tipo de Tutoría</td>
                    <td class="text-left">
                          <input class="form-check-input" type="radio" name="rdb_Tipo" id="rdb_grupal" value="1" checked>
                          <label class="form-check-label" for="lbl_grupal" id="lbl_grupal" >Grupal</label>
                          <input class="form-check-input" type="radio"  name="rdb_Tipo" id="rdb_individual" value="2" >
                          <label class="form-check-label" for="lbl_individual" id="lbl_individual">Individual</label>
                    </td>
                    <td  class="text-left">No. de Asistente(s)</td>
                    <td  class="text-left">
                        <input type="text" class="form-control" id="txt_NoAsist" maxlength="3"  placeholder="0">
                    </td>
                    </tr>
                  </tbody>
                  </table>
                  
                  </div>

                  <div class="template-demo">                    
                        <button id="btn_add" onclick="addFila();" type="button"  class="btn btn-success btn-sm opera" disabled>Añadir</button>
                        
                    </div>
                </div>

                <div class="mdc-card">
                <div class="table-responsive">
                  
                    <table id="tb_Datos" class="table">
                      <thead>                         
                        <tr>
                          <th><input type="checkbox" onclick="checkTodos(this);" id="chk_all"></th>
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
                        <!-- <tr>
                          <td class="text-left">T.S.U. en Mecatrónica Área Automatización</td>
                          <td>2º</td><td>A</td><td>Grupal</td><td>4</td><td>56</td><td>8</td><td>64</td>                          
                        </tr> -->
                       
                      </tbody>
                    </table>
                  </div>
                  <div class="template-demo">
                        <button id="btn_dell" onclick="dellFila();" type="button" class="btn btn-danger btn-sm opera"  disabled>Eliminar</button>
                        <input type='hidden' name="hid_idsDell" id="hid_idsDell" value="">
                  </div>

                </div>
                <div id="div_btnOpera" mdc-layout-grid__cell--span-12-desktop class="opera mdc-card" >
                        <div id="div_btnCrud" >
                            <button  Id="btn_Alta_1" onclick="btn_Alta();"  type="button" class="btn btn-success btn-sm opera">Alta</button>
                            <button  Id="btn_Baja_2" onclick="btn_Elimina();" type="button"  class="btn btn-danger btn-sm opera" >Baja</button>
                            <button  Id="btn_Cambio_4" onclick="btn_Cambio();"  type="button"  class="btn btn-info btn-sm opera" >Cambio</button>
                            <button  Id="btn_Consulta_8"  onclick="btn_Consultas();"  type="button" class="btn btn-warning btn-sm opera">Consulta</button>
                            <button  type="button" onclick="validaCampos();" style="display:none; " class="btn btn-warning btn-sm opera">prueba</button>
                        </div>
                        <div id="div_btnExt" class="div_btnExt" style="display:none;">
                            <button  type="button" id="btn_seOK" onclick="validaGuardar();"  class="btn btn-success btn-sm opera">Guardar</button>
                            <button  type="button" id="btn_cancel" onclick="cancelar();" class="btn btn-danger btn-sm opera" >Cancelar</button>                            
                        </div>
                        
                  </div>

                  

                <!--   <button type="button" class="btn btn-primary" onclick="muestarModal();" data-toggle="modal" data-target="#exampleModal">
                            Launch demo modal
                  </button>  -->

</div>
 


@endsection

