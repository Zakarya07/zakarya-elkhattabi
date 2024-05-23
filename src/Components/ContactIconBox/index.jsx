import React from 'react'; 
import "./index.scss";

import PropTypes from 'prop-types';

const ContactIconBox = ({ title, value, children }) => {
    // Cloner le composant enfant avec des propriétés supplémentaires
    const childrenWithProps = React.Children.map(children, child => {
        // Vérifier si le composant enfant existe et est valide
        if (React.isValidElement(child)) {
            // Cloner l'enfant avec la classe Tailwind spécifiée
            return React.cloneElement(child, { className: "contact-icons-primary lg:text-black" });
        }
        return child;
    });

    return (
        <div className="contact-info-box flex flex-col items-center gap-5 lg:flex-row">
            <div className='icon-container text-4xl lg:text-5xl'>{childrenWithProps}</div>
            <div className="contact-info text-center lg:text-left">
                <h4 className="info-title text-md font-bold lg:text-xl">{title}</h4>
                <p className="info-value text-gray-500 text-xs lg:text-sm lg:mt-2">{value}</p>
            </div>
        </div>
    );
}

ContactIconBox.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default ContactIconBox;
