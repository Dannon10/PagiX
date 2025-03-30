import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
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
            <Link to="Users">Users</Link>
          </li>
          <li className="nav-link">
            <Link to="/Users/About">About</Link>
          </li>
        </ul>
        </div>
      </nav>

      <main className="home-main">
        <h1>Welcome to PagiX_ _ _</h1>
        <h3>Browse random developer profiles with seamless pagination...</h3>
        <p>Time to see our awesome Devops!!</p>
        <Link className="use" to="Users">
          Users
        </Link>
      </main>

      <footer className="footer">
        <p>&copy; Copyright 2025 All Rights Reserved</p>
      </footer>
    </>
  );
}
