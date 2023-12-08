import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";

import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import { runSuccessfulBookDeletion, runEmptyFieldAlert } from '../../utils/alerts';
import { pathToUrl } from "../../utils/pathUtils";

import "./BookDetails.css";

function BookDetails() {
  const { username, userId, isAuthenticated } = useContext(AuthContext);
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { bookId } = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const bookData = await bookService.getOne(bookId);
        const commentsData = await commentService.getAll(bookId);

        setBook(bookData);
        setComments(commentsData);
        setError(null); 
      } catch (error) {
        console.error("Error fetching book details or comments:", error);
        setError('Error fetching book details or comments. Please try again later.');
      }
    };

    fetchedData();
  }, [bookId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      runEmptyFieldAlert();
      return;
    }

    try {
      const createdComment = await commentService.create(bookId, newComment);

      setComments((state) => [
        ...state,
        { ...createdComment, owner: { username } },
      ]);

      setNewComment(""); 
    } catch (error) {
      console.error("Error adding comment:", error);
      setError('Error adding comment. Please try again later.');
    }
  };

  const deleteBookHandler = async (e) => {
    e.preventDefault();

    const hasConfirmed = window.confirm(`Are you sure you want to delete ${book.title}`);

    if (hasConfirmed) {
      try {
        await bookService.remove(bookId);
        runSuccessfulBookDeletion();
        navigate('/books');
      } catch (error) {
        console.error("Error deleting book:", error);
        setError('Error deleting. Please try again later.');
      }
    } else {
      navigate('/books');
    }
  };

  const isOwner = userId === book._ownerId;

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

          {isOwner && (
            <div className="product-btn">
              <Link to={pathToUrl(Path.BookEdit, { bookId })} className="edit" type="button">Edit </Link>
              <button className="delete" type="button" onClick={deleteBookHandler}> Delete </button>
            </div>
          )}
        </div>
      </div>

      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {comments.map(({ _id, text, owner: { username } }) => (
            <li key={_id} className="comment">
              <p>
                {username}: {text}
              </p>
            </li>
          ))}
        </ul>

        {comments.length === 0 && <p className="no-comment">No comments.</p>}

        {isAuthenticated && (
          <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={addCommentHandler}>
              <textarea
                name="comment"
                placeholder="Comment......"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
                  <p>
                    <button type="submit" className="btn submit">
                        Submit
                    </button>
                  </p>
            </form>
          </article>
        )}
        
        {error && (
          <div className="error-message" style={{ color: 'red', fontSize: '2em' }}>
            {error}
          </div>
        )}

      </div>
    </div>
  );
}

export default BookDetails;