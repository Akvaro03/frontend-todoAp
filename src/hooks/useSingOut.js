import { useAuth } from '../context/authContext';


export function useSingOut() {
    const {logOut} = useAuth()

    const singOut = async () => {
        const response = await logOut()
        console.log(response)
    }
    return singOut
}