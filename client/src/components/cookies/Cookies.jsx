import React from 'react';
import './Cookies.css';

export default function Cookies() {
    return (
        <div className="cookies-container">
            <h2 className="about-section-heading">Cookie Settings</h2>

            <p>
                Welcome to our Cookie Settings page. Here, you can learn more about the types of cookies we use
                and how you can manage them to enhance your browsing experience.
            </p>

            <h3>Types of Cookies We Use</h3>
            <ul>
                <li>Essential Cookies: These cookies are necessary for the website to function properly.</li>
                <li>Analytical/Performance Cookies: These cookies allow us to analyze site usage and performance.</li>
                <li>Targeting Cookies: These cookies may be set through our site by advertising partners.</li>
            </ul>

            <h3>Managing Cookies</h3>
            <p>
                You can control and manage cookies in your browser settings. Please refer to your browser's
                help or support documentation for more information on how to do this.
            </p>
        </div>
    );
}
