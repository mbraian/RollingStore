import { getProducts } from "./getProducts.js";
import { getCartProducts } from "./getCartProducts.js";
import { renderCartBody } from "../cart.init.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";
import { setCartProducts } from "./setCartProducts.js";
import { getLoggedUser } from "./getLoggedUser.js";
/**
 * 
 * @param {*} id Recibe el id del producto a eliminar
 * @returns {} Elimina el producto del carrito
 */
export const deleteProductFromCart = (id) => {
    const usuarioLogueado = getLoggedUser();
    const cartProducts = getCartProducts();
    const productFoundInCart = cartProducts.find(product => product.id == id);
    const productFoundInCartIndex = cartProducts.findIndex(product => product.id == id);


    if (productFoundInCart ) {
        cartProducts.splice(productFoundInCartIndex,1);
        setCartProducts(usuarioLogueado.id, cartProducts);
    }

    cartBadgeHandler()
   };