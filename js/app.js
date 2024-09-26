//recuperar elementos
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
console.log(rojo.value);
console.log(verde.value);
console.log(azul.value);

//recuperamos elementos <p>
const textoRojo = document.querySelector("#textoRojo");
const textoVerde = document.querySelector("#textoVerde");
const textoAzul = document.querySelector("#textoAzul");

console.log(textoRojo);
console.log(textoVerde);
console.log(textoAzul);

/***********************************************/
//agregar contenido alos elemntos <p>
textoRojo.textContent = rojo.value;
textoVerde.textContent = verde.value;
textoAzul.textContent = azul.value;

//valores de los elementos input, nos permitira cambiar el color de fondo de la pagina
let colorRojo = rojo.value;
let colorVerde = verde.value;
let colorAzul = azul.value;

const actualizaColor = (rojo, verde, azul) => {
  const colorRgb = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRgb;
};
//cambia el color del fondo de la pagina
rojo.addEventListener("change", (evento) => {
  colorRojo = evento.target.value;
  console.log(evento.target.value);
  textoRojo.textContent = colorRojo;

  actualizaColor(colorRojo, colorVerde, colorAzul);
});
//cambia el color del fondo de la pagina

verde.addEventListener("change", (evento) => {
  colorVerde = evento.target.value;
  console.log(evento.target.value);
  textoVerde.textContent = colorVerde;

  actualizaColor(colorRojo, colorVerde, colorAzul);
});
//cambia el color del fondo de la pagina

azul.addEventListener("change", (evento) => {
  colorAzul = evento.target.value;
  console.log(evento.target.value);
  textoAzul.textContent = colorAzul;

  actualizaColor(colorRojo, colorVerde, colorAzul);
});

//guardar el color de la pagina

const guardarColor = (rojo, verde, azul) => {
  const colorRgb = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRgb;
};
guardarColor();
