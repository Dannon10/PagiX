import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <nav className="nav-container">
        <p className="logo">PagiX</p>
        <Link to="/" className="about-link">Dashbard</Link>
      </nav>
      <div className="about-main">
        <h1 className="about">Want to learn more about PagiX?</h1>
        <p>
          PagiX is a React-based web application designed to provide a
          seamless pagination experience while exploring random developer
          profiles. Whether you're a recruiter, a developer, or just someone
          curious about the tech community, PagiX makes it easy to browse
          through various profiles efficiently.
        </p>

        <h3 className="about">
          Why PagiX?
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

          PagiX fetches and displays a set of random developer profiles.
          Users can move between pages effortlessly using the built-in
          pagination system.
        </p>
        <h3 className="about" id="built">
          Built With:
        </h3>
        <ul id="built-list">
          <li>
            ✅ React.js: For a dynamic and responsive UI
          </li>
          <li>
            ✅ Vite: Ensuring a fast and optimized development experience
          </li>
          <li>
            ✅ Modern CSS: Providing a clean and accessible design
          </li>
        </ul>
      </div>
    </div>
  );
}
