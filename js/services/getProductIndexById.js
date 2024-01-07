import { getProducts } from "./getProducts.js";

/**
 * 
 * @param {string} id Recibe el Id de un producto
 * @returns Devuelve el indice en el arreglo de productos de localStorage del elemento que coincida con el id recibido por parametro.
 */

export const getProductIndexById = (id) =>{
    const products = getProducts()
    return products.findIndex(producto => producto.id == id);
}