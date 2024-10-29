const productos = [
  // Se referenciaron las imágenes de acuerdo al nuevo acomodo de carpetas
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "/public/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/public/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "/public/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "/public/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "/public/zapato-rojo.jpg" }
]

// Se cambio getElementByName por querySelector para seleccionar el elemento correcto
const li = document.querySelector("#lista-de-productos"); // Se agregó # para indiciar que es un id
const $i = document.querySelector('.input');

// Función para mostrar los productos en la página que permite limpiar el contendeor de productos y renderizar la lista filtrada
const displayProductos = (productos) => {
  // Limpiar la lista antes de renderizar
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  for (let i = 0; i < productos.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
}

// Inicializar mostrando todos los productos
displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {

  const texto = $i.value.toLowerCase(); // Convertir el texto a minúsculas para facilitar el filtrado
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  // Se eliminó la sección de codigo repetida ya que al tener la función displayProductos se puede reutilizar el código

  // Mostrar los productos filtrados
  displayProductos(productosFiltrados);
}

// Función para filtrar productos por tipo o color
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}
