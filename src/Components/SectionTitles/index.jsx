import PropTypes from 'prop-types';

const SectionTitles = ({title, children}) => {
  return (
    <div className="section-titles-container text-center py-3 my-5">
      <h2 className="section-title text-sky-600 uppercase tracking-wider text-xl py-3">{title}</h2>
      <h3 className="section-subtitle font-bold text-xl">{children}</h3>
    </div>
  );
};


SectionTitles.propTypes = {
    children: PropTypes.string.isRequired,
}

export default SectionTitles;

