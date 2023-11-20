import './NominationsList.css';
import NominationsListTable from './NominationsListTable.jsx';
import { useEffect, useState } from 'react';
import * as bookService from '../../services/bookService.js'

export default function NominationsList() {
    const[books, setBooks] = useState([])

    useEffect(() => {
        bookService.getAll()
            .then(result => setBooks(result))
         
    }, [])
    // console.log(books);

    return (
        <section className="section-blog featured section">
        <div className="section-container">
            {/* <header className="section-header">  */}
             {/* <div className="breadcrumbs">
                <p>BookLet</p>
            </div> */}
            <h2>Stay Informed and Inspired with <br /> <span>BookLet</span> Nominations for this Decade</h2>
            <h4>
            Discover and Nominate the Finest Novels 
            </h4>
            <h5 className="list-nominations">Nominated Books</h5>
                 {/* </header> */}
            <NominationsListTable />
        </div>
        </section>
    );
}
