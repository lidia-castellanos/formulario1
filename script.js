let botonEnviar = document.getElementById("enviar");
const errorFaltantes=document.getElementById("mensajeErrorFaltantes");

botonEnviar.addEventListener("click", function () {

  validarNoControl();
  calcularEdad();
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
    valorNoControl.style.borderColor = "green";
    document.getElementById("mensajeError").innerText = "";
  }

}

function calcularEdad() {
  let edad = 0;

  const fechaArray = document.getElementById("fecha").value.split("-");
  const fechaNacimiento = document.getElementById("fecha");
  const fechaHoy = new Date().toJSON().slice(0, 10).split("-");
  let edadLabel = document.getElementById("edad");
  let mesHoy = parseInt(fechaHoy[1]);
  let mesNacimiento = parseInt(fechaArray[1]);
  let diaHoy = parseInt(fechaHoy[2]);
  let diaNacimiento = parseInt(fechaArray[2]);
  let anioHoy = parseInt(fechaHoy[0]);
  let anioNacimiento = parseInt(fechaArray[0]);

  if(fechaNacimiento.value===""){
    fechaNacimiento.style.borderColor = "red";
    errorFaltantes.innerText="Ingresa los campos faltantes";

  }
  else{
  if (mesHoy < mesNacimiento || (mesHoy === mesNacimiento && diaHoy < diaNacimiento)){
    edad = (anioHoy - anioNacimiento) - 1;
    edadLabel.value = edad;
    fechaNacimiento.style.borderColor = "green";
  }
  else{

    edad = anioHoy - anioNacimiento;
    edadLabel.value = edad;
    fechaNacimiento.style.borderColor = "green";
  }
  }
  


}

let input = document.getElementById("fecha");
input.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
   calcularEdad();
  } 
});
