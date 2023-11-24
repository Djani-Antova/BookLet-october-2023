import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";

import "./BookDetails.css";

function BookDetails() {
  const {email} = useContext(AuthContext);
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
        formData.get('comment')
    );



        setComments(state => [...state, {...newComment, author: {email}}]) //TODO check!
 
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
            {comments.map(({_id, text, owner: { email }}) => (
                <li key={_id} className="comment">
                    <p>{email}: {text}</p>
                </li>
            ))}   
        </ul>

        {comments.length === 0 && 
            <p className="no-comment">No comments.</p>        
        }

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addComentHandler}>
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>

      </div>


    </div>
  );
}

export default BookDetails;
