import { useContext, useEffect, useState } from 'react';
import * as bookService from '../../services/bookService.js'
import AuthContext from '../../contexts/authContext.jsx'
import MyBook from './MyBook';

export default function Account() {
    const { userId } = useContext(AuthContext);
    const [myBooks, setMyBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userId) {          
            bookService.getMyBooks(userId)
                .then((result) => setMyBooks(result))
                .catch((err) => {
                    console.error("Error fetching my books:", err);
                    setError('Error fetching my books. Please try again later.');
                });
        }
    }, [userId]); 

    return (
        <section className="section-blog featured section">
            <div className="section-container">
                <h2>My Nominations For <br /> <span>BookLet Award</span> </h2>

                {error ? (
                    <div style={{ color: 'red', fontSize: '2em' }}>
                        {error}
                    </div>
                ) : (
                    <>
                        {myBooks.map(book => <MyBook key={book._id} {...book} />)}
                        {!myBooks.length &&  <h4> You have no nominations yet.</h4>}
                    </>
                )}
            </div>
        </section>
    );
}