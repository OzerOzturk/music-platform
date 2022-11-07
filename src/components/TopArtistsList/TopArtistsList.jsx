import React, { useEffect, useState } from 'react';
import './TopArtistsList.css';
import Artist from '../Artist/Artist';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';

const TopArtistsList = () => {
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json&page=${page}`
      );
      //console.log(response.data.artists.artist);
      setArtists([...artists, ...response.data.artists.artist]);
      setPage(page + 1);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="topArtists container">
      <h1 className="topArtists__title">Top Artists List</h1>
      <InfiniteScroll
        dataLength={artists.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {artists && artists.map((artist) => <Artist artist={artist} key={uuid()} />)}
      </InfiniteScroll>
    </main>
  );
};

export default TopArtistsList;
