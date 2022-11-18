//resta el 21% de iva al monto ingresado
function calcIvaMenos21() { //agregar validacion de tipos y vacios
  var msj = document.getElementById("resultIvaMenos21");
  msj.style.visibility = "hidden";
  monto = document.getElementById("ivaMenos21").value;
  document.getElementById("ivaMenos21").value = "";
  if((monto != "") && (!isNaN(monto))) {
    result = (monto / 1.21).toString().match(/^-?\d+(?:\.\d{0,3})?/)[0]; //corta usando patrones, con 3 decimales sin redondear
    navigator.clipboard.writeText(result);
    msj.className = "successMsg";
    msj.innerHTML = result + " copiado";
    msj.style.visibility = "visible";
  }
  else {
    msj.className = "errorMsg";
    msj.innerHTML = "Ingrese un valor numerico";
    msj.style.visibility = "visible";
  }
}

//suma el 21% de iva al monto ingresado
function calcIvaMas21() {
  var msj = document.getElementById("resultIvaMas21");
  msj.style.visibility = "hidden";
  monto = document.getElementById("ivaMas21").value;
  document.getElementById("ivaMas21").value = "";
  if((monto != "") && (!isNaN(monto))) {
    result = Math.round(monto * 1.21);
    navigator.clipboard.writeText(result);
    msj.className = "successMsg";
    msj.innerHTML = result + " copiado";
    msj.style.visibility = "visible";
  }
  else {
    msj.className = "errorMsg";
    msj.innerHTML = "Ingrese un valor numerico";
    msj.style.visibility = "visible";
  }
}

//resta el 10.5% de iva al monto ingresado
function calcIvaMenos105() { 
  var msj = document.getElementById("resultIvaMenos105");
  msj.style.visibility = "hidden";
  monto = document.getElementById("ivaMenos105").value;
  document.getElementById("ivaMenos105").value = "";
  if((monto != "") && (!isNaN(monto))) {
    result = (monto / 1.105).toString().match(/^-?\d+(?:\.\d{0,3})?/)[0]; //corta usando patrones, con 3 decimales sin redondear
    navigator.clipboard.writeText(result);
    msj.className = "successMsg";
    msj.innerHTML = result + " copiado";
    msj.style.visibility = "visible";
  }
  else {
    msj.className = "errorMsg";
    msj.innerHTML = "Ingrese un valor numerico";
    msj.style.visibility = "visible";
  }
}

//suma el 10.5% de iva al monto ingresado
function calcIvaMas105() {
  var msj = document.getElementById("resultIvaMas105");
  msj.style.visibility = "hidden";
  monto = document.getElementById("ivaMas105").value;
  document.getElementById("ivaMas105").value = "";
  if((monto != "") && (!isNaN(monto))) {
    result = Math.round(monto * 1.105);
    navigator.clipboard.writeText(result);
    msj.className = "successMsg";
    msj.innerHTML = result + " copiado";
    msj.style.visibility = "visible";
  }
  else {
    msj.className = "errorMsg";
    msj.innerHTML = "Ingrese un valor numerico";
    msj.style.visibility = "visible";
  }
}

function calcMas25() {
  var msj = document.getElementById("resultMas25");
  msj.style.visibility = "hidden";
  monto = document.getElementById("mas25").value;
  document.getElementById("mas25").value = "";
  if((monto != "") && (!isNaN(monto))) {
    result = Math.round(monto * 1.25);
    navigator.clipboard.writeText(result);
    msj.className = "successMsg";
    msj.innerHTML = result + " copiado";
    msj.style.visibility = "visible";
  }
  else {
    msj.className = "errorMsg";
    msj.innerHTML = "Ingrese un valor numerico";
    msj.style.visibility = "visible";
  }
}

//calcula el valor en pesos segun el precio del dolar
function calcMasDolar() {
  var msj = document.getElementById("resultMasDolar");
  msj.style.visibility = "hidden";
  monto = document.getElementById("masDolar").value;
  dolar = document.getElementById("valueDolar").value;
  document.getElementById("masDolar").value = "";
  if((monto != "") && (!isNaN(monto)) && (dolar != "") && (!isNaN(dolar))) {
    result = Math.round(monto * dolar);
    navigator.clipboard.writeText(result);
    msj.className = "successMsg";
    msj.innerHTML = result + " copiado";
    msj.style.visibility = "visible";
  }
  else {
    msj.className = "errorMsg";
    msj.innerHTML = "Ingrese un valor numerico";
    msj.style.visibility = "visible";
  }  
}

//procesa un csv exportado de Prestashop y genera un catalogo de los productos exportados
function createCatalogue(){
  var msj = document.getElementById("resultCatalogue"); 
  msj.style.visibility = "hidden";
  if (document.getElementById("stock").files.length > 0){ 
    var catType = document.getElementById("catType").value;
    sessionStorage.setItem("catalogueType", catType);
    var file = document.getElementById("stock").files[0];
    var reader = new FileReader();
    var options = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
    var moneyFormat = new Intl.NumberFormat('es-AR', options); 
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data);      
      var sheet = workbook.Sheets[workbook.SheetNames[0]];
      var range = XLSX.utils.decode_range(sheet['!ref']);
      var htmlGenerated = "";
      var nameSplitter = "";
      if(catType == "premium"){
        var count = range.e.r;
        var ref = sheet[XLSX.utils.encode_cell({c:3, r:count})].v; //referencias (column 3, rows count);
        var cellref;
        while(count >= 1){
          if(ref.toString().startsWith("IPH")){
            while(ref.toString().startsWith("IPH") && count >= 1){
              htmlGenerated += "<div class=\"flexCatalogue\">";
              cellref = XLSX.utils.encode_cell({c:0, r:count}); //etiquetas (column 0, rows count)
              switch(sheet[cellref].v){
                case "blue":
                  htmlGenerated += "<div class=\"ribbonBlue\"><span>MENSAJE</span></div>"; 
                  break;
                case "gray":
                  htmlGenerated += "<div class=\"ribbonGray\"><span>MENSAJE</span></div>"; 
                  break;
                case "green":
                  htmlGenerated += "<div class=\"ribbonGreen\"><span>MENSAJE</span></div>"; 
                  break;
                case "purple":
                  htmlGenerated += "<div class=\"ribbonPurple\"><span>MENSAJE</span></div>"; 
                  break;
                case "red":
                  htmlGenerated += "<div class=\"ribbonRed\"><span>RESERVALO</span></div>";
                  break;
                case "yellow":
                  htmlGenerated += "<div class=\"ribbonYellow\"><span>MENSAJE</span></div>"; 
                  break;
                default:
                  break;
              }
              cellref = XLSX.utils.encode_cell({c:1, r:count}); //imagen (column 1, rows count)
              htmlGenerated += "<img src=\""+sheet[cellref].v+"\"><div class=\"textContainer\">";
              cellref = XLSX.utils.encode_cell({c:2, r:count}); //nombre (column 2, rows count)
              if(sheet[cellref].v.startsWith("IPHONE")){
                nameSplitter = sheet[cellref].v.split(/(?=\s[0-9]{2,3}GB)/g);		
                htmlGenerated += "<p>"+nameSplitter[0]+"<br>"+nameSplitter[1]+"</p></div>";   
              }
              else{
                htmlGenerated += "<p>"+sheet[cellref].v+"</p></div>";
              }
              cellref = XLSX.utils.encode_cell({c:5, r:count});
              if(sheet[cellref].v == 1){
                cellref = XLSX.utils.encode_cell({c:4, r:count})
                htmlGenerated += "<div class=\"discountLabel\"><span>-"+sheet[cellref].v+"%</span></div>"; 
              }
              cellref = XLSX.utils.encode_cell({c:6, r:count}); //precio (column 6, rows count)
              htmlGenerated += "<label class=\"price\"><label class=\"symbol\">$ </label>"+moneyFormat.format(sheet[cellref].v)+"</label>";
              htmlGenerated += "</div>";
              count = count-1;
              if(count >= 1){
                ref = sheet[XLSX.utils.encode_cell({c:3, r:count})].v; //referencias (column 3, rows count);
              }
            }
            if(count >= 1){
              htmlGenerated += "<div class=\"break\"></div>";
            }
          }
          else{
            if(ref.toString().startsWith("MAC") || ref.toString().startsWith("APPW") || ref.toString().startsWith("AIRP")){
              while((ref.toString().startsWith("MAC") || ref.toString().startsWith("APPW") || ref.toString().startsWith("AIRP")) && count >= 1){
                htmlGenerated += "<div class=\"flexCatalogue\">";
                cellref = XLSX.utils.encode_cell({c:0, r:count}); //etiquetas (column 0, rows count)
                switch(sheet[cellref].v){
                  case "blue":
                    htmlGenerated += "<div class=\"ribbonBlue\"><span>MENSAJE</span></div>"; 
                    break;
                  case "gray":
                    htmlGenerated += "<div class=\"ribbonGray\"><span>MENSAJE</span></div>"; 
                    break;
                  case "green":
                    htmlGenerated += "<div class=\"ribbonGreen\"><span>MENSAJE</span></div>"; 
                    break;
                  case "purple":
                    htmlGenerated += "<div class=\"ribbonPurple\"><span>MENSAJE</span></div>"; 
                    break;
                  case "red":
                    htmlGenerated += "<div class=\"ribbonRed\"><span>RESERVALO</span></div>";
                    break;
                  case "yellow":
                    htmlGenerated += "<div class=\"ribbonYellow\"><span>MENSAJE</span></div>"; 
                    break;
                  default:
                    break;
                }
                cellref = XLSX.utils.encode_cell({c:1, r:count}); //imagen (column 1, rows count)
                htmlGenerated += "<img src=\""+sheet[cellref].v+"\"><div class=\"textContainer\">";
                cellref = XLSX.utils.encode_cell({c:2, r:count}); //nombre (column 2, rows count)
                if(sheet[cellref].v.startsWith("MACBOOK")){
                  nameSplitter = sheet[cellref].v.split(/(?=\s[0-9]{2,3}GB)/g);		
                  htmlGenerated += "<p>"+nameSplitter[0]+"<br>"+nameSplitter[1]+"</p></div>";   
                }
                else{
                  htmlGenerated += "<p>"+sheet[cellref].v+"</p></div>";
                }
                cellref = XLSX.utils.encode_cell({c:5, r:count});
                if(sheet[cellref].v == 1){
                  cellref = XLSX.utils.encode_cell({c:4, r:count})
                  htmlGenerated += "<div class=\"discountLabel\"><span>-"+sheet[cellref].v+"%</span></div>"; 
                }
                cellref = XLSX.utils.encode_cell({c:6, r:count}); //precio (column 6, rows count)
                htmlGenerated += "<label class=\"price\"><label class=\"symbol\">$ </label>"+moneyFormat.format(sheet[cellref].v)+"</label>";
                htmlGenerated += "</div>";
                count = count-1;
                if(count >= 1){
                  ref = sheet[XLSX.utils.encode_cell({c:3, r:count})].v; //referencias (column 3, rows count);
                }
              }
              if(count >= 1){
                htmlGenerated += "<div class=\"break\"></div>";
              }
            }
            else{
              while(!ref.toString().startsWith("MAC") && !ref.toString().startsWith("APPW") && !ref.toString().startsWith("AIRP") && !ref.toString().startsWith("IPH") && count >= 1){
                htmlGenerated += "<div class=\"flexCatalogue\">";
                cellref = XLSX.utils.encode_cell({c:0, r:count}); //etiquetas (column 0, rows count)
                switch(sheet[cellref].v){
                  case "blue":
                    htmlGenerated += "<div class=\"ribbonBlue\"><span>MENSAJE</span></div>"; 
                    break;
                  case "gray":
                    htmlGenerated += "<div class=\"ribbonGray\"><span>MENSAJE</span></div>"; 
                    break;
                  case "green":
                    htmlGenerated += "<div class=\"ribbonGreen\"><span>MENSAJE</span></div>"; 
                    break;
                  case "purple":
                    htmlGenerated += "<div class=\"ribbonPurple\"><span>MENSAJE</span></div>"; 
                    break;
                  case "red":
                    htmlGenerated += "<div class=\"ribbonRed\"><span>RESERVALO</span></div>";
                    break;
                  case "yellow":
                    htmlGenerated += "<div class=\"ribbonYellow\"><span>MENSAJE</span></div>"; 
                    break;
                  default:
                    break;
                }
                cellref = XLSX.utils.encode_cell({c:1, r:count}); //imagen (column 1, rows count)
                htmlGenerated += "<img src=\""+sheet[cellref].v+"\"><div class=\"textContainer\">";
                cellref = XLSX.utils.encode_cell({c:2, r:count}); //nombre (column 2, rows count)
                if(sheet[cellref].v.startsWith("MACBOOK")){
                  nameSplitter = sheet[cellref].v.split(/(?=\s[0-9]{2,3}GB)/g);		
                  htmlGenerated += "<p>"+nameSplitter[0]+"<br>"+nameSplitter[1]+"</p></div>";   
                }
                else{
                  htmlGenerated += "<p>"+sheet[cellref].v+"</p></div>";
                }
                cellref = XLSX.utils.encode_cell({c:5, r:count});
                if(sheet[cellref].v == 1){
                  cellref = XLSX.utils.encode_cell({c:4, r:count})
                  htmlGenerated += "<div class=\"discountLabel\"><span>-"+sheet[cellref].v+"%</span></div>"; 
                }
                cellref = XLSX.utils.encode_cell({c:6, r:count}); //precio (column 6, rows count)
                htmlGenerated += "<label class=\"price\"><label class=\"symbol\">$ </label>"+moneyFormat.format(sheet[cellref].v)+"</label>";
                htmlGenerated += "</div>";
                count = count-1;
                if(count >= 1){
                  ref = sheet[XLSX.utils.encode_cell({c:3, r:count})].v; //referencias (column 3, rows count);
                }
              }   
              if(count >= 1){
                htmlGenerated += "<div class=\"break\"></div>";
              }
            }
          }
        }
      }
      else{
        for(var R = range.e.r; R >= 1; --R){
          htmlGenerated += "<div class=\"flexCatalogue\">";
          var cellref = XLSX.utils.encode_cell({c:0, r:R}); //etiquetas (column X, rows R)
          switch(sheet[cellref].v) {
            case "blue":
              htmlGenerated += "<div class=\"ribbonBlue\"><span>MENSAJE</span></div>"; 
              break;
            case "gray":
              htmlGenerated += "<div class=\"ribbonGray\"><span>MENSAJE</span></div>"; 
              break;
            case "green":
              htmlGenerated += "<div class=\"ribbonGreen\"><span>MENSAJE</span></div>"; 
              break;
            case "purple":
              htmlGenerated += "<div class=\"ribbonPurple\"><span>MENSAJE</span></div>"; 
              break;
            case "red":
              htmlGenerated += "<div class=\"ribbonRed\"><span>RESERVALO</span></div>";
              break;
            case "yellow":
              htmlGenerated += "<div class=\"ribbonYellow\"><span>MENSAJE</span></div>"; 
              break;
            default:
              break;
          }
          cellref = XLSX.utils.encode_cell({c:1, r:R}); //imagen (column 1, rows R)
          htmlGenerated += "<img src=\""+sheet[cellref].v+"\"><div class=\"textContainer\">";
          cellref = XLSX.utils.encode_cell({c:2, r:R}); //nombre (column 2, rows R)
          htmlGenerated += "<p>"+sheet[cellref].v+"</p></div>";
          cellref = XLSX.utils.encode_cell({c:5, r:R});
          if(sheet[cellref].v == 1) {
            cellref = XLSX.utils.encode_cell({c:4, r:R})
            htmlGenerated += "<div class=\"discountLabel\"><span>-"+sheet[cellref].v+"%</span></div>"; 
          }
          cellref = XLSX.utils.encode_cell({c:6, r:R}); //precio (column 6, rows R)
          htmlGenerated += "<label class=\"price\"><label class=\"symbol\">$ </label>"+moneyFormat.format(sheet[cellref].v)+"</label>";
          htmlGenerated += "</div>";
        }
      }
      sessionStorage.setItem("htmlCode", htmlGenerated);
      location.replace("catalogue.html");
    };
    reader.readAsArrayBuffer(file); 
  }
  else {
    msj.innerHTML = "Seleccione un archivo";
    msj.style.visibility = "visible";
  } 
}

//procesa un csv con los modelos de templados y genera codigo HTML equivalente
function createTable(){
  var msj = document.getElementById("resultTemplados"); 
  msj.style.visibility = "hidden";
  var htmlGenerated = "";
  if (document.getElementById("templados").files.length > 0) {
    var file = document.getElementById("templados").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data);
      var sheet = workbook.Sheets[workbook.SheetNames[0]];
      var range = XLSX.utils.decode_range(sheet['!ref']);
      for(var R = range.e.r; R >= 1; --R){
        cellref = XLSX.utils.encode_cell({c:0, r:R}); //vidrio templado (column 0, rows R)
        htmlGenerated += "<tr><td>"+sheet[cellref].v+"</td>";
        cellref = XLSX.utils.encode_cell({c:1, r:R}); //celulares (column 1, rows R)
        htmlGenerated += "<td>"+sheet[cellref].v+"</td></tr>";
      }
      navigator.clipboard.writeText(htmlGenerated);
    }
    reader.readAsArrayBuffer(file);
    msj.className = "successMsg";
    msj.innerHTML = "codigo generado copiado";
    msj.style.visibility = "visible";
  }
  else {
    msj.innerHTML = "Seleccione un archivo";
    msj.style.visibility = "visible";
  }
}