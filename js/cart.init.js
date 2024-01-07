import { ProductCardCart } from "./components/CartCard.js"
import { getCartProducts } from "./services/getCartProducts.js"
import { discountPrice } from "./utils/discountPrice.js"
import { formatCurrency } from "./utils/formatCurrency.js"


/**\
 * @returns Renderiza los productos y el precio total en el offcanvas del carrito 
 */
export const renderCartBody  = () =>{
  // class renderCartProducts {
    
  // }
  renderCartProducts()
  renderCartTotalPrice()
}

const totalPrice = document.getElementById("totalPrice")

/**
 * @returns {} Renderiza la suma del precio de todos los productos en el carrito 
*/

const renderCartTotalPrice = () =>{
  const cartProducts = getCartProducts();
  let precioTotal = 0;

  cartProducts.forEach(p => {
    precioTotal = precioTotal + discountPrice(p.price, p.discountPercentage) * p.quantity;
  });

  totalPrice.textContent = formatCurrency(precioTotal);
}

/**
 * @returns {} Renderiza los productos en el carrito
*/

const renderCartProducts = () =>{
  const offcanvasBody = document.querySelector(".offcanvas-body")
  const cartProducts = getCartProducts();
  offcanvasBody.innerHTML = "";

  cartProducts ? cartProducts.map(producto => offcanvasBody.innerHTML += ProductCardCart(producto)) : offcanvasBody.innerHTML = `<div class="text-center"><h5>El carrito está vacio.</h5></div> `
  //Utilizar componente ProductCardCart

}
