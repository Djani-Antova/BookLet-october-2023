import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as bookService from '../../services/bookService';
import {
  runSuccessfulBookEdition,
  runEmptyTitleInput,
  runEmptyAuthorInput,
  runEmptyImageUrlInput,
  runEmptyGenreInput,
  runPublishedAtInput,
  runEmptyDescriptionInput,
} from '../../utils/alerts';

import './EditBook.css';

export default function EditBook() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [book, setBook] = useState({
    title: '',
    author: '',
    imageUrl: '',
    genre: '',
    publishedAt: '',
    desc: '',
  });

  useEffect(() => {
    bookService.getOne(bookId).then((result) => {
      setBook(result);
    });
  }, [bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Check for empty title and description
    if (book.title === '') {
      runEmptyTitleInput();
      return false;
    }

    if (book.author === '') {
      runEmptyAuthorInput();
      return false;
    }

    if (book.imageUrl === '') {
      runEmptyImageUrlInput();
      return false;
    }

    if (book.genre === '') {
      runEmptyGenreInput();
      return false;
    }

    if (book.publishedAt === '') {
      runPublishedAtInput();
      return false;
    }

    if (book.desc === '') {
      runEmptyDescriptionInput();
      return false;
    }

    return true; // Form is valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      await bookService.edit(bookId, book);
      runSuccessfulBookEdition();
      navigate('/books');
    } catch (error) {
      // TODO: Handle errors
      console.error(error);
    }
  };

  const handleCancel = () => {
    navigate('/books');
  };

  return (
    <div className="create-book-modal">
      <div className="book-container">
        <header className="headers">
          <button className="btn close" onClick={handleCancel}>
            X
          </button>
          <img
            src="/images/vecteezy_trophy-vector-isolated-on-white-background_7063100.jpg"
            alt="Book"
          />
          <h2 className="new-book">Edit Nominated Book</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={book.title}
              onChange={handleInputChange}
            />

            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleInputChange}
            />

            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={book.imageUrl}
              onChange={handleInputChange}
            />

            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={book.genre}
              onChange={handleInputChange}
            />

            <label htmlFor="publishedAt">Published At:</label>
            <input
              type="text"
              id="publishedAt"
              name="publishedAt"
              placeholder="dd-mm-yyyy"
              value={book.publishedAt}
              onChange={handleInputChange}
            />

            <label htmlFor="desc">Description:</label>
            <textarea
              type="text"
              id="desc"
              name="desc"
              value={book.desc}
              onChange={handleInputChange}
            />

            <div className="modal-buttons">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button
                id="action-cancel"
                className="btn"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}
