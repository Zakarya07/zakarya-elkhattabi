import Kasa from "../assets/images/Projects/Kasa.jpg";
import MVG from "../assets/images/Projects/MonVieuxGrimoire.jpg";
import PR from "../assets/images/Projects/Parti-radical.jpg";
import githubIcon from "../assets/images/icons/github-white.png"
import siteIcon from "../assets/images/icons/open-external-link-icon 2.png";

const projects = [
  {
    title: "Parti radical",
    description:
    "Réalisation d'un site institutionnel avec un thème personnalisé, impliquant le développement de fonctionnalités spécifiques à l'aide de Custom Post Types (CPT) et Advanced Custom Fields (ACF). Les principales problématiques rencontrées incluaient la nécessité d'une adaptation rapide aux changements et les défis inhérents à la mise en œuvre du premier site utilisant un thème personnalisé.",
    technologies: [
      "WordPress",
      "jQuery",
      "PHP",
      "mySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    imageUrl: PR,
    websiteUrl: [{ url: "https://parti-radical.fr", icon: siteIcon }],
},
{
    title: "Mon vieux grimoire",
    description:
    "Réalisation d'une API CRUD dédiée à la gestion sécurisée d'une bibliothèque de livres pour une application moderne. Les principales problématiques rencontrées ont été la modélisation complexe des données liées aux livres, la gestion des opérations CRUD et la mise en place d'un système d'authentification robuste avec gestion de tokens pour assurer la sécurité des données sensibles.",
    technologies: [
        "NodeJs",
        "ExpressJs",
        "MongoDb",
        "JWT",
        "Multer",
        "Sharp",
        "JSON",
    ],
    imageUrl: MVG,
    githubUrl: [
        {
            url: "https://github.com/Zakarya07/OPC_Mon_Vieux_Grimoire",
            icon: githubIcon,
        },
    ],
  },
  {
    title: "Kasa",
    description:
      "Développement d'une plateforme web moderne pour répertorier des appartements, utilisant SASS pour un style CSS moderne. Les principaux défis ont été la mise en place du routage pour naviguer entre les différentes pages, l'utilisation de props pour gérer les données et l'adoption de la syntaxe JSX pour la création des composants.",
    technologies: ["React", "SCSS", "JSON"],
    imageUrl: Kasa,
    githubUrl: [
      {
        url: "https://github.com/Zakarya07/Openclassrooms_Kasa_React",
        icon: githubIcon,
      },
    ],
  },
];

export default projects;
