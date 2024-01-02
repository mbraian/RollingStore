
/**
 * 
 * @returns Devuelve el arreglo de todos los usuarios almacenados en localStorage bajo la key "users"
 */

export const getUsers = () =>{
  const usuariosCadena = localStorage.getItem('users');

  if(usuarios){
    try{
      const usuariosArray = JSON.parse(usuariosCadena);

      if(Array.isArray(usuariosArray)){
        console.log(usuariosArray,"<---getUsers-Exito")
        return usuariosArray;
      }else{
        console.warn("El contenido almacenado en localStorage no es un array.");
        return [];
      }
    }catch{
      console.warn("Error al parsear la cadena JSON:", error);
    }
  }else{
    return [];
  }
}