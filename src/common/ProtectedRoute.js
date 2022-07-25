import { Backdrop, CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function ProtectedRoute({children}) {
    const {user, loading} = useAuth()
    if(loading) return  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading}
        >
  <CircularProgress color="inherit" />
</Backdrop>


    if(!user) return <Navigate to="/" />

    return <>{children}</>
}