window.onload=function() {
    cargaInicial();
    HabilitaControles(true)

}


function cargaInicial(){
    let url = $(location).attr('href');
    let titulo = "Carga de información para la # 202001"    

    let pathname = $(location).attr('pathname');
    let rdb_Tutoria = document.getElementById("rdb_Tutoria");
    let rdb_Asesoria = document.getElementById("rdb_Asesoria");
    let lbl_Titulo = document.getElementById("lbl_Titulo");

    if (pathname== "/tutoria"){    
        rdb_Tutoria.checked = true;
        rdb_Asesoria.checked = false;        
        lbl_Titulo.innerHTML = titulo.replace("#","tutoria") ;        
        }

    else if (pathname== "/asesoria"){    
        rdb_Asesoria.checked = true;
        rdb_Tutoria.checked = false;
        lbl_Titulo.innerHTML = titulo.replace("#","asesoria");        
        }

        let txt_fecha = document.getElementById("txt_fecha");
        //alert(txt_fecha.value);
        
}
   
function HabilitaControles(op){
    document.getElementById("ddl_programE").disabled  = op;
    document.getElementById("txt_noTuto").disabled  = op;
    document.getElementById("ddl_cuatri").disabled  = op;
    document.getElementById("txt_NoHom").disabled  = op;
    document.getElementById("ddl_grupo").disabled  = op;
    document.getElementById("txt_NoMujer").disabled  = op;
    document.getElementById("rdb_grupal").disabled  = op;
    document.getElementById("rdb_individual").disabled  = op;
    document.getElementById("txt_NoAsist").disabled  = op;
    document.getElementById("txt_fecha").disabled  = !op;
}

function OcultaOpera(){   
    let objDivOpera = document.getElementById("div_btnCrud");
    let objDivExt = document.getElementById("div_btnExt");
    objDivOpera.style.display = "none";
    objDivExt.style.display="block";
    AddAndDell(false);   

    }
     
    
    function AddAndDell (op){
        let btnadd = document.getElementById("btn_add");
        let btndell = document.getElementById("btn_dell");
        btnadd.disabled = op;
        btndell.disabled = op;    
    }

    function cancelar(){
        let objDivOpera = document.getElementById("div_btnCrud");
        let objDivExt = document.getElementById("div_btnExt");
        objDivExt.style.display = "none";
        objDivOpera.style.display="block";
        AddAndDell(true);
        HabilitaControles(true);    
    }

    function btn_Alta(){
        HabilitaControles(false);
        OcultaOpera();
    } 

   /***** Validaciones  ******/

   function validaCampos(){

    
   }
