import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bookService from '../../services/bookService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  runEmptyTitleInput,
  runEmptyAuthorInput,
  runEmptyDescriptionInput,
  runSuccessfulBookCreation,
  runEmptyImageUrlInput,
  runEmptyGenreInput,
  runPublishedAtInput,
} from '../../utils/alerts';

import './CreateBook.css';

export default function CreateBook() {
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
        console.error('Error creating book:', error);
        // Display error notification using React Toastify
        toast.error('Error creating the book. Please try again.');
    }
  };

  const handleCancel = () => {
      navigate('/books')
};

  return (
      <div className="create-book-modal">
          <div className="book-container">
              <header className="headers">
                  <button className="btn close" onClick={handleCancel}>X</button>
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
                          <button id="action-cancel" className="btn" type="button" onClick={handleCancel}>
                              Cancel
                          </button>
                      </div>
                  </form>
              </header>
          </div>
          <ToastContainer />
      </div>
  );
}
