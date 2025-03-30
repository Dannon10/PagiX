import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function About() {
  return (
    <div>
              <nav className="nav-container">
                   <div className="nav-content">
                   <h2 className="logo">PagiX_ _ _</h2>
                   </div>
           
                   <div className="nav-content">
                   <ul className="nav-links">
                     <li className="nav-link">
                       <Link to="/">Home</Link>
                     </li>
                     <li className="nav-link">
                       {/* <Link to="Users">Users</Link> */}
                     </li>
                     <li className="nav-link">
                       <Link to="/Users/About">About</Link>
                     </li>
                   </ul>
                   </div>
                 </nav>
      <div className="home-main about-main">

      <h1 className="about">Want to learn more about us?</h1>
      <p>
PagiX_ _ _ is a React-based web application designed to provide a 
seamless pagination experience while exploring random developer 
profiles. Whether you're a recruiter, a developer, or just someone 
curious about the tech community, PagiX_ _ _ makes it easy to browse 
through various profiles efficiently.
</p>

<h3>
Why PagiX_ _ _?
</h3>
<ul className="about-list">

<li>
Smooth Pagination – Navigate through multiple developer 
profiles without lag or clutter.
</li>

<li>
Randomized Developer Data – Discover new and interesting 
developers with each visit.
</li>

<li>
User-Friendly Interface – Built with simplicity in 
mind for a smooth browsing experience.
</li>

<li>
Fast & Lightweight – Powered by React for quick 
performance and dynamic updates.
</li>
</ul>

<p id="work">
How It Works?

PagiX_ _ _ fetches and displays a set of random developer profiles. 
Users can move between pages effortlessly using the built-in 
pagination system.
</p>
<h3 id="built">
Built With:
</h3>
<ul id="built-list">
  <li>
✅ React.js – For a dynamic and responsive UI
  </li>
  <li>
✅ Vite – Ensuring a fast and optimized development experience
  </li>
  <li>
✅ Modern CSS – Providing a clean and accessible design
  </li>
</ul>
      </div>

      <footer className="footer">
        <p>&copy; Copyright 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
}
