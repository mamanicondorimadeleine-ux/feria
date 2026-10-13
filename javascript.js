function mostrarSaludo() {
  let nombresPersona = document.getElementById("campoNombres").value;
  let apellidosPersona = document.getElementById("campoApellidos").value;

  document.getElementById("cajaMensaje").textContent = "Hola, " + nombresPersona + "\n" + apellidosPersona + " ¡Buenas tardes!";
}