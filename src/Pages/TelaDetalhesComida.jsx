import React, { useEffect, useState } from 'react';
import { searchMealById } from '../Services/ApiComida';
import ReactPlayer from 'react-player';

export default function TelaDetalhesComida(props) {
  const [details, setDetails] = useState(undefined);
  useEffect(() => {
    searchMealById(props.match.params.id_da_receita).then((resposta) => {
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
      <h1>{details.strMeal}</h1>
      <img src={details.strMealThumb} />
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

/* Essa tela deve conter uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações. 
Obs.: O vídeo do youtube só deve estar disponível para receitas de comida, já que não é retornado pela API de bebidas. */
