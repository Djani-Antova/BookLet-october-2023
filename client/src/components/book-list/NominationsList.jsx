import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as bookService from '../../services/bookService.js'

import NominationsListTable from './NominationsListTable.jsx';

import './NominationsList.css';

export default function NominationsList() {
    const[books, setBooks] = useState([])

    useEffect(() => {
        bookService.getAll()
            .then(result => setBooks(result))
            .catch(err => {
                console.log(err);   //TODO may want to do error handling here, although with seeded data is is not possible
            })
         
    }, [])


    return (
        <section className="section-blog featured section">
            <div className="section-container">
                <h2>Stay Informed and Inspired with <br /> <span>BookLet Award</span> Nominations</h2>
                <h4>Discover and Nominate the Finest Novels</h4>
                <h5 className="list-nominations">Nominated Books:</h5>

                {books.length === 0 ? (
                    <div className="no-books-title">
                        <h2>
                            There are no nominations yet. <br/>
                             <Link to='/create' className="nomination-link">NOMINATE</Link>
                        </h2>
                    </div>
                ) : (
                    <NominationsListTable />
                )}
            </div>
        </section>
    );
}
