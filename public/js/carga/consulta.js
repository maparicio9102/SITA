function btn_Consultas(){    
    localStorage.setItem("Ope", 8);    
    let usuarioId = $("[id$=hid_IdUser]").val(); 
    let fechaCarga = document.getElementById("txt_fecha").value;
    let tipoSesion = $('input:radio[name=rdb_tipoAsesoria]:checked').val();
    let txt_fecha = document.getElementById("txt_fecha");
   
    if (txt_fecha.value == ""){
        msjAlerta("Agregar fecha de registro.");
        txt_fecha.focus();
        bandera = false;
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
                    document.getElementById("btn_seOK").style.display = "none";
                    llenaSesiones();
                    HabilitaControles(true);
                    OcultaOpera(true);
                    document.getElementById("txt_fecha").disabled  = true; 
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
     


function llenaSesiones(){
    let usuarioId = $("[id$=hid_IdUser]").val(); 
    let fechaCarga = document.getElementById("txt_fecha").value;
    let tipoSesion = $('input:radio[name=rdb_tipoAsesoria]:checked').val();
   
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
            //console.log('bloqueo botones');
        },
        complete: function () {
            //console.log('desbloqueo botones');
        },
        success: function (response) {
            //console.log(response);
           // console.log("OK");
            muestraTablaSesiones(response);
        },
        error: function (jqXHR, xhr) {
            //console.log('boo!');
            console.log(xhr.responseText);
        }
    });

}

function muestraTablaSesiones(obj){
   
    $.each(obj, function(i, item) {
        //alert(item.aSES_Id);
    let fila_Id = item.aSES_Id; 
    let renglon = "";
    let Infila = "<tr id='tr_"+ fila_Id +"'>"; let finfila = "</tr>"
    let InCelda = "<td name='&' class='text-left'>"; let finCelda = "</td>"
    let tabla = $('[id$=tbody_datos]')[0];
     

    let hiidde_programE = "<input id='hid_programE_"+ fila_Id +"' name='hid_programE_' type='hidden' value="+ item.cPROE_Id + "></input>"
    let hiidde_cuatri = "<input id='hid_cuatri_"+ fila_Id +"' name='hid_cuatri_' type='hidden' value='"+  item.aSES_Cuatrimestre +"'></input>"
    let hiidde_grupo = "<input id='hid_grupo_"+ fila_Id +"' name='hid_grupo_' type='hidden' value="+ item.cGRP_Id + "></input>"
    let hiidde_tipo = "<input id='hid_tipo_"+ fila_Id +"' name='hid_tipo_' type='hidden' value='"+  item.aSES_Tipo +"'></input>"

    let all_hiden  = hiidde_programE + hiidde_cuatri + hiidde_grupo + hiidde_tipo;
    
    let operacion = parseInt(localStorage.getItem("Ope"));
    let chkHabil = ''
    if (operacion == 8 || operacion == 2  ){chkHabil = 'disabled'}
   

    let chk_  = "<input type='checkbox' "+ chkHabil +"  id='chk_one_"+ fila_Id +"'>"
    
    renglon += InCelda + chk_ + all_hiden +  finCelda;
    renglon += InCelda + item.cPROE_Nombre + finCelda;
    renglon +=  InCelda + item.aSES_Cuatrimestre + "º" + finCelda;
    renglon +=  InCelda + item.cGRP_Nombre + finCelda;

    let tipo = $('input:radio[name=rdb_Tipo]:checked')[0].id.split("_")[1];
 
    renglon +=  InCelda.replace("&","td_tipo_") + item.aSES_TipoNombre + finCelda;
    renglon +=  InCelda.replace("&","td_noTuto_") + item.aSES_NumAsesorias + finCelda;
    renglon +=  InCelda.replace("&","td_NoHom_") + item.aSES_NumHombres + finCelda;
    renglon +=  InCelda.replace("&","td_NoMujer_") + item.aSES_NumMujeres + finCelda;
    renglon +=  InCelda.replace("&","td_NoAsist_") + item.aSES_NumAsistentes; + finCelda;
    tabla.innerHTML += Infila + renglon + finfila;
    });

}