import { User } from "../classes/user.class.js";

export const createAdminUser = () =>{
    const adminUser = new User({email: "admin@admin.com", password: "admin83i", role: "admin"})
    const users = localStorage.getItem("users")

    if (!users || users?.length == 0) { // Solo se crea si es que es la lista de usuarios no está creada. Tener cuidado ya que si creo un usuario(ej: en signUp), al volver al index, no se crea el admin
        localStorage.setItem("users", JSON.stringify([adminUser]));
    }
}
