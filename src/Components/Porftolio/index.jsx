import Project from "../Project";
import SectionTitles from "../SectionTitles";

const Portfolio = () => {
  return (
    <section id="portfolio-projects-container" className="my-10">
      <SectionTitles title="Portfolio">
        Chaque projet est une unique pièce de développement 🧩
      </SectionTitles>
      <div className="projects-container flex flex-col gap-y-10">
        <Project/>
      </div>

    </section>
  );
};

export default Portfolio;
