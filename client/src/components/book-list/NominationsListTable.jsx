// import "./NominationsTable.css";
import { useEffect, useState } from "react";
import * as bookService from "../../services/bookService";
import NominationsListItem from "../book-list-item/NominationsListItem";
import CreateBookModal from "../book-create/CreateBookModal";
// import BookDetailsModal from "./BookDetailsModal";


export default function NominationsTable() {
    const [books, setBooks] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        bookService.getAll()
            .then((result) => setBooks(Object.values(result)))
            .catch(err => console.log(err))     // TODO da dobavim user action, user notification     
    }, []);

    const createBookClickHandler = () => {
    setShowCreate(true)
    };

    const hideCreateBookModal = () => {
    setShowCreate(false)
    };

    const bookCreateHandler = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));
        const newBook = await bookService.create(data);

        setBooks((state) => [...state, newBook])

        setShowCreate(false)
    }

    const bookDetailsClickHandler = async (bookId) => {
        setSelectedBook(bookId);
       
        
        setShowDetails(true); 
    };

    return (
        <div className="table-wrapper">   
            {showCreate && (
                <CreateBookModal 
                    onClose={hideCreateBookModal} 
                    onCreate = {bookCreateHandler}
                /> 
            )}

            {showDetails && (
                <BookDetailsModal 
                    onClose = {() => setShowDetails(false)} 
                    bookId={selectedBook} 
                    /> 
            )}

            <button className="btn-add btn" onClick={createBookClickHandler} >Add new book</button>

            <section className="entries-list">          
                {books.map((book) => (
                    <NominationsListItem
                        key={book._id}  // Use _id as the key
                        bookId={book._id}  // Make sure to include bookId prop
                        title={book.title}
                        author={book.author}
                        imageUrl={book.imageUrl}
                        genre={book.genre}
                        publishedAt={book.publishedAt}
                        desc={book.desc}
                        onDetailsClick={bookDetailsClickHandler}

                />            
                ))}   
            </section>
                    
        </div>
    );
}
