import React from 'react';

export default function Card(props) {
  const { title, index, source } = props;
  return (
    <div>
      <img src={source} alt="" data-testid={`${index}-recomendation-card`} style={{width:'100%'}}/>
      <p data-testid={`${index}-recomendation-title`}>{title}</p>
    </div>
  );
}
