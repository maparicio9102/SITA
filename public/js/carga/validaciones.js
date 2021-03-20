/***** Validaciones  ******/
 

function validaCampos(){
    let bandera = true;        
     let div_msjg = document.getElementById("div_msjg");
     let mesnaje = "";


     let ddl_programE = document.getElementById("ddl_programE");
     let txt_noTuto = document.getElementById("txt_noTuto");
     let ddl_cuatri  =  document.getElementById("ddl_cuatri");
     let txt_NoHom =  document.getElementById("txt_NoHom");
     let ddl_grupo = document.getElementById("ddl_grupo");
     let txt_NoMujer  = document.getElementById("txt_NoMujer");
     let txt_NoAsist = document.getElementById("txt_NoAsist");
     //let rdb_grupal =  document.getElementById("rdb_grupal");
     ///let rdb_individual =  document.getElementById("rdb_individual");
     

     let rdb_all =  document.getElementById("rdb_Tipo");
     
     
     if(ddl_programE.value == "-1"){mesnaje = "Seleccione tipo de programa."; bandera = false; ddl_programE.focus();}
     else if(ddl_cuatri.value == "-1"){mesnaje = "Selecciona un cuatrimestre."; bandera = false; ddl_cuatri.focus();}
     else if(ddl_grupo.value == "-1"){mesnaje = "Selecciona un grupo."; bandera = false; ddl_grupo.focus();}
     else if(txt_noTuto.value == ""){mesnaje = "Agregar número de tutorías."; bandera = false; txt_noTuto.focus();}
     else if(txt_NoHom.value == ""){mesnaje = "Agregar número de hombres asistentes."; bandera = false; txt_NoHom.focus();}
     else if(txt_NoMujer.value == ""){mesnaje = "Agregar número de mujeres asistentes."; bandera = false; txt_NoMujer.focus();}
     else if(txt_NoAsist.value == ""){mesnaje = "Agregar número total de asistentes."; bandera = false; txt_NoAsist.focus();}
   
     if(!bandera){msjAlerta(mesnaje);}

     
     return bandera;
}




function limpiaDatos() {
    document.getElementById("txt_fecha").value  = "";
    document.getElementById("ddl_programE").value = -1;
    document.getElementById("txt_noTuto").value = "";
    document.getElementById("ddl_cuatri").value = -1;
    document.getElementById("txt_NoHom").value = "";
    document.getElementById("ddl_grupo").value = -1;
    document.getElementById("txt_NoMujer").value = "";
    $('[id$=hid_idsDell]')[0].value = "";
    /*document.getElementById("rdb_grupal").disabled  = op;
    document.getElementById("rdb_individual").disabled  = op;*/
    document.getElementById("txt_NoAsist").value = "0";
    let tabla = $('[id$=tbody_datos]')[0];
    tabla.innerHTML = "";    

}
    

function validaGuardar(){

    let operacion = parseInt(localStorage.getItem("Ope"));
   

    switch (operacion) {
        case 1:
            if ($('[id$=tbody_datos] tr').length == 0){
                msjAlerta("Agregue al menos un registro");
            }
            else{
                let fechaCarga = document.getElementById("txt_fecha").value;
                $('[id$=h5_title]')[0].innerHTML = "Alta"
                $('[id$=div_modBody]')[0].innerHTML = "¿Realmente desea guardar los registro para la "+ $(location).attr('pathname').replace("/","") +" "+ fechaCarga  +"?"                

                var boton = document.getElementById("btn_modAcep");
                    // cuando se pulsa en el enlace
                    boton.onclick = function(e) {altaDeRegistro();}
                    var botonCanel = document.getElementById("btn_modCancel");
                    botonCanel.style.display = "block";

                muestarModal();
            }
          break;
          case 2:
           
                let fechaCarga = document.getElementById("txt_fecha").value;
                $('[id$=h5_title]')[0].innerHTML = "Alta"
                $('[id$=div_modBody]')[0].innerHTML = "¿Realmente desea eliminar los registros para la "+ $(location).attr('pathname').replace("/","") +" "+ fechaCarga  +"?"                

                var boton = document.getElementById("btn_modAcep");
                    // cuando se pulsa en el enlace
                    boton.onclick = function(e) {EliminaRegistros();}
                    var botonCanel = document.getElementById("btn_modCancel");
                    botonCanel.style.display = "block";

                    muestarModal();
           

            break;

        case 4:
            if ($('[id$=tbody_datos] tr').length == 0){
                msjAlerta("Agregue al menos un registro");
            }
            else {
                let fechaCarga = document.getElementById("txt_fecha").value;
                $('[id$=h5_title]')[0].innerHTML = "Alta"
                $('[id$=div_modBody]')[0].innerHTML = "¿Realmente desea guardar los cambios para la "+ $(location).attr('pathname').replace("/","") +" "+ fechaCarga  +"?"                

                var boton = document.getElementById("btn_modAcep");
                    // cuando se pulsa en el enlace
                    boton.onclick = function(e) {ActualizaRegistros();}
                    var botonCanel = document.getElementById("btn_modCancel");
                    botonCanel.style.display = "block";

                muestarModal();
            }

          break;
        
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }    

}


