import React, { useState, useEffect } from 'react';
import { searchCockTailById } from '../Services/ApiBebida';
import ReactPlayer from 'react-player';

export default function TelaDetalhesBebida(props) {
  const [details, setDetails] = useState(undefined);
  useEffect(() => {
    searchCockTailById(props.match.params.id_da_receita).then((resposta) => {
      console.log(resposta[0]);
      setDetails(resposta[0]);
    });
  }, []);
  if (!details) {
    return <h1>Carregando</h1>;
  }
  const ingredientes = [];
  console.log(details);
  for (let i = 1; i <= 20; i++) {
    if (details[`strIngredient${i}`] !== null && details[`strIngredient${i}`] !== '')
      ingredientes.push({
        ingrediente: details[`strIngredient${i}`],
        quantidade: details[`strMeasure${i}`],
      });
  }
  return (
    <div>
      <h1>{details.strDrink}</h1>
      <img src={details.strDrinkThumb} />
      <h5>{details.strCategory}</h5>
      <h3>Ingredientes</h3>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li>
            {ingrediente.quantidade} - {ingrediente.ingrediente}
          </li>
        ))}
      </ul>
      <h3>Modo de Preparo:</h3>
      <p>{details.strInstructions}</p>
      <h3>Vídeo</h3>
      <ReactPlayer url={details.strYoutube} />
    </div>
  );
}
