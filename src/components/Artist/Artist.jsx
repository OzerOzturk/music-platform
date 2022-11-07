import React from 'react';
import PropTypes from 'prop-types';
import './Artist.css';
import { Link } from 'react-router-dom';

const Artist = ({ artist }) => {
  return (
    <div className="artistCard">
      <section className="artistCard__info">
        <img
          src={artist.image[1]['#text']}
          alt="Image of Artist"
          className="artistCard__info__image"
        />
        <Link to={`/detail/${artist.mbid}`}>
          <p className="artistCard__info__name">{artist.name} </p>
        </Link>
      </section>
      <section className="artistCard__statistics">
        <p>Listeners: {artist.listeners}</p>
        <p>Playcount: {artist.playcount}</p>
      </section>
    </div>
  );
};

export default Artist;

Artist.propTypes = {
  artist: PropTypes.any
};
