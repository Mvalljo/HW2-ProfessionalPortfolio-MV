import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

function Work() {
  return (
    <div id="works">
      <section className="project first">
        <div className="scrollable">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/LowRiskVacay.png`}
            style={{ width: "100%" }}
            alt="First project"
          />
        </div>
        <div className="text-center mt-2">
          <h5
            className="text-light text-wrap mx-auto p-2 border border-primary"
            style={{ width: "fit-content", backgroundColor: "purple" }}
          >
            Low Risk Vacay
          </h5>
          <a
            href="https://marisolbsmith.github.io/team10forthewin/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ backgroundColor: "purple" }}
          >
            Deployed Link
          </a>
          <a
            href="https://github.com/marisolbsmith/team10forthewin"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ backgroundColor: "purple" }}
          >
            Github Repo
          </a>
        </div>
      </section>

      <div className="bd-example border border-primary border-5">
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="hover"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Bookstack.png`}
                className="d-block w-100"
                alt="Second project"
              />
              <div className="carousel-caption d-md-block">
                <h5
                  className="
                      text-light text-wrap
                      mx-auto
                      p-2
                      border border-primary
                    "
                  style={{ width: "fit-content", backgroundColor: "purple" }}
                >
                  Bookstack
                </h5>
                <a
                  href="https://bookstack6.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/Mvalljo/BookStack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/TechnoBubble.png`}
                className="d-block w-100"
                alt="Third project"
              />
              <div className="carousel-caption d-md-block">
                <h5
                  className="
                      text-light text-wrap
                      mx-auto
                      p-2
                      border border-primary
                    "
                  style={{ width: "fit-content", backgroundColor: "purple" }}
                >
                  Techno Bubble
                </h5>
                <a
                  href="https://intense-depths-27704.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/Mvalljo/TechnoBabble"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/WatherDashboard.png`}
                className="d-block w-100"
                alt="Fourth project"
              />
              <div className="carousel-caption d-md-block">
                <h5
                  className="
                      text-light text-wrap
                      mx-auto
                      p-2
                      border border-primary
                    "
                  style={{ width: "fit-content", backgroundColor: "purple" }}
                >
                  Weather Dashboard
                </h5>
                <a
                  href="https://github.com/Mvalljo/Atmospheric-Conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Deployed Link
                </a>
                <a
                  href="https://mvalljo.github.io/Atmospheric-Conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/NoteTaker.png`}
                className="d-block w-100"
                alt="Fifth project"
              />
              <div className="carousel-caption d-md-block">
                <h5
                  className="
                      text-light text-wrap
                      mx-auto
                      p-2
                      border border-primary
                    "
                  style={{ width: "fit-content", backgroundColor: "purple" }}
                >
                  Note Taker
                </h5>
                <a
                  href="https://enigmatic-island-21737.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/Mvalljo/Note-Taker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/EmployeeTracker.png`}
                className="d-block w-100"
                alt="Sixth project"
              />
              <div className="carousel-caption d-md-block">
                <h5
                  className="
                      text-light text-wrap
                      mx-auto
                      p-2
                      border border-primary
                    "
                  style={{ width: "fit-content", backgroundColor: "purple" }}
                >
                  Employee Tracker
                </h5>
                <a
                  href="https://youtu.be/fHUsjcb6kVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Walkthrough of App
                </a>
                <a
                  href="https://github.com/Mvalljo/Employee-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple" }}
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <FiChevronLeft fontSize="100px" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <FiChevronRight fontSize="100px" />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
