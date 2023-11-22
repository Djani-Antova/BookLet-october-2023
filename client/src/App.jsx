import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";
import Path from "./path";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NominationsList from "./components/book-list/NominationsList";
import CreateBookModal from "./components/book-create/CreateBookModal";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BookDetails from "./components/book-details/BookDetails";
import PageNotFound from "./components/pageNotFound/pageNotFound";



function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(Path.Home)
    }
    
    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
            <div id="box">
                <Navigation />

                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<NominationsList />} />
                <Route path="/create" element={<CreateBookModal />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books/:bookId" element={<BookDetails />} />
                <Route path="*" element={<PageNotFound />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
