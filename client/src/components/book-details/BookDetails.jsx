import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";

import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import useForm from "../hooks/useForm";
import Path from "../../paths";
import { runSuccessfulBookDeletion } from '../../utils/alerts';


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

  const addComentHandler = async (values) => {
    const createdComment = await commentService.create(
      bookId,
      values.comment
    );

    setComments((state) => [
      ...state,
      { ...createdComment, owner: { username } },
    ]);
    setNewComment(""); // Reset the new comment state to clear the textarea
  };

  const deleteBookHandler = async () => {
    try {
      await bookService.remove(bookId);
      runSuccessfulBookDeletion();
      navigate('/books');
    } catch (error) {
      console.error("Error deleting book:", error);
      // Handle deletion error if needed
    }
  };

    //TODO temp solution for form reinitialization
  const initialValues = useMemo(() => ({
    comment: "",
  }), [])

  const { values, onChange, onSubmit } = useForm(addComentHandler, initialValues);

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
            <Link to={Path.BookDelete} className="delete" type="button" onClick={deleteBookHandler}> Delete </Link>
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
        <form className="form" onSubmit={onSubmit}>
            <textarea
            name="comment"
            placeholder="Comment......"
            value={values.comment}
            onChange={onChange}
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
        </form>
        </article>
    )}
    </div>
    </div>
);
}

export default BookDetails;
