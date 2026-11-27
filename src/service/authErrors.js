export const getAuthError = (code) => {

    switch (code) {

        case "auth/email-already-in-use":
            return "Este correo electrónico ya está registrado.";

        case "auth/invalid-email":
            return "El correo electrónico no es válido.";

        case "auth/weak-password":
        case "auth/password-does-not-meet-requirements":
            return "La contraseña no cumple con los requisitos.";

        case "auth/invalid-credential":
        case "auth/user-not-found":
        case "auth/wrong-password":
            return "El correo o la contraseña son incorrectos.";

        case "auth/too-many-requests":
            return "Demasiados intentos. Intentá más tarde.";

        case "auth/network-request-failed":
            return "Revisá tu conexión a internet.";

        case "auth/operation-not-allowed":
            return "El método de autenticación no está habilitado.";

        default:
            return "Ocurrió un error. Intentá nuevamente.";
    }
};