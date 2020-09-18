import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import HorizontalName from './cards/HorizontalName';
import ShareOption from './cards/ShareButton';

// HA https://www.codegrepper.com/code-examples/basic/copy+string+to+clipboard+javascript
export function CopyURL(address) {
  window.navigator.clipboard.writeText(address);
}

function localizaAddress() {
  return window.location.origin;
}

export function desFavorite(id) {
  let type = 'Drink';
  let favorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
  favorite = favorite.filter((el) => el.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favorite));
}

export default function CardFavorite(props) {
  const { id, type, area, category, alcoholicOrNot, name, image, doneDate, tags } = props.item;
  const { index, item } = props;
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
          <ShareOption index={index} copy={copy} item={item} setCopy={setCopy} />
         {/*  <Link
            onClick={() => {
              setCopy(true);
              CopyURL(`${localizaAddress()}/${type}s/${id}`);
            }}
          >
            <img src={shareIcon} alt="Share Icon" data-testid={`${index}-horizontal-share-btn`} />
            {copy ? <span>Link copiado!</span> : null}
          </Link> */}
          <br/>
          <br/>
          <Link onClick={() => desFavorite(id)}>
            <img
              src={blackHeart}
              alt="like icon"
              className="icon"
              data-testid={`${index}-horizontal-favorite-btn`}
            />
          </Link>
          <HorizontalName item={item} index={index} />
        </div>
      </div>
    </div>
  );
}

CardFavorite.propTypes = {
  index: propTypes.number.isRequired,
  item: propTypes.instanceOf(Object).isRequired,
};
