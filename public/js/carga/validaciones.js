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


