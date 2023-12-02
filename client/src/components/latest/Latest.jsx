import { useEffect, useState } from 'react';

import * as bookService from '../../services/bookService.js'
import LatestBook from './LatestBook.jsx';



import './Latest.css';

export default function Latest() {

    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {
        bookService.getLatest()
            .then((result) => setLatestBooks(result))
            .catch(err => console.log(err))     // TODO da dobavim user action, user notification     
    }, []); 
    console.log(latestBooks);
    
   
    return (
        <section className="section-blog featured section">
            <div className="section-container">
                <h2>Latest  Nominations For <br /> <span>BookLet Award</span> </h2>
            

                {latestBooks.map(book => <LatestBook key={book._id} {...book} />)}
               
                {!latestBooks.length &&  <h4> There are no nominations yet.</h4> }
              
            </div>
        </section>
    );
}
