import Carousel from 'react-spring-3d-carousel';
import React, { useState, useEffect } from 'react';
import { config } from 'react-spring';
import PropTypes from 'prop-types';

export default function CarouselComp(props) {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrowsState, setShowArrowsState] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  const {
    cards, offset, showArrows, width, height, margin,
  } = props;

  const table = cards.map((element, index) => (
    { ...element, onClick: () => setGoToSlide(index) }));

  const [cardsState] = useState(table);

  useEffect(() => {
    setOffsetRadius(offset);
    setShowArrowsState(showArrows);
  }, [offset, showArrowsState]);

  return (
    <div
      style={{ width, height, margin }}
    >
      <Carousel
        slides={cardsState}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrowsState}
        animationConfig={config.slow}
      />
    </div>
  );
}

CarouselComp.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }),
  ).isRequired,
  offset: PropTypes.number.isRequired,
  showArrows: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
};
