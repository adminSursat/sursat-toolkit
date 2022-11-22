//filtra el celular que queres buscarle templado 
function filtrar() {
  var input, filter, table, tr, td, i, txtValue;
  document.getElementById("abiertoCerrado").value = "todos";
  input = document.getElementById("busqueda");
  filter = input.value.toUpperCase();
  table = document.getElementById("templadosTable");
  tr = table.getElementsByTagName("tr");
  for(i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if(td) {
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
      else {
        tr[i].style.display = "none";
      }
    }       
  }
}

//filtra los vidrios que son abiertos cerrados o muestra todos
function tipoApertura() {
  var input, filter, table, tr, td, i, txtValue;
  document.getElementById("busqueda").value = "";
  input = document.getElementById("abiertoCerrado");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("templadosTable");
  tr = table.getElementsByTagName("tr");
  if(filter == "TODOS") {
    for(i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
    }
  }   
  else {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }  
}