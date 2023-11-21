import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as bookService from "../../services/bookService"

import "./BookDetails.css";

function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(setBook);
    }, [bookId])

  return (
    <>    
      <div className="wrapper">
        <div className="product-img">
          <img src={book.imageUrl} height={420} width={327} alt={book.title}/>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{book.title}</h1>
            <h2>By: {book.author}</h2>
            <h5>Genre: {book.genre}</h5>
            <h6>Published at: {book.publishedAt}</h6>
            <p>{book.desc}</p>
          </div>
          <div className="product-btn">
            <button className="edit" type="button">
              Edit
            </button>
            <button className="delete" type="button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
