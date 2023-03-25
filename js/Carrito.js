//       PROYECTO FINAL

//JSON
let stockProductos=[
{id: 1, "nombre":"CamisetaTitular","precio":"$15000","color":"Azul y amarillo","talle":"M","sexo":"Hombre","img":"C1.jpg"},
{id: 2, "nombre":"CamisetaSuplente","precio":"$15000","color":"Amarillo","talle":"M","sexo":"Hombre","img":"C2.jpg"},
{id: 3, "nombre":"ShortTitular","precio":"$9500","color":"Azul","talle":"L","sexo":"Mujer","img":"SH1.jpg"},
{id: 4, "nombre":"ShortNiño","precio":"$6500","color":"Azul y Amarillo","talle":"XS","sexo":"Niño","img":"SHN1.jpg"},
{id: 5, "nombre":"BuzoTitular","precio":"$13500","color":"Azul","talle":"S","sexo":"Hombre","img":"B1.jpg"},
{id: 6, "nombre":"CamisetaNiñoTercera","precio":"$10000","color":"Azul","talle":"S","sexo":"Niños","img":"CN3.jpg"}
]

let carrito=[];
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}


function mostrarProductosDOM(producto){
    
    let div=document.createElement('div');
    div.setAttribute("id",`ListaCarrito${producto.id}`);
    div.innerHTML=`
    <h3>${producto.nombre}</h3>
    <h3>${producto.precio}</h3>
    <h3 id=cantidad${producto.id}>Cantidad:1</h3>
    <img class="ImagenRemera"src=./assets/img/${producto.img}>
    <button id=botonSumar${producto.id}>+</button>
    <button id=botonRestar${producto.id}>-</button>
    `
    let listaProductoscarrito=document.getElementById("ListaCarrito");
    listaProductoscarrito.append(div);

    let botonSumar=document.getElementById(`botonSumar${producto.id}`);
    botonSumar.onclick=()=>{
        carrito.forEach(productoCarrito=>{
            if(productoCarrito.id==producto.id){
                productoCarrito.cantidad+=1;
            }
            let cantidadDom=document.getElementById(`cantidad${producto.id}`);
            cantidadDom.innerHTML=`Cantidad:${productoCarrito.cantidad}`
        });
        localStorage.setItem("carrito",JSON.stringify(carrito));
        console.log(carrito);
    }

    let botonRestar=document.getElementById(`botonRestar${producto.id}`);
    botonRestar.onclick=()=>{
        carrito.forEach(productoCarrito=>{
            if(productoCarrito.id==producto.id){
                //Si la cantidad es mayor a 1 , resto con normalidad
            if(productoCarrito.cantidad>1){     

                    productoCarrito.cantidad-=1;
                    let cantidadDom=document.getElementById(`cantidad${producto.id}`);
                    cantidadDom.innerHTML=`Cantidad:${productoCarrito.cantidad}`
            }else{//cantidad=1 y quiere restar
                    //LO ELIMINE DEL CARRITO

                    //Lo elimina del DOM
                    let productoDomAEliminar=document.getElementById(`ListaCarrito${producto.id}`);
                    listaProductoscarrito.removeChild(productoDomAEliminar);

                    //Lo elimina del array del carrito
                    let indiceProductoAEliminar=carrito.indexOf(productoCarrito);
                    carrito.splice(indiceProductoAEliminar,1);
                    localStorage.setItem("carrito",JSON.stringify(carrito));
            }
            }
        });
        console.log(carrito);
    }
    
}
carrito.forEach(productoCarrito=>{
    mostrarProductosDOM(productoCarrito);
});




function agregarAlCarrito(){
    console.log(this.color);
}



console.log(carrito);


stockProductos.forEach(producto => {
    const div= document.createElement("div");
    
    div.classList.add("Remera");
    
    div.innerHTML=`
    <p class="TipografiaProductos">${producto.nombre}</p>
    <img class="ImagenRemera"src=./assets/img/${producto.img}>
    <div class="ContainerPrecioComprar">
    <a class="TipografiaProductos" href="">${producto.precio}</a>
    <button class="TipografiaProductos" id=boton_${producto.nombre}>Comprar</button>
    </div>

    `
 

    let productosDestacados= document.getElementById("ProductosDestacados");
    productosDestacados.append(div);

    let button= document.getElementById(`boton_${producto.nombre}`);
    button.onclick=() => {
    let productoEstaEnElCarrito=false;

    carrito.forEach (productoCarrito=>{
        if(producto.id==productoCarrito.id){
            productoCarrito.cantidad+=1;
            productoEstaEnElCarrito=true;
        }
    });
    if(!productoEstaEnElCarrito){
        carrito.push(
            {
                "color":`${producto.color}`,
                "id":`${producto.id}`,
                "nombre":`${producto.nombre}`,
                "precio":`${producto.precio}`,
                "cantidad":1
            }
        );
    }
    function abrirCarrito() {
        const carritoContainer = document.getElementById('Conteiner-Carrito');
        carritoContainer.style.display = 'block';
      }
      
      //Intente aplciar SweetAlert

      let botonComprar=document.getElementById("boton_${producto.nombre}");
      
    function AgregarProductoAlCarrito(botonComprar){
        botonComprar.onclick=()=>{
            if (carrito.length>0){
                Swal.fire({
                    title: 'Agregado al carrito',
                    text: 'Desea seguir comprando',
                    confirmButtonText: 'Aceptar'
                  }).then((result) => {
    if (result.isConfirmed) {
      for(let producto of carrito){
        document.getElementById(producto.nombre).add();
      }
      
    }
  });

            }
        }
    }
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));    
    }
});













