import React from 'react';
import { Card } from 'react-bootstrap';

const CardIngredient = (props) => {
  const { title, image } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardIngredient;
