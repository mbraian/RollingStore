import Navbar from "./components/Navbar.js"; 
import { validateExistingEmail } from "./validators/validateExistingEmail.js";
import { validateSignUpPassword } from "./validators/validateSignUpPassword.js";
import { validateRepeatPassword } from "./validators/validateRepeatPassword.js";
import { validateEmail } from "./validators/validateEmail.js";
import { showPassword } from "./utils/showPassword.js";
import { redirectIndex } from "./utils/redirectIndex.js";
import { createUser } from "./services/createUser.js";
import { setLoggedUser } from "./services/setLoggedUser.js";

document.addEventListener("DOMContentLoaded" , ()=>{
 Navbar();
})

const showPasswordButton = document.getElementById("showPasswordBtn")

showPasswordButton.addEventListener("click", (e)=>{
    showPassword(e);
})

const signUpForm = document.getElementById("signUpForm")
const signUpFormEmailInput = document.getElementById("emailSignUpInput")
const signUpFormPasswordInput =  document.getElementById("emailSignUpPassword")
const signUpFormRepeatPassword = document.getElementById("repeatSignUpPassword")

signUpFormRepeatPassword.addEventListener('paste', e => e.preventDefault());

/**
 * 
 * @param {string} email Recibe un email
 * @returns {bool} Debe mostrar el feedback de email valido o invalido segun corresponda,devuelve un booleano
 */

const emailFeedback = (email) =>{ //VERIFICAR y revisar funcionamiento!
    signUpFormPasswordInput.classList.remove("is-valid");
    signUpFormPasswordInput.classList.remove("is-invalid")

    if(validateEmail(email) && validateExistingEmail){
        signUpFormEmailInput.classList.add("is-valid");
        return true;
    }

    signUpFormEmailInput.classList.add("is-invalid");
    return false;
}

/**
 * 
 * @param {string} password Recibe una contraseña.
 * @returns Debe mostrar el feedback de contraseña valida o invalida segun corresponda,devuelve un booleano.
 */

const passwordFeedback = (password) =>{
    signUpFormPasswordInput.classList.remove("is-valid");
    signUpFormPasswordInput.classList.remove("is-invalid");

    if(validateSignUpPassword(password)){
        signUpFormPasswordInput.classList.add("is-valid");
        return true;
    }

    signUpFormPasswordInput.classList.add("is-invalid");
    return false;
}

/**
 * 
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword  Recibe otra contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida segun corresponda, devuelve un booleano.
 */

const repeatPasswordFeedback = (password,repeatPassword) =>{
 
}

const showSuccesfulSignUpModal = () =>{
    const modal = new bootstrap.Modal(document.getElementById('succesfulSignupModal'))
    modal.show()
    setTimeout(redirectIndex, 3000)
}


/**
 * 
 * @param {object} e Recibe el evento de submit del formulario
 * @returns Si la información del formulario es valida, debe registrar al usuario, logearlo, mostrar el modal de registro exitoso y redirigirlo a la página principal. 
 */
const signUpSubmit = (e) =>{
    e.preventDefault()

}

signUpForm.addEventListener("submit", signUpSubmit)