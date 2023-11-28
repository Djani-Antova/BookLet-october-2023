import { Routes, Route } from "react-router-dom";

import {AuthProvider}  from "./contexts/authContext";
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
import Privacy from "./components/privacy/Privacy";
import Terms from "./components/terms/Terms";
import Cookies from "./components/cookies/Cookies"
import GuestRouteGuard from "./components/routeGuards/GuestRouteGuard";





function App() {    
    return (
        <AuthProvider>
            <div id="box">
                <Navigation />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.List} element={<NominationsList />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.About} element={<About />} />
                    <Route path={Path.Privacy} element={<Privacy />} />
                    <Route path={Path.Terms} element={<Terms />} />
                    <Route path={Path.Cookies} element={<Cookies />} />
                    <Route path={Path.Details} element={<BookDetails />} />              
                    <Route path={Path.Create} element={ <GuestRouteGuard> <CreateBookModal /> </GuestRouteGuard>} />
                    <Route path={Path.Logout} element={<Logout />} />

                    <Route path={Path.PageNotFound} element={<PageNotFound />} />
                   
                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
