import React from "react";

function Work() {
  const projects = [
    {
      title: "Low Risk Vacay",
      img: "LowRiskVacay.png",
      deployedLink: "https://marisolbsmith.github.io/team10forthewin/",
      githubRepo: "https://github.com/marisolbsmith/team10forthewin"
    },
    {
      title: "Bookstack",
      img: "Bookstack.png",
      deployedLink: "https://bookstack6.herokuapp.com/",
      githubRepo: "https://github.com/Mvalljo/BookStack"
    },
    {
      title: "Techno Bubble",
      img: "TechnoBubble.png",
      deployedLink: "https://intense-depths-27704.herokuapp.com/",
      githubRepo: "https://github.com/Mvalljo/TechnoBabble"
    },
    {
      title: "Weather Dashboard",
      img: "WatherDashboard.png",
      deployedLink: "https://github.com/Mvalljo/Atmospheric-Conditions",
      githubRepo: "https://mvalljo.github.io/Atmospheric-Conditions/"
    },
    {
      title: "Note Taker",
      img: "NoteTaker.png",
      deployedLink: "https://enigmatic-island-21737.herokuapp.com/",
      githubRepo: "https://github.com/Mvalljo/Note-Taker"
    }
  ];
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="col-sm-6 mb-5">
              <div className="card bg-dark " style={{ maxwidth: "18rem" }}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${project.img}`}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <a
                    href={project.deployedLink}
                    className="btn btn-primary m-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed Link
                  </a>
                  <a
                    href={project.githubRepo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
