import React from 'react';

export default function Search(props) {
  return (
    <input
      data-testid="search-input"
      className="search-input"
      type="text"
      onChange={(event) => props.selectFilter(event)}
    />
  );
}
