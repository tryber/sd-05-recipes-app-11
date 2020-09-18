import React from 'react';
import { Link } from 'react-router-dom';

export default function HorizontalName(props) {
  const { id, type, name } = props.item;
  const { index } = props;
  return (
    <Link to={`/${type}s/${id}`}>
      <p data-testid={`${index}-horizontal-name`}>{name}</p>
    </Link>
  );
}
