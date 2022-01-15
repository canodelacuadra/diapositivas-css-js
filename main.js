// accedemos a las cinco escenas
var cuenca = document.getElementById("cuenca");
var casco = document.getElementById("casco");
var casas = document.getElementById("casas");
var catedral = document.getElementById("catedral");
var ayuntamiento = document.getElementById("ayuntamiento");
// hacemos que desaparezcan todos menos cuenca
cuenca.style.display = "block";

casco.style.display = "none";
casas.style.display = "none";
catedral.style.display = "none";
ayuntamiento.style.display = "none";
//
cuenca.style.animation = "opacity-normal";
cuenca.style.animationDuration = "3s";
//lanzamos eventos y animaciones sobre cuenca
cuenca.addEventListener("click", function () {
  cuenca.style.display = "none";
  casco.style.display = "block";
  casco.style.animation = "top-normal";
  casco.style.animationDuration = "1s";
});
//lanzamos eventos sobre casco
casco.addEventListener("click", function () {
  casco.style.display = "none";
  casas.style.display = "block";
  casas.style.animation = "right-normal";
  casas.style.animationDuration = "1s";
});
//lanzamos eventos sobre casas
casas.addEventListener("click", function () {
  casas.style.display = "none";
  catedral.style.display = "block";
  catedral.style.animation = "left-normal";
  catedral.style.animationDuration = "1s";
});
//lanzamos eventos sobre catedral
catedral.addEventListener("click", function () {
  catedral.style.display = "none";
  ayuntamiento.style.display = "block";
  ayuntamiento.style.animation = "bottom-normal";
  ayuntamiento.style.animationDuration = "1s";
});
//lanzamos eventos sobre ayuntamiento
ayuntamiento.addEventListener("click", function () {
  ayuntamiento.style.display = "none";
  cuenca.style.display = "block";
  cuenca.style.animation = "skew-normal";
  cuenca.style.animationDuration = "1s";
});
