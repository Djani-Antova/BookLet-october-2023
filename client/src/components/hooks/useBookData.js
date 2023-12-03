import { useEffect, useState } from "react";
import * as bookService from "../../services/bookService";

export function useBookData() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookService.getAll()
      .then(result => setBooks(result))
      .catch(err => {
        console.error(err);
        setError('Error fetching books. Please try again later.');
      });
  }, []);

  return { books, error };
}