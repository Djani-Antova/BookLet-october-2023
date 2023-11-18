import './FeaturedList.css';
// import FeaturedListTable from './FeaturedListTable';
import { useEffect, useState } from 'react';
import * as bookService from '../../services/bookService'

export default function FeaturedList() {
    const[books, setBooks] = useState([])

    useEffect(() => {
        bookService.getAll()
            .then(result => setBooks(result))
         
    }, [])
    console.log(books);

    return (
        <section className="section-blog featured section">
        <div className="section-container">
            <header className="section-header">
            <div className="breadcrumbs">
                <p>BookLet</p>
            </div>
            <h2>Stay Informed and Inspired with <span>BookLet</span> News</h2>
            <p>
            Discover and nominate the finest novels of the past decade.
            </p>
            <h4 className="list-header">Featured Blog Posts</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, libero, nihil est tenetur quasi sit consectetur officia debitis voluptates magni esse sapiente dolorem! Esse doloribus, ad ex hic omnis illo?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, libero, nihil est tenetur quasi sit consectetur officia debitis voluptates magni esse sapiente dolorem! Esse doloribus, ad ex hic omnis illo?</p>
            </header>
            {/* <FeaturedListTable /> */}
        </div>
        </section>
    );
}
