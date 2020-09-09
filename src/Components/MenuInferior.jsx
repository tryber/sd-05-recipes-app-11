import React from 'react';

export default function MenuInferior() {
  return (
    <footer data-testid="footer">
      <button
        data-testid="food-bottom-btn" type="button"
      >
        <img src="src/images/mealIcon"alt="food" />
      </button>
      <button
        data-testid="explore-bottom-btn" type="button"
      >
        <img src="src/images/exploreIcon" alt="explore" />
      </button>
      <button
        data-testid="drinks-bottom-btn" type="button"
      >
        <img src="src/images/drinkIcon" alt="drinks" />
      </button>
    </footer>
  );
}
