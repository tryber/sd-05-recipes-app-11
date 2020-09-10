import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

export default function MenuInferior() {
  return (
    <footer data-testid="footer">
      <Link to="/comidas">
        <img
          className="foodBottom"
          data-testid="food-bottom-btn"
          alt="food"
          src={mealIcon}
        />
      </Link>
      <Link to="/explorar">
        <img
          className="exploreBottom"
          data-testid="explore-bottom-btn"
          alt="explore"
          src={exploreIcon}
        />
      </Link>
      <Link to="/bebidas">
        <img
          className="drinkBottom"
          data-testid="drinks-bottom-btn"
          alt="drink"
          src={drinkIcon}
        />
      </Link>
    </footer>
  );
}
