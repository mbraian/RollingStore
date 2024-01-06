import { getLoggedUser } from "../services/getLoggedUser.js";

/**
 * 
 * @returns Si el usuario no esta logeado, debe redirigir a la página de Login
 */

export const notLoggedRoute = () => {
    if(!getLoggedUser()) return window.location.pathname = '/views/login.html';
};
