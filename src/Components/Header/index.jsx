import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import "./index.scss";
import { useState } from "react";

const Header = () => {
  const [isClosed, setClosed] = useState(true);

  function openMenuMobile() {
    setClosed(false);
  }

  function closeMenuMobile() {
    setClosed(true);
  }

  return (
    <header className="bg-white fixed z-10 top-0 w-full">
      <nav className="navbar-container py-5 px-10 flex justify-between lg:py-8">
        {/* Logo container */}
        <div className="logo-container">
          <h2 className="text-xl font-extrabold">Zakarya.dev</h2>
        </div>

        <ul className="menu-links hidden lg:flex lg:gap-x-5 font-semibold">
          <li>
            <a href="#profile">Accueil</a>
          </li>
          <li>
            <a href="#about-me">À propos</a>
          </li>
          <li>
            <a href="#portfolio-projects-container">Projets</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
    {/* Open menu button */}
        <div
          className="open-menu-mobile text-2xl lg:hidden"
          onClick={() => {
            openMenuMobile();
          }}
        >
          <FaBars />
        </div>
      </nav>

      {/* -------------- Menu container */}
      <div
        className={`${
          isClosed ? "menu-mobile" : "menu-mobile-active"
        } bg-white fixed top-0 z-10 h-screen w-full text-2xl`}
      >
        {/* Close menu button  */}
        <div
          className="close-menu-mobile flex justify-end p-5"
          onClick={() => {
            closeMenuMobile();
          }}
        >
          <GrClose />
        </div>

        {/* Links */}
        <ul className="flex flex-col items-center font-semibold justify-evenly py-5 gap-y-16 mt-12"
          onClick={(e) => {
            if (e.target.tagName === "A") {
              closeMenuMobile();
            }
            
          }}
        >
          <li>
            <a className="inline-block p-3" href="#profile">Accueil</a>
          </li>
          <li>
            <a className="inline-block p-3" href="#about-me">À propos</a>
          </li>
          <li>
            <a className="inline-block p-3" href="#portfolio-projects-container">Projets</a>
          </li>
          <li>
            <a className="inline-block p-3" href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
