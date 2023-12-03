import NominationsListItem from "../book-list-item/NominationsListItem";
import { useBookData } from "../hooks/useBookData";

export default function NominationsListTable() {
    const { books, error } = useBookData();

  return (
    <div className="table-wrapper">
      <section className="entries-list">
        {error ? (
          <div style={{ color: "red" }}>{error}</div>
        ) : (
          books.map((book) => <NominationsListItem key={book._id} {...book} />)
        )}
      </section>
    </div>
  );
}
