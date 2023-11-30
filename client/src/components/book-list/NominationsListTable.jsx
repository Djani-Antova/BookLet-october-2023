import { useEffect, useState } from "react";
import * as bookService from "../../services/bookService";
import NominationsListItem from "../book-list-item/NominationsListItem";


export default function NominationsListTable() {
    const [books, setBooks] = useState([]);
    // const [showCreate, setShowCreate] = useState(false);
    // const [showDetails, setShowDetails] = useState(false);
    // const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        bookService.getAll()
            .then((result) => setBooks(Object.values(result)))
            .catch(err => console.log(err))     // TODO da dobavim user action, user notification     
    }, []); 

    return (
        <div className="table-wrapper">   
       
            <section className="entries-list">          
                {books.map((book) => (
                    <NominationsListItem key={book._id} {...book}                   
                />            
                ))}   
            </section>
                    
        </div>
    );
}
