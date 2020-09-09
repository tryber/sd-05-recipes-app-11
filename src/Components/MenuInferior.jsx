import React from 'react'

export default function MenuInferior() {
  return (
    <footer data-testid="footer">
      <button data-testid="food-bottom-btn"><img src="src/images/mealIcon" /></button>
      <button data-testid="explore-bottom-btn"><img src="src/images/exploreIcon" /></button>
      <button data-testid="drinks-bottom-btn"><img src="src/images/drinkIcon" /></button>
    </footer>
  )
}
