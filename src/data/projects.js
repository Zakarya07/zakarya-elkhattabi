import Kasa from "../assets/images/Projects/Kasa.jpg";
import MVG from "../assets/images/Projects/MonVieuxGrimoire.jpg";
import PR from "../assets/images/Projects/Parti-radical.jpg";
import githubIcon from "../assets/images/icons/github-white.png"
import siteIcon from "../assets/images/icons/open-external-link-icon 2.png";

const projects = [
  {
    title: "Parti radical",
    description:
      "Application de réseau social pour connecter les gens. Ut quis quam eu lorem ullamcorper eleifend.",
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
    "Application de suivi des prix des cryptomonnaies. Vestibulum sed fermentum libero. Aliquam erat volutpat.",
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
      "Plateforme de vente en ligne pour divers produits. Vivamus et nisi sed odio fermentum ullamcorper.",
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
