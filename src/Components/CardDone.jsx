import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import Tags from './tagDone';

// HA https://www.codegrepper.com/code-examples/basic/copy+string+to+clipboard+javascript
export function CopyURL(address) {
  window.navigator.clipboard.writeText(address);
}
function localizaAddress() {
  return window.location.origin;
}
export default function CardDone(props) {
  const { id, type, area, category, alcoholicOrNot, name, image, doneDate, tags } = props.item;
  const { index } = props;
  const [copy, setCopy] = useState(false);
  const isMeal = type === 'comida';
  return (
    <div>
      <Link to={`/${type}s/${id}`}>
        <img
          className="horizontal-image"
          src={image}
          alt={name}
          data-testid={`${index}-horizontal-image`}
        />
      </Link>
      <div>
        <div>
          {isMeal ? (
            <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>
          ) : (
            <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
          )}
          <Link
            onClick={() => {
              setCopy(true);
              CopyURL(`${localizaAddress()}/${type}s/${id}`);
            }}
          >
            <img src={shareIcon} alt="Share Icon" data-testid={`${index}-horizontal-share-btn`} />
            {copy ? <span>Link copiado!</span> : null}
          </Link>
          <Link to={`/${type}s/${id}`}>
            <p data-testid={`${index}-horizontal-name`}>{name}</p>
          </Link>
        </div>
        <span>Feita em: </span>{' '}
        <span data-testid={`${index}-horizontal-done-date`}>{doneDate}</span>
        {isMeal ? tags.map((tagName) => <Tags tagName={tagName} index={index} />) : null}
      </div>
    </div>
  );
}

CardDone.propTypes = {
  index: propTypes.number.isRequired,
  item: propTypes.instanceOf(Object).isRequired,
};
