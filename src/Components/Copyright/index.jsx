import Github from "../../assets/images/github-icon1.png";
import LinkedIn from "../../assets/images/linkedin-square-icon1.png";
import Socials from "../Socials";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright-container bg-black text-white mt-12">
      <div className="wrapper py-5 flex flex-col items-center lg:flex-row lg:justify-around lg:items-center lg:h-32">
      {/* Copyright name */}
      <div className="copyright-text font-bold">
        <p>
          Copyright &copy; <span className="copyright-year">{year}</span>. All
          rights reserved
        </p>
      </div>
      {/* Socials */}
      <div className="copyright-socials flex flex-wrap gap-6 mt-5 lg:mt-0">
        <Socials icon={LinkedIn} link="https://www.linkedin.com/in/zakarya-elkhattabi/"/>
        <Socials icon={Github} link="https://www.linkedin.com/in/zakarya-elkhattabi/"/>
      </div>
      </div>
    </div>
  );
};

export default Copyright;