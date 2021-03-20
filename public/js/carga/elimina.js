function btn_Elimina(){    
    localStorage.setItem("Ope", 2);    
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
                    document.getElementById("btn_seOK").innerHTML = "Elimina";
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


function llenaIDS(){
    $('[id$=tbody_datos] tr').each(function () {            
        $('[id$=hid_idsDell]')[0].value += this.id.split("_")[1] + ",";

    });

 
}

function EliminaRegistros(){
    llenaIDS();
    let usuarioId = $("[id$=hid_IdUser]").val(); 
    let fechaCarga = document.getElementById("txt_fecha").value;    
    let arrSesions =  $('[id$=hid_idsDell]')[0].value.split(",");
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
                    'usuarioId' : usuarioId ,
                    'fechaCarga': fechaCarga.replace("-","")
                     
                },
                beforeSend: function () {
                    
                },
                complete: function () {
                
                },
                success: function (response) {                
                    mensajeEliminar();
                },
                error: function (jqXHR, xhr) {
                    //console.log('boo!');
                    console.log(xhr.responseText);
                }
            });
        }



}

function mensajeEliminar(){
    ocultaModal()
    
    $('[id$=h5_title]')[0].innerHTML = "Confimación - Eliminar"
    $('[id$=div_modBody]')[0].innerHTML = "Se eliminaron correctamente los registros"
    var boton = document.getElementById("btn_modAcep");
    var botonCanel = document.getElementById("btn_modCancel");
    botonCanel.style.display = "none";
    
         // cuando se pulsa en el enlace
     boton.onclick = function(e) {ocultaModal(); cancelar();}
     muestarModal();

}