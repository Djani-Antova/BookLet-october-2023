import React from "react";
import { Link } from 'react-router-dom';
import Path from "../../paths";

import "./Home.css";

export default function Home() {
    return (
        <div className="home-background">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>
                            Welcome to <br />
                            BookLet Forum!
                        </h1>          
                        <p className="home-paragraph">
                            Welcome to our platform dedicated to nominating the literary triumphs
                            for the Booker Prize. From compelling narratives that
                            ignited imaginations to thought-provoking non-fiction that reshaped
                            perspectives, these works have defined the literary landscape of the
                            last decade.
                        </p>
                        <p className="home-paragraph">
                            Explore our curated selections and share your own nominations, as we
                            come together to honor the best books of the decade. Let us embark on
                            this journey of literary appreciation and pay tribute to the voices that
                            have inspired, challenged, and moved us over the past ten years.
                        </p>
                        <div className="btn-box">
                            <Link to={Path.About} className="btn1">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img
                            src="images/books-glasses-removebg-preview.png"
                            alt="books-glasses"
                            />
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

