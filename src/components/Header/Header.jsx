import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { BsPlayCircle } from 'react-icons/bs';

const Header = ({ changeTheme }) => {
  return (
    <header data-testid="valid-header" className="header">
      <section className="header__main">
        <BsPlayCircle size={40} />
        <h1 className="header__main__title">Music Platform</h1>
      </section>
      <button type="button" className="header__theme__button" onClick={changeTheme}>
        Theme Changer
      </button>
    </header>
  );
};

export default Header;

Header.propTypes = {
  changeTheme: PropTypes.node.isRequired
};
