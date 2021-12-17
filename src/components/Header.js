import React from "react";

const styles = {
  nav: {
    backgroundColor: "#555555"
  }
};

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={styles.nav}
      >
        <div className="container-fluid">
          <h1 className="navbar-brand fs-2">Maria Vallejo</h1>
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
                <a className="nav-link active" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#works">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="./assets/resume/Resume-MV.pdf"
                  download
                  target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
