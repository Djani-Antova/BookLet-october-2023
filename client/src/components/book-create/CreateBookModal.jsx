import "./CreateBookModal.css";
import { useNavigate } from 'react-router-dom'
import * as bookService  from '../../services/bookService';

export default function CreateBookModal() {
    const navigate = useNavigate();

    const createBookSubmitHandler = async (e) =>{
        e.preventDefault();

        const bookData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await bookService.create(bookData);
    
            navigate('/books');            
        } catch (error) {
            //TODO Error notification => may use f.ex. Toaster message that error occured
            console.log(error);
        }
    } 

    return (
        <div className="create-book-modal">
            <div className="book-container">
                <header className="headers">
                <button className="btn close"
                        // onClick={onClose}
                    > X </button>
                    <h2 className="new-book">Nominate New Book</h2>

                    <form onSubmit={createBookSubmitHandler}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" />
                        {/* <p className="form-error">
                                        Title should be at least 3 characters long!
                                        </p> */}

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" />
                        {/* <p className="form-error">
                                        Author should be at least 3 characters long!
                                        </p> */}

                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" />
                        {/* <p className="form-error">ImageUrl is not valid!</p> */}

                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" />
                        {/* <p className="form-error">
                                        Genre should be at least 3 characters long!
                                        </p> */}

                        <label htmlFor="publishedAt">Published At:</label>
                        <input type="text" id="publishedAt" name="publishedAt" />
                        {/* <p className="form-error">
                                        Published At is not valid!!
                                            </p> */}

                        <label htmlFor="desc">Description:</label>
                        <textarea type="text" id="desc" name="desc" />
                        {/* <p className="form-error">Description should be at least 6 characters long!</p> */}

                        <div className="modal-buttons">
                            <button id="action-save" className="btn" type="submit">
                            Save
                            </button>
                            <button
                            id="action-cancel"
                            className="btn"
                            type="button"
                            // onClick={onClose}
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
