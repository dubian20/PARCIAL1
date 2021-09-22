
  function ObtenerResultados(){
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('gusto1').value = localStorage.getItem('gusto');
    document.getElementById('porcentaje').value = localStorage.getItem('porcentaje');
    document.getElementById('titulo').textContent = localStorage.getItem('nombre');
    document.getElementById('telefono2').value = localStorage.getItem('telefono1');
}
ObtenerResultados();
