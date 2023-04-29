let carrito = [];

function addToCart(producto, precio) {
  let item = carrito.find((item) => item.producto === producto);

  if (item) {
    item.cantidad++;
    item.subtotal = item.cantidad * precio;
  } else {
    item = {
      producto: producto,
      precio: precio,
      cantidad: 1,
      subtotal: precio,
    };
    carrito.push(item);
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  let tbody = document.querySelector('#carrito tbody');
  let total = 0;

  tbody.innerHTML = '';

  carrito.forEach((item) => {
    let tr = document.createElement('tr');

    let tdProducto = document.createElement('td');
    tdProducto.textContent = item.producto;
    tr.appendChild(tdProducto);

    let tdPrecio = document.createElement('td');
    tdPrecio.textContent = item.precio;
    tr.appendChild(tdPrecio);

    let tdCantidad = document.createElement('td');
    tdCantidad.textContent = item.cantidad;
    tr.appendChild(tdCantidad);

    let tdSubtotal = document.createElement('td');
    tdSubtotal.textContent = item.subtotal;
    tr.appendChild(tdSubtotal);

    tbody.appendChild(tr);

    total += item.subtotal;
  });

  document.querySelector('#total').textContent = `$${total}`;
}

function finalizarCompra() {
    alert("¡Su Terreneitor llegará súper terrerápido! ¡Gracias por su compra!");
  }
  
