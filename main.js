// accedemos a las cinco escenas
var cuenca = document.getElementById("cuenca");
var casco = document.getElementById("casco");
var casas = document.getElementById("casas");
var catedral = document.getElementById("catedral");
var ayuntamiento = document.getElementById("ayuntamiento");
// audio
// sonido
efecto = new Audio("iphone-tipear-2.mp3");

// hacemos que desaparezcan todos menos cuenca
cuenca.style.display = "block";
casco.style.display = "none";
casas.style.display = "none";
catedral.style.display = "none";
ayuntamiento.style.display = "none"; //

//hacemos que la promera diapositiva tenga un efecto
cuenca.style.animation = "opacity-normal 5s";
cuenca.firstElementChild.style.animation = "top-normal 5s  ";

//lanzamos eventos y animaciones sobre cuenca
cuenca.addEventListener("click", function () {
  efecto.play();
  cuenca.style.display = "none";
  casco.style.display = "block";
  casco.style.animation = "right-normal 5s";
  casco.firstElementChild.style.animation = "bottom-normal 10s  ";
});
//lanzamos eventos sobre casco
casco.addEventListener("click", function () {
  efecto.play();
  casco.style.display = "none";
  casas.style.display = "block";
  casas.style.animation = "right-normal 5s";
  casas.firstElementChild.style.animation = "top-normal 10s  ";
});
//lanzamos eventos sobre casas
casas.addEventListener("click", function () {
  efecto.play();
  casas.style.display = "none";
  catedral.style.display = "block";
  catedral.style.animation = "left-normal 5s";
  catedral.firstElementChild.style.animation = "opacity-normal 10s  ";
});
//lanzamos eventos sobre catedral
catedral.addEventListener("click", function () {
  efecto.play();
  catedral.style.display = "none";
  ayuntamiento.style.display = "block";
  ayuntamiento.style.animation = "bottom-normal 5s";
  ayuntamiento.firstElementChild.style.animation = "right-normal 10s  ";
});
//lanzamos eventos sobre ayuntamiento
ayuntamiento.addEventListener("click", function () {
  efecto.play();
  ayuntamiento.style.display = "none";
  cuenca.style.display = "block";
  cuenca.style.animation = "skew-normal 5s";
  cuenca.firstElementChild.style.animation = "opacity-normal 10s  ";
});
