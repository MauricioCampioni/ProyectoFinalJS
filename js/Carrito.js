
// const costoProducto2=15000;
// const costoProducto3=15000;
// const costoProducto4=6500;
// const costoProducto5=13500
// let total=0;
// function mostrarTotal(total){
//     alert("El total de su compra es de $"+total);
// }
// do{
    
//     let valorIngresado=prompt("BIENVENIDO A BOCASTORE\nSeleccione el producto que desea comprar\n1.Camiseta Titular -$15.000\n2.Camiseta Suplente -$15.000\n3.Camiseta Mujer Titular-$15.000\n4.Short titular niño -$6.500\n5.Buzo Hombre Titular -$13.500");
//     if(valorIngresado=="1"){
//         total+=costoProducto1;
//     }else if(valorIngresado=="2"){
//         total+=costoProducto2;
//     }else if(valorIngresado=="3"){
//         total+=costoProducto3;
//     }else if(valorIngresado=="4"){
//         total+=costoProducto4;
//     }
//     else if(valorIngresado=="5"){
//         total+=costoProducto5;
//     }
//     else{
//         alert("El valor ingresado no es valido");
//     }
// }while(confirm("Desea seguir comprando?"))

// mostrarTotal(total);


        //PRE ENTREGA 2

//Este es el constructor de la clase producto
// class Producto{
//     constructor(nombre,precio,color,talle,sexo){
//         this.nombre=nombre;
//         this.precio=precio;
//         this.color=color;
//         this.talle=talle;
//         this.sexo=sexo;
//     }
//     }
//     //La funcion la hice para usar funciones
//     function agregarYMostrarProductos(productos,productoAAgregar){
//         productos.push(productoAAgregar);
//         console.log(productoAAgregar);
//     }
//     //El new se usa para crear un objeto de una clase
//     const camisetaTitular=new Producto("CamisetaTitular",15000,"Azul y amarillo","M","Hombre");
//     const camisetSuplente=new Producto("CamisetaSuplente",15000,"Amarillo","M","Hombre y Mujer");
//     const shortTitular=new Producto("ShortTitular",9500,"Azul","L","Mujer");
//     const shortNiño= new Producto("ShortNiño",6500,"Azul y Amarillo","XS","Niño");
//     const buzoTitular= new Producto("BuzoTitular",13500,"Azul","S","Hombre");
    
    
    
//     const productos=[];
//     agregarYMostrarProductos(productos,camisetaTitular);
//     agregarYMostrarProductos(productos,shortTitular);
//     agregarYMostrarProductos(productos,camisetSuplente);
//     agregarYMostrarProductos(productos,shortNiño);
//     agregarYMostrarProductos(productos,buzoTitular);
//     console.log(productos);
    
//     //Esta const declarada, va a TOMAR EL VALOR de cada uno de los elementos del array
//     //en cada una de las iteraciones
//     for(const producto of productos){
//      if(producto.talle=="M"){
//              console.log(producto);
//          }
//         console.log(producto.nombre);
//     }
    
//     //Este "producto", cumple la misma funcion , que la variable declarada en for of , va tomando 
//     //los valores del array
//     const resultado= productos.filter((producto)=>producto.talle=="L");
//     console.log(resultado);
    
//       3RA PRE ENTREGA












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
      const carritoImagen = document.getElementById('carrito-imagen');

carritoImagen.addEventListener('click', abrirCarrito);

      
    
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));    
    }

});













