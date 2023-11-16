import './FeaturedList.css';
// import FeaturedListTable from './FeaturedListTable';

export default function FeaturedList() {
  return (
    <section className="section-blog featured section">
      <div className="section-container">
        <header className="section-header">
          <div className="breadcrumbs">
            <p>BookLet</p>
          </div>
          <h2>Stay Informed and Inspired with <span>BookLet</span> News</h2>
          <p>
          Discover and nominate the finest novels of the past decade.
          </p>
          <h4 className="list-header">Featured Blog Posts</h4>
        </header>
        {/* <FeaturedListTable /> */}
      </div>
    </section>
  );
}
