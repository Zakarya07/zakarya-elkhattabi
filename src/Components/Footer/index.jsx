import ContactInfo from "../ContactInfo";
import Copyright from "../Copyright";
import SectionTitles from "../SectionTitles";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container wrapper py-5">
        {/* Title of section */}
        <SectionTitles title="Contact">
          Ne soit pas timide! Contacte moi! 👇
        </SectionTitles>

        {/* Contact info */}
        <ContactInfo />
      </div>

      {/* Copyright*/}
      <Copyright />
    </footer>
  );
};

export default Footer;
