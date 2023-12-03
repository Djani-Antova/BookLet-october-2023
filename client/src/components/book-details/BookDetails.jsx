import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import { runSuccessfulBookDeletion, runEmptyFieldAlert } from '../../utils/alerts';
import "./BookDetails.css";
import { pathToUrl } from "../../utils/pathUtils";

function BookDetails() {
  const { username, userId, isAuthenticated } = useContext(AuthContext);
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  const { bookId } = useParams();

  useEffect(() => {
    bookService.getOne(bookId).then(setBook);
    commentService.getAll(bookId).then(setComments);
  }, [bookId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    // Check if the comment is empty
    if (!newComment.trim()) {
      runEmptyFieldAlert();
      return;
    }

    const createdComment = await commentService.create(bookId, newComment);

    setComments((state) => [
      ...state,
      { ...createdComment, owner: { username } },
    ]);

    setNewComment(""); // Reset the new comment state to clear the textarea
  };

  const deleteBookHandler = async (e) => {
    e.preventDefault();

    const hasConfirmed = window.confirm(`Are you sure you want to delete ${book.title}`);

    if (hasConfirmed) {
      await bookService.remove(bookId);
      runSuccessfulBookDeletion();
      navigate('/books');
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
      </div>
    </div>
  );
}

export default BookDetails;
