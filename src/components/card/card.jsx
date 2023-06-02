import PropTypes from 'prop-types';
import React from 'react';
import './card.css';

function Card({
  projectName, image, alt, description,
}) {
  return (
    <div className="card">
      <section className="card-container">
        <img src={image} alt={alt} className="card-image" />
        <h1 className="card-title">
          {projectName}
        </h1>
      </section>
      <div className="card-description">
        <p>
          {description}
        </p>
        <div className="card-buttons">
          <button type="button">
            REPO
          </button>
          <button type="button">
            SITE
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default Card;
