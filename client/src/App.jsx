import { Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import FeaturedList from './components/book-list/FeaturedList'
import CreateBookModal from './components/book-create/CreateBookModal'


function App() { 

    return (
        <div id="box">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<FeaturedList />} />
                <Route path="/create" element={< CreateBookModal/>} />              
           
            </Routes>

            <Footer />
        </div>
    )
}

export default App
