import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ArtistDetail.css';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import AlbumTrack from '../AlbumTrack/AlbumTrack';

const ArtistDetail = () => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

  const { mbid } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=${process.env.REACT_APP_API_KEY}&mbid=${mbid}&format=json`
        );
        //console.log(response.data.topalbums.album);
        const albumsList = response.data.topalbums.album;
        if (albumsList) {
          const showAlbum = albumsList.map((item) => {
            const { name, playcount: playCount, image } = item;
            return { name, playCount, image };
          });
          setAlbums(showAlbum);
        } else {
          setAlbums(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbum();
  }, []);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=${process.env.REACT_APP_API_KEY}&mbid=${mbid}&format=json`
        );
        //console.log(response.data.toptracks.track);
        const trackList = response.data.toptracks.track;
        if (trackList) {
          const showTrack = trackList.map((item) => {
            const { name, playcount: playCount, listeners, image } = item;
            return { name, playCount, listeners, image };
          });
          setTracks(showTrack);
        } else {
          setAlbums(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrack();
  }, []);

  return (
    <div className="artistdetail container">
      <section className="artistdetail__section">
        <h2 className="artistdetail__subsection__title">Top Albums</h2>
        <div className="artistdetail__subsection__card">
          {albums.map((album) => {
            return <AlbumTrack key={uuid()} {...album} />;
          })}
        </div>
      </section>
      <section className="artistdetail__section">
        <h2 className="artistdetail__subsection__title">Top Tracks</h2>
        <div className="rtistdetail__subsection__card">
          {tracks.map((track) => {
            return <AlbumTrack key={uuid()} {...track} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ArtistDetail;
