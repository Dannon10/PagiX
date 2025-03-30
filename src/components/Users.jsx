import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import About from "./About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(0);
  const [usersPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=100");
      setUsers(res.data.results);
      setTotalUsers(res.data.results.length);
      setIsLoading(false);
      console.log(res.data.results);
    };

    fetchUser();
  }, []);

  const indexOfLastUser = currentPage + usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNum) => setCurrentpage(pageNum);

  const prevPage = () => setCurrentpage(currentPage - 1);
  const nextPage = () => setCurrentpage(currentPage + 1);

  const showPagination = () => {
    return (
      <User
        usersPerPage={usersPerPage}
        totalUsers={totalUsers}
        currentPage={currentPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    );
  };

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
      <main className="user-container">
        {/* <h1 className="user-head">PagiX_ _ _  Developers</h1> */}
        {!isLoading
          ? currentUser.map((user) => (
              <>
              {/* <div className="main-card-container"> */}
                <div className="profile-card">
                  <div className="image">
                    <img
                      className="profile-img"
                      src={user.picture.medium}
                      alt={user.name.first}
                      />
                  </div>
                  <h4 className="profile-name">
                    {user.name.first} {user.name.last}
                  </h4>
                  <p className="profile-email">{user.email}</p>
                  <p className="profile-age">{user.dob.age}years old</p>
                </div>
                {/* </div> */}
              </>
            ))
          : <h1 className="loading">Loading...</h1>}
      </main>
      <Routes>
        <Route path="/Users/About" element={About}>
          About
        </Route>
      </Routes>
      <div>{showPagination()}</div>
    </div>
  );
}

export default Users;
