import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import userLogo from '../../images/profileIcon.svg';
import searchLogo from '../../images/searchIcon.svg';
import '../../CSS/HeaderBusca.css';

export default function HeaderBusca(props) {
  const { showSearch, setShowSearch, title, showTop } = props;
  return (
    <div className="Bar-Busca-Header">
      <Link to="/perfil" className="Top-Btn">
        <img src={userLogo} alt="Imagem User" data-testid="profile-top-btn" />
      </Link>
      <div data-testid="page-title" className="Bar-Busca-Header-text">
        <span>{title}</span>
      </div>
      {!showTop ? (
        <Link onClick={() => setShowSearch(!showSearch)} className="Top-Btn">
          <img
            src={searchLogo}
            alt="Search Logo"
            data-testid="search-top-btn"
          />
        </Link>
      ) : null}
    </div>
  );
}

HeaderBusca.propTypes = {
  title: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
  setShowSearch: PropTypes.func.isRequired,
  showTop: PropTypes.bool.isRequired,
};
