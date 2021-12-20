import React from "react";
import { Routes, Route,Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Contact from "./Contact";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand fs-2">
            <strong>Maria Vallejo</strong>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  <strong>About Me</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/work">
                  <strong>Work</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  <strong>Contact</strong>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href={`${process.env.PUBLIC_URL}/assets/Resume-MV.pdf`}
                  download
                  target="blank"
                >
                  <strong>Resume</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<AboutMe />}></Route>
      </Routes>
    </header>
  );
}

export default Header;
