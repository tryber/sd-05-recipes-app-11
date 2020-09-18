import React from 'react';
import propTypes from 'prop-types';

export default function Tags(props) {
  const { index, tagName } = props;
  return (
    <p data-testid={`${index}-${tagName}-horizontal-tag`} className="tag">
      {tagName}
    </p>
  );
}

Tags.propTypes = {
  index: propTypes.number.isRequired,
  tagName: propTypes.string.isRequired,
};
