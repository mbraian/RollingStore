import { User } from "../classes/user.class.js";
import { getUsers } from "./getUsers.js";
import { validateEmail } from "../validators/validateEmail.js";
import { validateExistingEmail } from "../validators/validateExistingEmail.js";
import { validateSignUpPassword } from "../validators/validateSignUpPassword.js";
/**
 *
 * @param {string} email Recibe un email valido
 * @param {string} password Recibe una contraseña valido
 * @return Crea un nuevo usuario y lo setea en localStorage con la key "users"
 */

export const createUser = ({ email, password }) => {
  const users = getUsers();    
  const nuevoUser = new User(email, password, "user");
  
  users.push(nuevoUser);

  localStorage.setItem('users', JSON.stringify(users));

  console.log(`Usuario: ${email}\nPassword:${password} \nLogueado exitosamente.`);
};
