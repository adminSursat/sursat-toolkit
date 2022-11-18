window.onload = function() {
  var catalogueType = sessionStorage.getItem("catalogueType");
  switch (catalogueType) {
    case "premium":
      document.title = "Catalogo Sursat Premium";
      document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/catalogueStylePremium.css\"/>");
      document.getElementById("bannerH").src = "images/headerPremium.png";
      document.getElementById("bannerF").src = "images/footerPremium.png";
      break; 
    case "normal":
      document.title = "Catalogo Sursat";
      document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/catalogueStyleNormal.css\"/>");
      document.getElementById("bannerH").src = "images/header.png";
      document.getElementById("bannerF").src = "images/footer.png";
      break;
    case "reyes":
      document.title = "Catalogo Sursat Reyes";
      document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/catalogueStyleReyes.css\"/>");
      document.getElementById("bannerH").src = "images/headerReyes.png";
      document.getElementById("bannerF").src = "images/footerReyes.png";
      break;
    case "padre":
      document.title = "Catalogo Sursat D\xeda del Padre";
      document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/catalogueStylePadre.css\"/>");
      document.getElementById("bannerH").src = "images/headerPadre.png";
      document.getElementById("bannerF").src = "images/footerPadre.png";
      break;
    case "nino":
      document.title = "Catalogo Sursat D\xeda del Ni\xf1o";
      document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/catalogueStyleNino.css\"/>");
      document.getElementById("bannerH").src = "images/headerNino.png";
      document.getElementById("bannerF").src = "images/footerNino.png";
      break;
    case "madre":
      document.title = "Catalogo Sursat D\xeda de la Madre";
      document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/catalogueStyleMadre.css\"/>");
      document.getElementById("bannerH").src = "images/headerMadre.png";
      document.getElementById("bannerF").src = "images/footerMadre.png";
      break;
    case "navidad":
      document.title = "Catalogo Sursat Navidad";
      document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/catalogueStyleNavidad.css\"/>");
      document.getElementById("bannerH").src = "images/headerNavidad.png";
      document.getElementById("bannerF").src = "images/footerNavidad.png";
      break;
  }
  var htmlGenerated = sessionStorage.getItem("htmlCode");
  document.getElementById("flexContainer").innerHTML = htmlGenerated;
}