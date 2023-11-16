import { Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import FeaturedList from './components/book-list/FeaturedList'

function App() { 

    return (
        <div id="box">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<FeaturedList />} />
           
            </Routes>
            <Footer />
        </div>
    )
}

export default App
