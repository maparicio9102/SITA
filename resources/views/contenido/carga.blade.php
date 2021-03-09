
@extends('master')
@section('contenido')

<LInk href="{{asset('/css/carga.css')}}" rel="stylesheet">
<script src="{{ url('js/carga.js')}}"></script>

        <div class="mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-desktop ">
                <div class="mdc-card">
                   <h6 class="card-title">Carga de información para la asesoria 202001</h6> 
                    <div id="div_chkTipoSesion">
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                        <label class="form-check-label" for="inlineRadio1">Asesoria</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">Tutoria</label>
                        </div>
                        <!-- <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
                        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                        </div> -->
                    </div>                    

                    <div id="div_btnOpera" mdc-layout-grid__cell--span-12-desktop class="opera" >
                        <div id="div_btnCrud" >
                            <button onclick="OcultaOpera();"  type="button" class="btn btn-success btn-sm opera">Alta</button>
                            <button  type="button" class="btn btn-info btn-sm opera" >Cambio</button>
                            <button  type="button" class="btn btn-warning btn-sm opera">Consulta</button>
                        </div>
                        <div id="div_btnExt" style="display:none;">
                            <button  type="button"  class="btn btn-success btn-sm opera">Guardar</button>
                            <button  type="button" onclick="cancelar();" class="btn btn-danger btn-sm opera" >Cancelar</button>                            
                        </div>
                        
                  </div>
                  
                  <div class="table-responsive">
                  
                    <table class="table table-hoverable">
                      <thead>                         
                        <tr>                          
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
                      <tbody>
                        <tr>
                          <td class="text-left">T.S.U. en Mecatrónica Área Automatización</td>
                          <td>2º</td>
                          <td>A</td>
                          <td>Grupal</td>
                          <td>4</td>
                          <td>56</td>
                          <td>8</td>
                          <td>64</td>                          
                        </tr>
                       
                      </tbody>
                    </table>
                    
                    <div class="template-demo">                    
                        <button id="btn_add" type="button"  class="btn btn-success btn-sm opera" disabled>Añadir</button>
                        <button id="btn_dell" type="button" class="btn btn-danger btn-sm opera"  disabled>Eliminar</button>
                    </div>

                  </div>
                </div>
              </div>
@endsection
