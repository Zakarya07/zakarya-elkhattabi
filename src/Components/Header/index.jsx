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
    <header className="bg-green-500">
      <nav className="navbar-container fixed p-5 flex justify-between w-full">
        {/* Logo container */}
        <div className="logo-container">
          <h2 className="text-xl font-bold">Zakarya.dev</h2>
        </div>

        <ul className="menu-links hidden lg:flex ">
          <li>
            <a href="#header">Accueil</a>
          </li>
          <li>
            <a href="#about-section">À propos</a>
          </li>
          <li>
            <a href="#portfolio-section">Projets</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>

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
        } bg-white fixed z-10 h-screen w-full text-2xl`}
      >
        {/* Close button  */}
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
            <a className="inline-block p-3" href="#header">Accueil</a>
          </li>
          <li>
            <a className="inline-block p-3" href="#about-section">À propos</a>
          </li>
          <li>
            <a className="inline-block p-3" href="#portfolio-section">Projets</a>
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
