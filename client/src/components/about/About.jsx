import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-section-heading">About BookLet Forum</h2>
        {/* <p>
  BookLet is a place for avid book enthusiasts to nominate their favorite reads for the prestigious Booker Prize.
</p> */}

        <h3 className="how-it-works">How It Works</h3>
        <ol>
          <li>Explore the existing nominations and discussions.</li>
          <li>Ready to nominate? Simply click on the "Nominate" button.</li>
          <li>Fill in the details of the book you are nominating.</li>
          <li>Engage in discussions by commenting on nominations.</li>
          <li>
            Respect others' opinions and be part of a vibrant reading community!
          </li>
        </ol>
        <h3 className="nomination-rules">Nomination Rules</h3>
        <ul>
          <li>Books from all genres are welcome.</li>
          <li>
            Provide accurate details such as title, author, and a brief
            description.
          </li>
          <li>Ensure your nomination follows the community guidelines.</li>
          <li>Multiple nominations from the same user are allowed.</li>
        </ul>
        <h3 className="community-guidelines-heading">Community Guidelines</h3>
       
          <ul>
            <li>Be courteous and respectful to fellow members.</li>
            <li>Avoid offensive language and content.</li>
            <li>Ensure your nominations align with the forum's purpose.</li>
          </ul>
        
        {/* ... Rest of the component ... */}
      </div>
    </section>
  );
}
