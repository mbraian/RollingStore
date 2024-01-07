import { getCartProducts } from "./getCartProducts.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";
import { getLoggedUser } from "./getLoggedUser.js";
import { setCartProducts } from "./setCartProducts.js";

/**
 * 
 * @param {string} id Recibe el id de un producto
 * @return En el arreglo de productos del carrito reduce en 1 la cantidad del que coincida con el id recibido, si la cantidad es 1, lo elimina del arreglo. 
 */


export const removeProductFromCart = (id) => {
   const usuarioLogueado = getLoggedUser();
   const carrito = getCartProducts();
   const productoEncontrado = carrito.find(producto => producto.id == id);
   const indiceEnCarrito = carrito.findIndex(producto => producto.id == id);

   if(productoEncontrado.quantity == 1){ // En caso de que al momento de borrar solo se encuentr un único ítem del producto.
      carrito.splice(indiceEnCarrito,1);
      setCartProducts(usuarioLogueado.id, carrito);
   }
   if(productoEncontrado.quantity > 1){ // Si posee mas de un item, se le decrementa una ud.
      carrito[indiceEnCarrito].quantity--;
      setCartProducts(usuarioLogueado.id, carrito);
   }
   cartBadgeHandler();
};