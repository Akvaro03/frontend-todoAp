import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, searchCollectionData, writeCollectionData, writeTodoData, writeUserData } from "../firebase";


export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("There is not a contex")
    return context
}


export  function AuthProvider ({children}) {
    const [user, setUser] = useState(null)
    const [collections, setCollections] = useState(null)
    const [state, setState] = useState("All")
    const [loading, setLoading] = useState(true)

    const singUp = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if (response)  {
            console.log("first")
            await writeUserData( email) 
        }
    }  
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const handleChange = async (email, data) => await writeCollectionData(email, data)
    const handleChangeState = async (nombreEstado) => setState(nombreEstado)

    // const submitTodos = (email, data) => writeCollectionData(email, data)
    
    const submitTodosDatos  = (email, data) => writeTodoData(email, data)

    const logOut = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            searchCollectionData(currentUser, setCollections)
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    // useEffect(() => {
    //     console.log(collection22)
    // }, [collection22])




    return (
        <authContext.Provider value={{singUp, login, logOut, handleChange, handleChangeState, submitTodosDatos,collections, loading, user, state}}>
            {children}
        </authContext.Provider>
    )
}