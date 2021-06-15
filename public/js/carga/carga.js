window.onload=function() {
    cargaInicial();
    HabilitaControles(true)
    campoSoloNumeros();
    $("#div_msjg").hide();

    
    
}




let titulo = "Carga de información para la # $";

function cargaInicial(){
    let url = $(location).attr('href');
    //let titulo = "Carga de información para la # $";
    

    let pathname = $(location).attr('pathname');
    let rdb_Tutoria = document.getElementById("rdb_Tutoria");
    let rdb_Asesoria = document.getElementById("rdb_Asesoria");
    let lbl_Titulo = document.getElementById("lbl_Titulo");

    if (pathname== "/tutoria"){    
        rdb_Tutoria.checked = true;
        rdb_Asesoria.checked = false;        
        titulo = titulo.replace("#","tutoria");
        lbl_Titulo.innerHTML = titulo.replace("$","");
        }

    else if (pathname== "/asesoria"){    
        rdb_Asesoria.checked = true;
        rdb_Tutoria.checked = false;
        titulo = titulo.replace("#","asesoria");
        lbl_Titulo.innerHTML = titulo.replace("$","");
        }

        $('#txt_fecha').on('change', function() {
            let fechaCarga = document.getElementById("txt_fecha").value;
            lbl_Titulo.innerHTML = titulo.replace("$",fechaCarga);
          });

          $('[id$=txt_NoHom]').on('change', function() {
            $('[id$=txt_NoAsist]')[0].value = sumaAsistentes();
          });

          $('#txt_NoMujer').on('change', function() {
            $('[id$=txt_NoAsist]')[0].value = sumaAsistentes();
          });
       
          $('[id$=txt_NoAsist]')[0].value = sumaAsistentes();
          
        
}

function sumaAsistentes(){
    let totHombres = ($('[id$=txt_NoHom]')[0].value == "" ? "0" : $('[id$=txt_NoHom]')[0].value);
    let totMujeres = ($('[id$=txt_NoMujer]')[0].value == "" ? "0" : $('[id$=txt_NoMujer]')[0].value);

    return parseInt(totHombres) + parseInt(totMujeres);

}
   
function HabilitaControles(op){
    document.getElementById("txt_fecha").disabled  = !op;
    document.getElementById("ddl_programE").disabled  = op;
    document.getElementById("txt_noTuto").disabled  = true;
    document.getElementById("ddl_cuatri").disabled  = op;
    document.getElementById("txt_NoHom").disabled  = op;
    document.getElementById("ddl_grupo").disabled  = op;
    document.getElementById("txt_NoMujer").disabled  = op;
    document.getElementById("rdb_grupal").disabled  = op;
    document.getElementById("rdb_individual").disabled  = op;
    document.getElementById("txt_NoAsist").disabled  = true;    
    document.getElementById("btn_add").disabled = op;
    document.getElementById("btn_dell").disabled = op;
    document.getElementById("chk_all").disabled = op;
}

function campoSoloNumeros(){
    document.getElementById("txt_noTuto").addEventListener("keypress", soloNumeros, false);
    document.getElementById("txt_NoHom").addEventListener("keypress", soloNumeros, false);
    document.getElementById("txt_NoMujer").addEventListener("keypress", soloNumeros, false);
    document.getElementById("txt_NoAsist").addEventListener("keypress", soloNumeros, false);

}


function OcultaOpera(op){  
    if(op){
        document.getElementById("div_btnCrud").style.display = "none";
        document.getElementById("div_btnExt").style.display = "block";
    }
    else{
        document.getElementById("div_btnCrud").style.display = "block";
        document.getElementById("div_btnExt").style.display = "none";
    } 
    }
  
    /****************************Botones de Acción************************************/
    
    function cancelar(){
        OcultaOpera(false);
        HabilitaControles(true);
        limpiaDatos();
        document.getElementById("btn_seOK").style.display = "inline";
        
    }

    function btn_Alta(){    
        localStorage.setItem("Ope", 1);
        let usuarioId = $("[id$=hid_IdUser]").val(); 
        let fechaCarga = document.getElementById("txt_fecha").value;
        let tipoSesion = $('input:radio[name=rdb_tipoAsesoria]:checked').val();
        let txt_fecha = document.getElementById("txt_fecha");
        if (txt_fecha.value == ""){
            msjAlerta("Agregar fecha de registro.");
            txt_fecha.focus();
        }
        else{

            $.ajax({
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                type: 'post',
                dataType: 'json',
                url: "consultaSes", //'{{ route("registra") }}',
                data: {
                    '_token': $('input[name=_token]').val(),
                    'usuarioId' : usuarioId  ,
                    'fechaCarga': fechaCarga.replace("-",""),
                    'tipoSesion' : tipoSesion 
                },
                beforeSend: function () {
                    
                },
                complete: function () {
                   
                },
                success: function (response) {
                    if(response.length==0){
                        document.getElementById("btn_seOK").innerHTML = "Guardar";
                        HabilitaControles(false);
                        OcultaOpera(true);
                    }
                    else{
                        msjAlerta("Ya existen registros para el mes seleccionado.");
                        txt_fecha.focus();
                    }
                    
                },
                error: function (jqXHR, xhr) {
                    console.log('boo!');
                    console.log(xhr.responseText);
                }
            });
           
        }

       
        
             
    }
    
    

    function altaDeRegistro(){
        valores=new Array();
        let usuarioId = $("[id$=hid_IdUser]").val(); 
        let fechaCarga = document.getElementById("txt_fecha").value;
        let tipoSesion = $('input:radio[name=rdb_tipoAsesoria]:checked').val();
        let mensajeAlta = 0;

        $('[id$=tbody_datos] tr').each(function () {
            
            if(this.id.split("_")[1] == 0){

            

                    let hiidde_programE = $(this).find('input[name=hid_programE_]').val();
                    let hiidde_cuatri = $(this).find('input[name=hid_cuatri_]').val();
                    let hiidde_grupo = $(this).find('input[name=hid_grupo_]').val();
                    let hiidde_tipo = $(this).find('input[name=hid_tipo_]').val();

                    
                    let td_noTuto_ = $(this).find('td[name=td_noTuto_]').text();
                    let td_NoHom_ = $(this).find('td[name=td_NoHom_]').text();
                    let td_NoMujer_ = $(this).find('td[name=td_NoMujer_]').text();
                    let td_NoAsist_ = $(this).find('td[name=td_NoAsist_]').text();

                    let concatena = usuarioId + "," + tipoSesion + "," + hiidde_programE + "," + hiidde_cuatri + "," + hiidde_grupo + "," + hiidde_tipo + "," +
                    td_noTuto_ + "," + td_NoHom_ + "," + td_NoMujer_ + "," + td_NoAsist_ + "," + fechaCarga.replace("-","");

                

                            $.ajax({
                                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                                type: 'post',
                                dataType: 'json',
                                url: "registra", //'{{ route("registra") }}',
                                data: {
                                    '_token': $('input[name=_token]').val(),
                                    'usuarioId' : '', // usuarioId,
                                    'tipoSesion':  tipoSesion,
                                    'hiidde_programE': hiidde_programE,
                                    'hiidde_cuatri':  hiidde_cuatri,
                                    'hiidde_grupo':hiidde_grupo,
                                    'hiidde_tipo':hiidde_tipo,
                                    'td_noTuto':td_noTuto_,
                                    'td_NoHom':td_NoHom_,
                                    'td_NoMujer':td_NoMujer_,
                                    'td_NoAsist': td_NoAsist_,
                                    'fechaCarga': fechaCarga.replace("-","") 
                                },
                                beforeSend: function () {                                   
                                 
                                },
                                complete: function () {                                  
                                   
                                },
                                success: function (response) {
                                    mensajeAlta = response;                                 
                                    console.log(response);
                                    mensajesAltanum(response);
                                   

                                },
                                error: function (response, jqXHR, xhr) {
                                    mensajeAlta = response;
                                    mensajesAltanum(response);

                                    console.log(response);

                                   
                                  
                                }
                            });
                }                      
            });  
              
           
    }

    function mensajesAltanum(obj1){         
        if(obj1 > 0){
            mensajesGuardar("Se guardaron correctamente los registros", "Confimación");
        }
        else{
            mensajesGuardar("Error! Hay un problema para guardar el registro.", "Alerta");
        }

    }

/****************************************************************/   
function mensajesGuardar(msj, titulo){
    ocultaModal()
    
    $('[id$=h5_title]')[0].innerHTML = titulo;
    $('[id$=div_modBody]')[0].innerHTML = msj ;
    var boton = document.getElementById("btn_modAcep");
    var botonCanel = document.getElementById("btn_modCancel");
    botonCanel.style.display = "none";
    
         // cuando se pulsa en el enlace
     boton.onclick = function(e) {ocultaModal(); cancelar();}
     muestarModal();

}

function addFila(){
    if(!validaCampos()){ return false;}
    let renglon = "";
    let Infila = "<tr id='tr_0'>"; let finfila = "</tr>"
    let InCelda = "<td name='&' class='text-left'>"; let finCelda = "</td>"
    let tabla = $('[id$=tbody_datos]')[0];
     
    let fila_Id = 0;
   // if ($('[id$=tbody_datos] tr').length == 0){fila_Id =0;}
   // else{fila_Id  = $('[id$=tbody_datos] tr').length + 1; }

    let hiidde_programE = "<input id='hid_programE_"+ fila_Id +"' name='hid_programE_' type='hidden' value="+ $('select[id="ddl_programE"] option:selected').val() + "></input>"
    let hiidde_cuatri = "<input id='hid_cuatri_"+ fila_Id +"' name='hid_cuatri_' type='hidden' value='"+ $('select[id="ddl_cuatri"] option:selected').val() +"'></input>"
    let hiidde_grupo = "<input id='hid_grupo_"+ fila_Id +"' name='hid_grupo_' type='hidden' value="+ $('select[id="ddl_grupo"] option:selected').val() + "></input>"
    let hiidde_tipo = "<input id='hid_tipo_"+ fila_Id +"' name='hid_tipo_' type='hidden' value='"+ $('input:radio[name=rdb_Tipo]:checked').val() +"'></input>"

    let all_hiden  = hiidde_programE + hiidde_cuatri + hiidde_grupo + hiidde_tipo;
    ///console.log(all_hiden);

    let chk_  = "<input type='checkbox' id='chk_one_"+ fila_Id +"'>"

    
    renglon += InCelda + chk_ + all_hiden +  finCelda;
    renglon += InCelda + $('select[id="ddl_programE"] option:selected').text() + finCelda;
    renglon +=  InCelda + $('select[id="ddl_cuatri"] option:selected').text() + finCelda;
    renglon +=  InCelda + $('select[id="ddl_grupo"] option:selected').text() + finCelda;

    let tipo = $('input:radio[name=rdb_Tipo]:checked')[0].id.split("_")[1];

    renglon +=  InCelda.replace("&","td_tipo_") + $("[id$=lbl_"+ tipo + "]")[0].innerHTML + finCelda;
    renglon +=  InCelda.replace("&","td_noTuto_") + $('[id$=txt_noTuto]')[0].value; + finCelda;
    renglon +=  InCelda.replace("&","td_NoHom_") + $('[id$=txt_NoHom]')[0].value; + finCelda;
    renglon +=  InCelda.replace("&","td_NoMujer_") + $('[id$=txt_NoMujer]')[0].value; + finCelda;
    renglon +=  InCelda.replace("&","td_NoAsist_") + $('[id$=txt_NoAsist]')[0].value; + finCelda;

    tabla.innerHTML += Infila + renglon + finfila;
   
    

}

function dellFila(){
    $('[id*=chk_one_]').each(function (index) { 
        if(this.checked){ 
            $('[id$=hid_idsDell]')[0].value += this.id.split("_")[2] + ",";
            $(this).parent().parent().remove()
        }
    })

    $('[id$=chk_all]')[0].checked = false;
} 

function checkTodos(obj){
    $('[id*=chk_one_]') .each(function (index) { 
        this.checked = obj.checked;
        
    })

}
