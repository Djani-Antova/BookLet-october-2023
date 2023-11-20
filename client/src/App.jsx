import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NominationsList from "./components/book-list/NominationsList";
import CreateBookModal from "./components/book-create/CreateBookModal";
import Login from "./components/login/Login";
import Register from "./components/register/Register";


function App() {
  return (
    <div id="box">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<NominationsList />} />
          <Route path="/create" element={<CreateBookModal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
