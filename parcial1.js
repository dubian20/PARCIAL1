function editar(){
  var gusto = document.getElementById("gusto").value;

  var count = 0;
  var edit = "editar";

  document.getElementById('tablaprincipal').innerHTML += `<td>${gusto}</td><td>0</td><td><a class ="a1" onclick="transformarEditable(this)">Editar</a></td>`;
}

function transformarEditable(fila)
  {
      var editando = false;

      if(editando === false)
      {
          var nodetr = fila.parentNode.parentNode;
          var nodestr = nodetr.getElementsByTagName('td');
          var form = document.getElementById('formulario1');
          var Gusto = nodestr[0].firstChild.nodeValue;
          var porcentaje = nodestr[1].firstChild.nodeValue;
          var codigohtml = '<td><input type="text" id="input1"  name="gusto" style="width:2cm;" value="'+Gusto+'"></td>'+
       '<td><input type="text" name="porcentage" id="input2" style="width:2cm;" value="'+porcentaje+'"></td>'+'<span style ="width:1cm;">En edicion </span></td>'
      }
      nodetr.innerHTML=codigohtml;


      form.innerHTML='<div class="div1">Pulse Aceptar para guardar los cambios o cancelar para anularlos</div>'+
      '<button type="submit" class="btn btn-outline-success" id="aceptar" onclick="guardar()">Aceptar</button>'+ '<span></span>'+
      '<button type="reset" class="btn btn-outline-danger" id="cancelar" onclick="location.reload()">Cancelar</button>'

  editando=true;
}

function guardar()
{
  localStorage.setItem('gusto', document.getElementById('input1').value);
  localStorage.setItem('porcentaje', document.getElementById('input2').value);
  localStorage.setItem('nombre', document.getElementById('nombre').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('telefono1', document.getElementById('telefono').value);

}
