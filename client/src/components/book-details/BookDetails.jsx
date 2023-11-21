import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as bookService from "../../services/bookService";

import "./BookDetails.css";

function BookDetails() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    bookService.getOne(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      <div className="wrapper">
        <div className="product-img">
          <img src={book.imageUrl} height={420} width={327} alt={book.title} />
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

      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          <li className="comment">
            <p>Content: I rate this one quite highly.</p>
          </li>
          <li className="comment">
            <p>
              Content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              imos similique sapiente?
            </p>
          </li>
        </ul>
        <p className="no-comment">No comments.</p>
      </div>

              <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" >
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

      
    </>
  );
}

export default BookDetails;
