import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";

import "./BookDetails.css";

function BookDetails() {
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const { bookId } = useParams();

  useEffect(() => {
    bookService.getOne(bookId)
        .then(setBook);

    commentService.getAll(bookId)    
        .then(setComments);
  }, [bookId]);

  const addComentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
        bookId,
        formData.get('username'),
        formData.get('comment')
    );
        setComments(state => [...state, newComment])
 
  }

  return (
    <div id="details-wrapper">
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
            {comments.map(({_id, username, text}) => (
                <li key={_id} className="comment">
                    <p>{username}: {text}</p>
                </li>
            ))}   
        </ul>

        {comments.length === 0 && 
            <p className="no-comment">No comments.</p>        
        }

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addComentHandler}>
          <input type="text" name="username" placeholder="username" />
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>

      </div>


    </div>
  );
}

export default BookDetails;
