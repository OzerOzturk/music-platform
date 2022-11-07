import React from 'react';
import './AlbumTrack.css';
import PropTypes from 'prop-types';

const AlbumTrack = ({ name, playCount, image, listeners }) => {
  const artistImg = image[3]['#text'];
  return (
    <main className="albumtrack__card">
      <div className="albumtrack__card__left">
        <img src={artistImg} alt="image of card" className="albumtrack__card__left__image" />
        <h2 className="albumtrack__card__left__title">{name}</h2>
      </div>
      <div className="albumtrack__card__right">
        <p className="albumtrack__card__right__play">{playCount} play</p>
        {listeners ? (
          <p className="albumtrack__card__right__listen"> {listeners} listeners</p>
        ) : null}
      </div>
    </main>
  );
};

export default AlbumTrack;

AlbumTrack.propTypes = {
  name: PropTypes.any,
  playCount: PropTypes.any,
  image: PropTypes.any,
  listeners: PropTypes.any
  /* artist: PropTypes.name */
};
