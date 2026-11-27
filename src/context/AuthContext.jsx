import { createContext, useState, useEffect } from "react";
//funciones de firebase aut
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../service/firebase";

//1. crear el contexto
export const AuthContext = createContext();

//2. Creamos el proveedor

export const AuthProvider = ({children})=> {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)


///TODAS LAS FUNCIONALIDADES

const register = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password)
}


const login = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logout = ()=> {
    return signOut(auth)
}

useEffect(()=> {
    const unsubscribe = onAuthStateChanged(
        auth,
        (currentUser)=> {
            setUser(currentUser)
            setLoading(false)
        }
    )

    return () => unsubscribe()
},[])

    return(
            <AuthContext.Provider value={{user, loading, register, login, logout}}>
                {children}
            </AuthContext.Provider>
    )
}

