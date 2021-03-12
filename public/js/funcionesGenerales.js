function msjAlerta(msj){    
            div_msjg.innerHTML  = msj;
            $('#div_msjg').show();
            $("#div_msjg").fadeTo(2000, 500).slideUp(500, function() {
                $("#div_msjg").slideUp(500);
            });
    

   }



//Solo permite introducir numeros.
function soloNumeros(e){
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}