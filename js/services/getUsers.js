
/**
 * 
 * @returns Devuelve el arreglo de todos los usuarios almacenados en localStorage bajo la key "users"
 */

export const getUsers = () =>{
  const usuarios = JSON.parse(localStorage.getItem('users'));
  console.log(usuarios,"<--Usuarios getUsers")
  return usuarios
}