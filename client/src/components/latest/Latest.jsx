import { useEffect, useState } from 'react';
import * as bookService from '../../services/bookService.js';
import LatestBook from './LatestBook.jsx';

import './Latest.css';

export default function Latest() {
    const [latestBooks, setLatestBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        bookService.getLatest()
            .then((result) => {
                setLatestBooks(result);
                setError(null); // Clear any previous errors
            })
            .catch((err) => {
                console.error(err); // Log the error for debugging
                setError('Error fetching latest books. Please try again later.');
            });
    }, []); 

    return (
        <section className="section-blog featured section">
            <div className="section-container">
                <h2>Latest Three Nominations For <br /> <span>BookLet Award</span> </h2>                

                {error ? (
                    <div style={{ border: '4px solid red', fontSize: '2em', color: 'bisque', padding: '25px' }}>{error}</div>
                ) : (
                    <>
                        {latestBooks.map(book => <LatestBook key={book._id} {...book} />)}
                        {!latestBooks.length && <h4> There are no nominations yet.</h4>}
                    </>
                )}
            </div>
        </section>
    );
}
