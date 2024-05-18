import PropTypes from "prop-types";
import "./index.scss";

const Socials = ({ icon, link }) => {
  return (
    <>
      <div className="socials aspect-square h-8" >
        <a href={link} target="_blank">
          <img src={icon} alt="icon" />
        </a>
      </div>
    </>
  );
};

export default Socials;

Socials.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Socials.defaultProps = {
  icon: "icon_not_specified",
};
