import React from 'react';

export default function Tags(props) {
  const {index, tagName} = props
  return (
    <div>
      <p data-testid={`${index}-${tagName}-horizontal-tag`}>{tagName}</p>
    </div>
  );
}