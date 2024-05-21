import projects from "../../data/projects";

const Project = () => {
  return projects.map((project, index) => {
    const uniqueness = `project_${index + 1}_${project.title
      .replace(/ /g, "")
      .toLowerCase()}`;

    return (
      <div
        key={uniqueness}
        className={`${uniqueness} shadow-lg shadow-gray-100 py-5 px-3`}
      >
        {/* ---------- Picture */}
        <div className="project-thumbnail h-52 w-full">
          <img
            className="h-full w-full object-cover object-left-top rounded-xl shadow-sm shadow-gray-200 border border-slate-300"
            src={project.imageUrl}
            alt={`${project.name} project thumbnail`}
          />
        </div>

        {/* -------- Text*/}
        <div className="project-info-container">
          {/* First part: Title and description */}
          <div className="project-main-info text-center">
            {/* Title */}
            <h4 className="project-title font-bold text-xl uppercase tracking-wider py-5">
              {project.title}
            </h4>
            {/* Text description */}
            <p className="text-gray-500 tracking-wide">{project.description}</p>
          </div>
          {/* Second part: Technologies and links */}
          <div className="project-info-extra">
            {/* Techs */}
            <div className="project-technologies flex justify-center flex-wrap gap-4 py-6 px-3">
              {project.technologies.map((tech_work, index) => (
                <span key={index} className="uppercase font-bold text-lg">
                  {tech_work}
                </span>
              ))}
            </div>
            {/* Links */}
            <div className="project-links flex flex-wrap justify-center gap-x-5 font-bold text-xl p-1">
              {/* Code link */}
                {
                  project.githubUrl ? 
                  project.githubUrl.map(github  => (
                    <div className="to-github">
                    <a target="_blank" href={github.url} className="flex items-center gap-x-1">Code <img className="h-6 aspect-square" src={github.icon} alt="github code icon"/></a>
                    </div>
                  ))
                  :
                  ""
                }

              {/* Website link */}
                {
                  project.websiteUrl ? 
                  project.websiteUrl.map(website  => (
                    <div className="to-website">
                    <a target="_blank" href={website.url} className="flex items-center gap-x-1">Live Demo<img className="h-6 aspect-square" src={website.icon} alt="website live demo icon"/></a>
                    </div>
                  ))
                  :
                  ""
                }
           
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Project;
