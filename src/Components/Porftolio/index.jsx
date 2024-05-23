import Project from "../Project";
import SectionTitles from "../SectionTitles";

const Portfolio = () => {
  return (
    <section id="portfolio-projects-container" className="my-10">
      <SectionTitles title="Portfolio" className="lg:!text-left lg:mb-10">
        Chaque projet est une unique pièce de développement 🧩
      </SectionTitles>
      <div className="projects-container flex flex-col gap-y-10 lg:gap-y-20">
        <Project/>
        <p id="coming-soon-project" className="hidden lg:block lg:text-center lg:font-bold lg:text-3xl lg:my-4" >De nouveaux projets arrivent bientôt.. 🤫</p>
      </div>

    </section>
  );
};

export default Portfolio;
