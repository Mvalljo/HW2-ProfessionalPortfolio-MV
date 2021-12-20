import React from "react";

function Work() {
  return (
    <div id="works">
      <section className="project first">
        <div className="scrollable">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/LowRiskVacay.png`}
            style= {{width:"100%"}}
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
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="prev"
          >
            <span
              className="fa fa-chevron-left fa-4x text-primary"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="next"
          >
            <span
              className="fa fa-chevron-right fa-4x text-primary"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
