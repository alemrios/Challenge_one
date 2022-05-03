var keys = {
  e : 'enter',
  i : 'imes',
  a : 'ai',
  o : 'ober',
  u : 'ufat'
}

function mostrarTexto(texto){
  var divResultado = document.getElementById('div-resultado');
  var divInicial = document.getElementById('contenido-inicial');

  document.getElementById('mensaje').value = texto;
  document.getElementById('resultado').innerText = texto;
  document.getElementById('texto').value = '';

  divResultado.removeAttribute('style');
  divInicial.setAttribute('style', 'display: none');
}

function encriptar(){
  var texto = document.getElementById('texto').value.toLowerCase();
  var newTexto = '';
  var txt;
  if(texto && texto != ' '){

    for(var i = 0; i < texto.length; i++){

      for(var ky in keys){
        if(texto[i] == ky){
          txt = keys[ky];
          break;
        }else{
          txt = texto[i];
        }
      }
      newTexto = newTexto + txt;
    }

    mostrarTexto(newTexto);

  }else{
    swal('Primero','Digite un texto','error');
  }

}

function desencriptar(){

  var texto = document.getElementById('texto').value.toLowerCase();
  var newTexto = '';
  var letra;

  if(texto && texto != ' '){
    while (texto.length > 0){
      var contador = 0;
      for(var ky in keys){
        if(keys.hasOwnProperty(ky)){
          if(texto[0] == ky){
            if(texto.substring(0, keys[ky].length) == keys[ky]){
              //obtenemos la letra desencriptada;
              letra = ky;
              //una vez que hemos econtrado la letra, convertimos en un nuevo texto utilizando la función de javascript (slice)
              texto = texto.slice(keys[ky].length);

            }else{
              letra = texto[0];
              texto = texto.slice(1);
            }

            contador++;

            break;
          }
        }
      }

      if(contador === 0){
        letra = texto[0];
        texto = texto.slice(1);
      }

      newTexto = newTexto + letra;
    }

    mostrarTexto(newTexto);

  }else{
    swal('Primero','Digite un texto','error');
  }

}

function copyText() {
    var copyText = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(copyText).then(() => {
        swal('Texto copiado', 'presione CTRL V', 'success');
        document.getElementById("texto").focus();
    });
  }

var btnEncriptar = document.getElementById('encriptar');
var btnDesencriptar = document.getElementById('desencriptar');
var btnCopy = document.getElementById('copy');

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopy.onclick = copyText;