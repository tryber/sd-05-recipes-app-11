import React, { useContext } from 'react';
import ReceitasContext from '../../Context/ReceitasContext';

export default function ButtonBuscar() {
  const { setchangeFilter, changeFilter } = useContext(ReceitasContext);

  return (
    <div data-testid="exec-search-btn">
      <button className="Button-buscar" onClick={() => setchangeFilter(changeFilter + 1)}>
        Buscar
      </button>
    </div>
  );
}
