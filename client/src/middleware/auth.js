
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/store";

export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/userlogin'} replace={true}></Navigate>
    }

    return children;
}

// kyuki user login nhi hua to local storage me store nhi hai
export const ProtectRoute = ({ children }) => {
    const username = useAuthStore.getState().auth.username;
    if(!username){
        return <Navigate to={'/userlogin'} replace={true}></Navigate>
    }
    return children;
}