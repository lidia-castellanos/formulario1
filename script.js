let botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("click", function () {

  validarNoControl();
});

function validarNoControl() {


  const valorNoControl = document.getElementById("noControl");
  const div = document.getElementById("errorControl");
  // ^inicio de expreesion
  // \d valor numerico
  //{5} 5 caracters
  const noControlTamano = /^\d{5}$/;

  if (!noControlTamano.test(valorNoControl.value)) {
    document.getElementById("mensajeError").innerText = "Numero de control debe contener solo 5 digitos";
    valorNoControl.style.borderColor = "red";
  }
  else {
    document.getElementById("mensajeError").innerText="";
    
    console.log("correcto");

  }

}