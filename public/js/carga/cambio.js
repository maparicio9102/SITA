function btn_Cambio(){    
    localStorage.setItem("Ope", 4);
    
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
                if(response.length!=0){
                    document.getElementById("btn_seOK").innerHTML = "Guardar";
                    llenaSesiones();
                    HabilitaControles(false);
                    OcultaOpera(true);
                }
                else{
                    msjAlerta("No existen registros para el mes seleccionado.");
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

function ActualizaRegistros(){
    let usuarioId = $("[id$=hid_IdUser]").val(); 
    let fechaCarga = document.getElementById("txt_fecha").value;
    let arrSesions =  $('[id$=hid_idsDell]')[0].value.split(",");

    let mensaje = 0;
    for (var i = 0; i < arrSesions.length -1 ; i++) {
        console.log(arrSesions[i]);

            $.ajax({
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                type: 'post',
                dataType: 'json',
                url: "eliminaSes", 
                data: {
                    '_token': $('input[name=_token]').val(),
                    "aSES_Id": arrSesions[i],
                    'usuarioId' : usuarioId  ,
                    'fechaCarga': fechaCarga.replace("-","")                    
                },
                beforeSend: function () {
                    
                },
                complete: function () {
                
                },
                success: function (response) {                
                    //mensajeEliminar();
                    mensaje +=1;
                },
                error: function (jqXHR, xhr) {
                    //console.log('boo!');
                    console.log(xhr.responseText);
                }
            });
        }

        valores=new Array();       
        let tipoSesion = $('input:radio[name=rdb_Tipo]:checked').val();
        
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
                    td_noTuto_ + "," + td_NoHom_ + "," + td_NoMujer_ + "," + td_NoAsist_ + "," + fechaCarga.replace("-","") + "," +"1";

                

                            $.ajax({
                                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                                type: 'post',
                                dataType: 'json',
                                url: "registra", //'{{ route("registra") }}',
                                data: {
                                    '_token': $('input[name=_token]').val(),
                                    'usuarioId' : usuarioId  ,                         
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
                                    mensaje +=1;
                                },
                                error: function (jqXHR, xhr) {
                                    console.log('boo!');
                                    console.log(xhr.responseText);
                                }
                            });
                }                      
            });  

            if (mensaje > 0){
                mensajesGuardar("Se actualizaron correctamente los registros");
            }
            else{ mensajesGuardar("No se realizo ningún cambio"); }
}


function mensajesCambio(msj){
    ocultaModal()
    
    $('[id$=h5_title]')[0].innerHTML = "Confimación - Actualiza"
    $('[id$=div_modBody]')[0].innerHTML = "Se actualizaron correctamente los registros"
    var boton = document.getElementById("btn_modAcep");
    var botonCanel = document.getElementById("btn_modCancel");
    botonCanel.style.display = "none";    
         
     boton.onclick = function(e) {ocultaModal(); cancelar();}
     muestarModal();

}