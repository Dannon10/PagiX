import "./App.css";
import Users from "./components/Users";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path="/Users/About" element={<About />}></Route>
      <Route
        path="*"
        element={
          <>
            <div className="error-404">
              <h1>Error 404 </h1>
              <h2>Page Not Found!</h2>
              <Link className="home-link" to="/">
                Dashboard
              </Link>
            </div>
          </>
        }
        ></Route>
    </Routes>
        </div>
  );
}
