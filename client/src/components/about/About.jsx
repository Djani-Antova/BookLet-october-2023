import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        <h2 className={styles["about-section-heading"]}>About BookLet Forum</h2>
        <h3 className={styles["how-it-works"]}>How It Works</h3>
        <ol>
          <li>Explore existing nominations and discussions.</li>
          <li>Ready to nominate? Login or register beforehand.</li>
          <li>Fill in the details of the book you are nominating.</li>
          <li>Engage in discussions by commenting on nominations.</li>
        </ol>
        <h3 className={styles["nomination-rules"]}>Nomination Rules</h3>
        <ul>
          <li>Books from all genres are welcome.</li>
          <li>
            Provide accurate details such as title, author, date of publication and a brief
            description.
          </li>
          <li>Ensure your nomination follows the community guidelines.</li>
          <li>Multiple nominations from the same user are allowed.</li>
        </ul>
        <h3 className={styles["community-guidelines-heading"]}>Community Guidelines</h3>
        <ul>
          <li>Be courteous and respectful to fellow members.</li>
          <li>Avoid offensive language and content.</li>
          <li>Ensure your nominations align with the forum's purpose.</li>
        </ul>
      </div>
    </section>
  );
}
