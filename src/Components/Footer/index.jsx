import ContactInfo from "../ContactInfo";
import Copyright from "../Copyright";
import SectionTitles from "../SectionTitles";

const Footer = () => {
  return (
    <footer className="mt-10 lg:mt-48" id="footer">
      <div className="footer-container wrapper py-5 lg:my-32">
        {/* Title of section */}
        <SectionTitles title="Contact" className="lg:text-left">
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
