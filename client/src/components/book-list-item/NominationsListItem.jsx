import { formatDate } from "../../utils/dataUtils";

import './NominationsListItem.css';

export default function NominationsListItem ({
    title,
    author,
    imageUrl,
    genre,
    publishedAt,
    desc
}) {

    return(
        <article className="entry">
            <div className="media">
                <img
                    src={imageUrl}
                    alt={`${title}'s poster`}
                    style={{ width: "152px", height: "227px" }}
                />
            </div>
            <section className="entry-content">
                <div className="meta">
                    <div className="tags">
                    <label>{formatDate(publishedAt)}</label>
                    </div>
                    <p className="genre">{genre}</p>
                </div>
            <header className="entry-header">
                <h4>{title}</h4>
            </header>
            <p className="short-desc">{desc}</p>
            <p>
                <a href="#" className="read-more">
                Read more
                </a>
            </p>

            {/* <div className="actions">
                    <button className="btn edit-btn" title="Edit">
                        Edit
                    </button>
                    <button className="btn delete-btn" title="Delete" >
                        Delete
                    </button>
                    <button className="btn info-btn" title="Info" >
                        Details
                    </button>
            </div> */}


            </section>
        </article>
);
    
}