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
    <section id="about-me" className="p-1 my-10 lg:grid lg:grid-cols-2 lg:gap-20 lg:my-20 ">
      {/* Image container */}
      <div className="image-container h-56 relative lg:h-full">
        <img
          src={code_image}
          className="h-full w-full object-cover rounded-xl"
          alt="a propos de moi"
        />
        <div className="badge absolute h-32 aspect-square shadow-lg shadow-indigo-100 rounded-full -bottom-10 -right-10 hidden lg:block">
          <img
            src={badge}
            className=" object-cover h-full w-full rounded-full"
            alt="badge de développeur"
          />
        </div>
      </div>
      {/* Content container */}
      <div className="text-container lg:flex lg:flex-col lg:justify-between">

        <SectionTitles className="lg:text-left lg:my-0 lg:py-0" title="Deux mots sur moi!">
          Un passionné du développement web, basé à Paris, France 📍
        </SectionTitles>

        <div className="about-me-description text-sm text-gray-600 text-center flex flex-col gap-3 px-3 lg:gap-1 lg:text-left lg:px-0">
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

      <div className="formations-container flex flex-wrap gap-x-10 gap-y-8 my-12 p-1 justify-center lg:col-span-full lg:justify-evenly">
        {logos.map((logo, index) => (
          <div className={`${logo.name}-container w-28 aspect-video lg:w-36`} key={`${index}-${logo.name}`} title={logo.name}>
            <img src={logo.icon_img} className="w-full h-full object-contain " alt="icone" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutMe;
