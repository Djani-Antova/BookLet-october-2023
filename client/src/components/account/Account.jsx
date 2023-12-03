import { useContext, useEffect, useState } from 'react';
import * as bookService from '../../services/bookService.js'
import AuthContext from '../../contexts/authContext.jsx'
import MyBook from './MyBook';

export default function Account() {
    const { userId } = useContext(AuthContext)
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        if (userId) {
            // Call getMyBooks only if userId is available
            bookService.getMyBooks(userId)
                .then((result) => setMyBooks(result))
                .catch(err => console.log(err));
        }
    }, [userId]); 

    return (
        <section className="section-blog featured section">
            <div className="section-container">
                <h2>My Nominations For <br /> <span>BookLet Award</span> </h2>
                {myBooks.map(book => <MyBook key={book._id} {...book} />)}
                {!myBooks.length &&  <h4> You have no nominations yet.</h4> }
            </div>
        </section>
    );
}