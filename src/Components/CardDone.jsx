import React, { useState } from 'react';
import propTypes from 'prop-types';
import Tags from './tagDone';
import HorizontalName from './cards/HorizontalName';
import ShareOption from './cards/ShareButton';

// HA https://www.codegrepper.com/code-examples/basic/copy+string+to+clipboard+javascript
export function CopyURL(address) {
  window.navigator.clipboard.writeText(address);
}
export default function CardDone(props) {
  const { id, type, area, category, alcoholicOrNot, doneDate, tags } = props.item;
  const { index, item } = props;
  const [copy, setCopy] = useState(false);
  const isMeal = type === 'comida';
  return (
    <div>
      <ImageTop item={item} index={index} />
      <div>
        <div>
          {isMeal ? (
            <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>
          ) : (
            <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
          )}
          <ShareOption index={index} copy={copy} item={item} setCopy={setCopy} />
          <HorizontalName item={item} index={index} />
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
