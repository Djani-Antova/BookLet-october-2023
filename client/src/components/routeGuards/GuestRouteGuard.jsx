
import { useContext } from "react"
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext"
import Path from "../../paths";

export default function GuestRouteGuard( { children }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Path.Login} />;
    }

    return children
}