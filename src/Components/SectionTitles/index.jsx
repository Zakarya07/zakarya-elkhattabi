import PropTypes from 'prop-types';
import "./index.scss";

const SectionTitles = ({className,title, children}) => {
  return (
    <div className={`section-titles-container text-center py-3 my-5 ${className}`}>
      <h2 className="section-title uppercase tracking-wider text-lg py-3">{title}</h2>
      <h3 className="section-subtitle font-bold text-xl">{children}</h3>
    </div>
  );
};


SectionTitles.propTypes = {
    children: PropTypes.string.isRequired,
}

export default SectionTitles;

