import projects from "../../data/projects";

const Project = () => {
  return projects.map((project, index) => {
    const uniqueness = `project_${index + 1}_${project.title
      .replace(/ /g, "")
      .toLowerCase()}`;

    return (
      // -------------- Project container
      <div
        key={uniqueness}
        className={`${uniqueness} shadow-lg shadow-gray-100 py-5 px-3 lg:px-1 lg:flex lg:gap-x-10 lg:py-1 lg:even:flex-row-reverse `}
      >
        {/* ---------- Picture */}
        <div className="project-thumbnail h-52 w-full lg:w-1/2 lg:h-full lg:rounded-2xl lg:p-1 lg:shadow-md lg:shadow-slate-200">
          <img
            className="h-full w-full object-contain object-top lg:object-center lg:object-contain lg:border-slate-100"
            src={project.imageUrl}
            alt={`${project.name} project thumbnail`}
          />
        </div>

        {/* -------- Text*/}
        <div className="project-info-container  lg:flex-1">
          {/* First part: Title and description */}
          <div className="project-main-info text-center">
            {/* Title */}
            <h4 className="project-title font-bold text-xl uppercase tracking-wider py-5 lg:pb-3 lg:pt-0">
              {project.title} 🌐
            </h4>
            {/* Text description */}
            <p className="text-gray-500 tracking-wide lg:text-sm">{project.description}</p>
          </div>
          {/* Second part: Technologies and links */}
          <div className="project-info-extra">
            {/* Techs */}
            <div className="project-technologies flex justify-center flex-wrap gap-4 py-6 px-3">
              {project.technologies.map((tech_work, index) => (
                <span key={index} className="uppercase font-bold text-lg lg:text-sm">
                  {tech_work}
                </span>
              ))}
            </div>
            {/* Links */}
            <div className="project-links flex flex-wrap justify-center gap-x-5 font-bold text-xl p-1">
              {/* Code link */}
                {
                  project.githubUrl ? 
                  project.githubUrl.map((github, index)  => (
                    <div className="to-github" key={index}>
                    <a target="_blank" href={github.url} className="flex items-center gap-x-1">Code <img className="h-6 aspect-square lg:h-8" src={github.icon} alt="github code icon"/></a>
                    </div>
                  ))
                  :
                  ""
                }

              {/* Website link */}
                {
                  project.websiteUrl ? 
                  project.websiteUrl.map((website, index)  => (
                    <div className="to-website" key={index}>
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
