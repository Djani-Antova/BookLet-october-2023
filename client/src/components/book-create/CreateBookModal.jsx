import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bookService from '../../services/bookService';


import {
  runEmptyTitleInput,
  runEmptyAuthorInput,
  runEmptyDescriptionInput,
  runSuccessfulBookCreation,
  runEmptyImageUrlInput,
  runEmptyGenreInput,
  runPublishedAtInput,

} from '../../utils/alerts';

import './CreateBookModal.css';

export default function CreateBookModal() {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: '',
    genre: '',
    publishedAt: '',
    desc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createBookSubmitHandler = async (e) => {
    e.preventDefault();

    // Check for empty title and description
    if (formData.title === '') {
      runEmptyTitleInput();
      return;
    }

    if (formData.author === '') {
        runEmptyAuthorInput();
        return;
      }

    if (formData.imageUrl === '') {
        runEmptyImageUrlInput();
        return;
      }  

    if (formData.genre === '') {
        runEmptyGenreInput();
        return;
      }  

      if (formData.publishedAt === '') {
        runPublishedAtInput();
        return;
      }    

    if (formData.desc === '') {
      runEmptyDescriptionInput();
      return;
    }

    try {
      await bookService.create(formData);
      runSuccessfulBookCreation();
      navigate('/books');
    } catch (error) {
      // TODO: Handle error
      console.error(error);
    }
  };

  return (
    <div className="create-book-modal">
      <div className="book-container">
        <header className="headers">
          <button className="btn close">X</button>
          <img src="/images/vecteezy_trophy-vector-isolated-on-white-background_7063100.jpg" alt="Book" />
          <h2 className="new-book">Nominate New Book</h2>

          <form onSubmit={createBookSubmitHandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />

            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} />

            <label htmlFor="imageUrl">Image URL:</label>
            <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} />

            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" value={formData.genre} onChange={handleInputChange} />

            <label htmlFor="publishedAt">Published At:</label>
            <input type="text" id="publishedAt" name="publishedAt" placeholder="dd-mm-yyyy" value={formData.publishedAt} onChange={handleInputChange} />

            <label htmlFor="desc">Description:</label>
            <textarea type="text" id="desc" name="desc" value={formData.desc} onChange={handleInputChange} />

            <div className="modal-buttons">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button id="action-cancel" className="btn" type="button" >
                Cancel
              </button>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}
