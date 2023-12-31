import { Link } from 'react-router-dom';
import NominationsListTable from './NominationsListTable.jsx';
import { useBookData } from "../hooks/useBookData";
import './NominationsList.css';

export default function NominationsList() {
    const { books, error } = useBookData(); 

    return (
        <section className="section-blog featured section">
            <div className="section-container">
                <h2>Stay Informed and Inspired with <br /> <span>BookLet Award</span> Nominations</h2>
                <h4>Discover and Nominate the Finest Novels</h4>
                <h5 className="list-nominations">Nominated Books:</h5>

                {error ? (
                    <div className="error-message" style={{ color: 'red' }}>
                        <h2>{error}</h2>
                    </div>
                ) : (
                    <>
                        {books.length === 0 ? (
                            <div className="no-books-title">
                                <h2>
                                    There are no nominations yet. <br/>
                                    <Link to='/create' className="nomination-link">NOMINATE</Link>
                                </h2>
                            </div>
                        ) : (
                            <NominationsListTable />
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
