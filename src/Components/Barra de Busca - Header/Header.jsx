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
      <Link to="/perfil">
        <img src={userLogo} alt="Imagem User" className="Top-Btn" data-testid="profile-top-btn" />
      </Link>
      <div className="Bar-Busca-Header-text" data-testid="page-title">
        <span>{title}</span>
      </div>
      {!showTop ? (
        <div
          onClick={() => setShowSearch(!showSearch)}
        >
          <img
            src={searchLogo}
            alt="Search Logo"
            data-testid="search-top-btn"
            className="Top-Btn"
          />
        </div>
      ) : null}
    </div>
  );
}

HeaderBusca.propTypes = {
  title: PropTypes.string.isRequired,
};
