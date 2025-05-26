import { useState, useEffect, useRef } from "react";
import { techRoles, shortDescriptions } from "../data/userInfo";
import axios from "axios";
import User from "./Pagination";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);
  const containerRef = useRef(null);

  
  const UNSPLASH_ACCESS_KEY = "t9H7wmDVjef7Cco3pX34FgpDn_SnS7YJBFCu03hkaOg";

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);

      try {
        const userRes = await axios.get("https://randomuser.me/api/?results=100");

        const totalPhotosNeeded = 100;
        const perPage = 30;
        const pagesNeeded = Math.ceil(totalPhotosNeeded / perPage);
        let allPhotos = [];

        for (let page = 1; page <= pagesNeeded; page++) {
          const photoRes = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
              query: "portrait",
              per_page: perPage,
              page,
            },
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          });
          allPhotos = allPhotos.concat(photoRes.data.results);
        }

        const photos = allPhotos.slice(0, totalPhotosNeeded);

        const enhancedUsers = userRes.data.results.map((user, idx) => {
          const index = Math.floor(Math.random() * techRoles.length);
          const role = techRoles[index];
          const description = shortDescriptions[index];
          const photo = photos[idx]; 

          return {
            ...user,
            role,
            description,
            picture: {
              large: photo.urls.regular, 
            },
          };
        });

        setUsers(enhancedUsers);
        setTotalUsers(enhancedUsers.length);
      } catch (error) {
        console.error("Error fetching users or photos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (users.length === 0 || window.innerWidth >= 768) return;

    const timeout = setTimeout(() => {
      const cards = gsap.utils.toArray(".profile-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, 0);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [users, currentPage]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNum) => setCurrentPage(pageNum);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(totalUsers / usersPerPage))
    );

  const showPagination = () => (
    <User
      usersPerPage={usersPerPage}
      totalUsers={totalUsers}
      currentPage={currentPage}
      paginate={paginate}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );

  return isLoading ? (
    <div className="spinner-container">
      <ClipLoader size={100} loading={true} />
    </div>
  ) : (
    <div className="pagix-container">
      <nav className="nav-container">
        <p className="logo">PagiX</p>
        <Link to="/Users/About" className="about-link">
          About
        </Link>
      </nav>

      <main className="user-container">
        <div className="badge">
          <img src="images/people.png" alt="Badge" />
          <p className="our">Our People</p>
        </div>

        <h1>Discover Tech Talent</h1>
        <p className="heading-text">
          Discover people from around the world. A paginated experience of
          random user profiles for global exploration.
        </p>

        <div className="profile-cards" ref={containerRef}>
          {currentUser.map((user) => (
            <div key={user.login.uuid} className="profile-card">
              <div className="image-wrapper">
                <img
                  className="profile-img"
                  src={user.picture.large}
                  alt={user.name.first}
                />
                <div className="profile-info">
                  <h4 className="profile-name">
                    {user.name.first} {user.name.last}
                  </h4>
                  <p className="profile-role">{user.role}</p>
                  <p className="profile-description">{user.description}</p>
                  <div className="social-icons">
                    <FaFacebook />
                    <FaGithub />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div>{showPagination()}</div>
    </div>
  );
}
