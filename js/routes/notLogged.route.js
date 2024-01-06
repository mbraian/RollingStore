import { getLoggedUser } from "../services/getLoggedUser.js";
import { redirectIndex } from "../utils/redirectIndex.js";

/**
 * 
 * @returns Si el usuario no esta logeado, debe redirigir a la página de Login
 */

export const notLoggedRoute = () => {
    if(!getLoggedUser()) redirectIndex();
};
