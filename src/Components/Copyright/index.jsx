import Github from "../../assets/images/icons/github-icon1.png";
import LinkedIn from "../../assets/images/icons/linkedin-square-icon1.png";
import Socials from "../Socials";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright-container bg-black text-white mt-12">
      <div className="wrapper py-5 flex flex-col items-center lg:flex-row lg:justify-around lg:items-center lg:h-32">
      {/* Copyright name */}
      <div className="copyright-text font-bold">
        <p>
          Copyright &copy; <span className="copyright-year">{year}</span> - Tous droits réservés
        </p>
      </div>
      {/* Socials */}
      <div className="copyright-socials flex flex-wrap gap-6 mt-5 lg:mt-0">
        <Socials icon={LinkedIn} link="https://www.linkedin.com/in/zakarya-elkhattabi/"/>
        <Socials icon={Github} link="https://github.com/Zakarya07"/>
      </div>
      </div>
    </div>
  );
};

export default Copyright;