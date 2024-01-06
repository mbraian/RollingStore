import { getCartProducts } from "./getCartProducts.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";
import { getProductById } from "./getProductById.js";
import { getLoggedUser } from "./getLoggedUser.js";
import { notLoggedRoute } from "../routes/notLogged.route.js";
import { setCartProducts } from "./setCartProducts.js";

/**
 * 
 * @param {string} id Recibe el ID de un producto
 * @returns En el arreglo de productos del localStorage con la key correspondiente al id del usuario, agrega el producto, de ya existir dentro del carrito, aumentar su atributo "quantity" en 1 
 */

export const addProductToCart = (id) => {
    const usuarioLogueado = getLoggedUser();
    const productoEncontrado = getProductById(id);
    const carrito = getCartProducts();
    const indiceDelProducto = carrito.findIndex(p => p.id == id);

    if(!getLoggedUser){ // Usuario NO loggeado, se lo redirige al login
        return notLoggedRoute();
    }

    if(indiceDelProducto !== -1){ // El producto existe en el carrito
        carrito[indiceDelProducto].quantity++;
        setCartProducts(usuarioLogueado.id, carrito);
        cartBadgeHandler();
        return;
    }

    if(productoEncontrado){ // El producto se ingresa por 1ra vez
        carrito.push(productoEncontrado);
        setCartProducts(usuarioLogueado.id, carrito);
        cartBadgeHandler();
        return;
    }
};
