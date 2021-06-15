window.onload=function() {   
    $("#div_msjg").hide();

    let pathname = $(location).attr('pathname');

    if (pathname== "/reptutoria"){    
        rdb_Tutoria.checked = true;
        rdb_Asesoria.checked = false;        
        titulo = titulo.replace("#","tutoria");
        lbl_Titulo.innerHTML = titulo.replace("$","");
        }

    else if (pathname== "/repasesoria"){    
        rdb_Asesoria.checked = true;
        rdb_Tutoria.checked = false;
        titulo = titulo.replace("#","asesoria");
        lbl_Titulo.innerHTML = titulo.replace("$","");
        }

}

let titulo = "Concentrado de # ";

function btn_Reporte(){
  
 

      
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
                url: "consultaConcentrado", //'{{ route("registra") }}',
                data: {
                    '_token': $('input[name=_token]').val(),
                    'tipoSesion' : tipoSesion ,                    
                    'fechaCarga': txt_fecha.value.replace("-","")
                    
                },
                beforeSend: function () {
                    
                },
                complete: function () {
                   
                },
                success: function (response) {
                    if(response.length==0){
                        msjAlerta("No existen registros para el mes seleccionado.");
                        txt_fecha.focus();                        
                    }
                    else{
                        tablaConcentradoSes(response);
                        OcultaOpera(true);
                    }
                    
                },
                error: function (jqXHR, xhr) {
                    console.log('boo!');
                    console.log(xhr.responseText);
                }
            });
           
        }

}



function tablaConcentradoSes(obj){
   
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
    
  
    renglon += InCelda + item.name + finCelda;
    renglon += InCelda + item.cPROE_Nombre + finCelda;
    renglon +=  InCelda + item.aSES_Cuatrimestre + "º" + finCelda;
    renglon +=  InCelda + item.cGRP_Nombre + finCelda;

   
    renglon +=  InCelda.replace("&","td_tipo_") + item.aSES_TipoNombre + finCelda;
    renglon +=  InCelda.replace("&","td_noTuto_") + item.aSES_NumAsesorias + finCelda;
    renglon +=  InCelda.replace("&","td_NoHom_") + item.aSES_NumHombres + finCelda;
    renglon +=  InCelda.replace("&","td_NoMujer_") + item.aSES_NumMujeres + finCelda;
    renglon +=  InCelda.replace("&","td_NoAsist_") + item.aSES_NumAsistentes; + finCelda;
    tabla.innerHTML += Infila + renglon + finfila; 
    });

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

    function cancelar(){
        OcultaOpera(false);
        limpiaDatos();
    }

    function limpiaDatos(){
        document.getElementById("txt_fecha").value  = "";
        let tabla = $('[id$=tbody_datos]')[0];
        tabla.innerHTML = "";    

    }