import "./CreateBookModal.css";

export default function CreateBookModal(
  {
    // onClose,
    // onCreate,
  }
) {
  return (
    <div className="create-book-modal">
      <div className="book-container">
        <header className="headers">
        <button
              className="btn close"
              // onClick={onClose}
            >
              X{/* <FontAwesomeIcon icon={faTimes} /> */}
            </button>
          <h2>
            Nominate New Book

          </h2>

          <form
          // onSubmit={onCreate}
          >
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
