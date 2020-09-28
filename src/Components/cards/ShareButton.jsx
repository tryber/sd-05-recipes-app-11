import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

// HA https://www.codegrepper.com/code-examples/basic/copy+string+to+clipboard+javascript
export function CopyURL(address) {
  window.navigator.clipboard.writeText(address);
}

function localizaAddress() {
  return window.location.origin;
}

export default function ShareOption(props) {
  const { index, copy, setCopy } = props;

  return (
    <Link
      onClick={() => {
        setCopy(true);
        CopyURL(`${localizaAddress()}/${props.item.type}s/${props.item.id}`);
      }}
    >
      <img className="iconCard" src={shareIcon} alt="Share Icon" data-testid={`${index}-horizontal-share-btn`} />
      {copy ? <span>Link copiado!</span> : null}
    </Link>
  );
}

ShareOption.propTypes = {
  item: propTypes.instanceOf(Object).isRequired,
  index: propTypes.number.isRequired,
  copy: propTypes.string.isRequired,
  setCopy: propTypes.func.isRequired,
};
