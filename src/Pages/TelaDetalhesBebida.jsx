import React from 'react';

const searchCockTailById = (id) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) =>
    response
      .json()
      .then((drink) => drink.drinks)
      .catch((error) => error),
  )
);

export default function TelaDetalhesBebida() {
  return (
    <div>
      .
    </div>
  );
}
