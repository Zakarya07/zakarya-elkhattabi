import SectionTitles from "../SectionTitles";
import code_image from "../../assets/images/about-section.jpg";
import Simplon from "../../assets/images/formations/Logo_simplon.png";
import OPC from "../../assets/images/formations/Logo_OpenClassrooms.png";
import SelfLearning from "../../assets/images/formations/self-learning.jpg";
import badge from "../../assets/images/badge.png";

const AboutMe = () => {
  const logos = [
    { icon_img: Simplon, name: "Simplon" },
    { icon_img: OPC, name: "OpenClassrooms" },
    { icon_img: SelfLearning, name: "Autodidacte" },
  ];

  return (
    <section id="about-me" className="p-1 my-10">
      {/* Image container */}
      <div className="image-container h-56 relative">
        <img
          src={code_image}
          className="h-full w-full object-cover rounded-xl"
          alt="a propos de moi"
        />
        <div className="badge absolute h-28 aspect-square shadow-sm shadow-teal-800 rounded-full -bottom-10 -right-10">
          <img
            src={badge}
            className=" object-cover h-full w-full rounded-full"
          />
        </div>
      </div>
      {/* Content container */}
      <div className="text-container">
        <SectionTitles title="Deux mots sur moi!">
          Un passioné du développement web, basé à Paris, France 📍
        </SectionTitles>
        <div className="about-me-description text-sm text-gray-500 text-center flex flex-col gap-3 px-3">
          <p>
            Après plusieurs stages et formations dans divers domaines où il
            était difficile de trouver ma place, une décision audacieuse a été
            prise en 2019 pour suivre une véritable passion : le développement
            web. Ce changement a marqué le début d'une aventure passionnante,
            alliant créativité et technologie.
          </p>
          <p>
            Pour poser les bases, une formation initiale a été suivie, puis
            l'apprentissage s'est poursuivi en autodidacte, avec une soif
            constante de nouvelles connaissances et compétences. Cet engagement
            a conduit à l'obtention d'un diplôme de développeur web chez
            OpenClassrooms. Aujourd'hui, chaque projet est une nouvelle
            opportunité d'apprendre, de grandir et de contribuer à des
            expériences en ligne mémorables et efficaces.
          </p>
        </div>
      </div>
      <div className="formations-container flex flex-wrap gap-x-10 gap-y-8 my-12 p-1 justify-center">
        {logos.map((logo, index) => (
          <div className={`${logo.name}-container w-28 aspect-video`} key={`${index}-${logo.name}`} title={logo.name}>
            <img src={logo.icon_img} className="w-full h-full object-contain " alt="icone" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
