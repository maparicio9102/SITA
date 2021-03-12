window.onload=function() {
    cargaInicial();
    HabilitaControles(false)
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
    document.getElementById("txt_fecha").disabled  = op;
    document.getElementById("ddl_programE").disabled  = op;
    document.getElementById("txt_noTuto").disabled  = op;
    document.getElementById("ddl_cuatri").disabled  = op;
    document.getElementById("txt_NoHom").disabled  = op;
    document.getElementById("ddl_grupo").disabled  = op;
    document.getElementById("txt_NoMujer").disabled  = op;
    document.getElementById("rdb_grupal").disabled  = op;
    document.getElementById("rdb_individual").disabled  = op;
    document.getElementById("txt_NoAsist").disabled  = true;    
    document.getElementById("btn_add").disabled = op;
    document.getElementById("btn_dell").disabled = op;
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
        OcultaOpera(true)
        HabilitaControles(true);    
    }

    function btn_Alta(){        
        let txt_fecha = document.getElementById("txt_fecha");
        if (txt_fecha.value == ""){
            msjAlerta("Agregar fecha de registro.");
            txt_fecha.focus();
            bandera = false;
        }
        else{
            HabilitaControles(false);
            OcultaOpera();
        }        
    } 

/****************************************************************/   


function addFila(){
    if(!validaCampos()){ return false;}
    let renglon = "";
    let Infila = "<tr>"; let finfila = "</tr>"
    let InCelda = "<td>"; let finCelda = "</td>"
    let tabla = $('[id$=tbody_datos]')[0];
    
    renglon += InCelda + $('select[id="ddl_programE"] option:selected').text() + finCelda;
    renglon +=  InCelda + $('select[id="ddl_cuatri"] option:selected').text() + finCelda;
    renglon +=  InCelda + $('select[id="ddl_grupo"] option:selected').text() + finCelda;

    let tipo = $('input:radio[name=rdb_Tipo]:checked')[0].id.split("_")[1];

    renglon +=  InCelda + $("[id$=lbl_"+ tipo + "]")[0].innerHTML + finCelda;
    renglon +=  InCelda + $('[id$=txt_noTuto]')[0].value; + finCelda;
    renglon +=  InCelda + $('[id$=txt_NoHom]')[0].value; + finCelda;
    renglon +=  InCelda + $('[id$=txt_NoMujer]')[0].value; + finCelda;
    renglon +=  InCelda + $('[id$=txt_NoAsist]')[0].value; + finCelda;

    tabla.innerHTML += Infila + renglon + finfila;

    
    
    

    console.log(tabla);
    

}