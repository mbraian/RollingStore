import { getLoggedUser } from "../services/getLoggedUser.js";

/**
 * @returns {number} Renderiza la cantidad de productos en el carrito. 
 */
//incrementa o decrementa el icono encima del carrito
export const cartBadgeHandler =()=>{
    const usuario = getLoggedUser();
    console.log(usuario,'<-- CBH: usuario')


    const cartBadge = document.getElementById('cart-badge');
    let carrito = JSON.parse(localStorage.getItem(usuario?.id));
    console.log(carrito,'<-- CBH: carrito')

    let cantCadaProduct = carrito?.map(p => p.quantity);
    console.log(cantCadaProduct,'<-- CBH: array con cantidades')

    let valorInicial = 0;

    let totalProducts = cantCadaProduct?.reduce((prev, actual)=>prev+actual,valorInicial);
    console.log(totalProducts,'<-- CBH: total')
    if((!carrito || totalProducts == 0) && usuario){ //Si el carrito está vacío o la suma de productos es 0, y hay un usuario logueado, se oculta el "badge" (classList.add("d-none")).
        cartBadge.classList.add("d-none");
    }else if(usuario){ // Si hay un usuario logueado y el carrito no está vacío, muestra el número de productos en el "badge" y lo muestra (classList.remove("d-none")).
        cartBadge.innerText = totalProducts;
        cartBadge.classList.remove("d-none");
    }
}