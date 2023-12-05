import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import Path from "../paths";
import * as authService from "../services/authService";
import useLocalStorage from "../components/hooks/useLocalStorage";



const AuthContext = createContext();

export const AuthProvider = ({
    children,
 
}) => {

    const navigate = useNavigate()
    const [auth, setAuth] = useLocalStorage('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home)
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.name, values.email, values.username, values.password)

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
     }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;

