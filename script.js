let creditosDisponibles = 10;

document.getElementById('formulario-encargos').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  const tipoContenido = document.getElementById('tipo-contenido').value;
  const descripcion = document.getElementById('descripcion').value;
  let costoCredito = 0;

  // Asignar costo de crédito según el tipo de contenido
  if (tipoContenido === 'post') {
    costoCredito = 1;
  } else if (tipoContenido === 'carrusel') {
    costoCredito = 2;
  } else if (tipoContenido === 'video') {
    costoCredito = 3;
  }

  // Validar si el usuario tiene suficientes créditos
  if (creditosDisponibles >= costoCredito) {
    creditosDisponibles -= costoCredito; // Restar créditos
    actualizarCreditos();
    document.getElementById('resultado').textContent = `Encargo de ${tipoContenido} registrado con éxito.`;
  } else {
    document.getElementById('resultado').textContent = `No tienes suficientes créditos para un ${tipoContenido}.`;
  }

  // Limpiar el campo de descripción
  document.getElementById('descripcion').value = '';
});

function actualizarCreditos() {
  document.getElementById('creditos-restantes').textContent = `Créditos restantes: ${creditosDisponibles}`;
}
