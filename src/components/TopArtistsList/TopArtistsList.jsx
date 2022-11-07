import React, { useEffect, useState } from 'react';
import './TopArtistsList.css';
import Artist from '../Artist/Artist';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const TopArtistsList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`
        );
        //console.log(response.data.artists.artist);
        setArtists(response.data.artists.artist);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="topArtists container">
      <h1 className="topArtists__title">Top Artists List</h1>
      {artists && artists.map((artist) => <Artist artist={artist} key={uuid()} />)}
    </main>
  );
};

export default TopArtistsList;
