import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";
import Path from "./paths";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NominationsList from "./components/book-list/NominationsList";
import CreateBookModal from "./components/book-create/CreateBookModal";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BookDetails from "./components/book-details/BookDetails";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import About from "./components/about/About";
import Logout from "./components/logout/Logout";



function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home)
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.name, values.email, values.username, values.password)

        //TODO here or ?? validation for password and confirmPassword

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
        isAuthenticated: !!auth.accessToken,
    }
    
    return (
        <AuthContext.Provider value={values}>
            <div id="box">
                <Navigation />

                <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.List} element={<NominationsList />} />
                <Route path={Path.Create} element={<CreateBookModal />} />
                <Route path={Path.Login} element={<Login />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path={Path.Details} element={<BookDetails />} />
                <Route path={Path.About} element={<About />} />
                <Route path={Path.Logout} element={<Logout />} />
                <Route path={Path.PageNotFound} element={<PageNotFound />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
