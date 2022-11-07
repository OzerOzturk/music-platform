import { Routes, Route } from 'react-router-dom';
import './App.css';
import ArtistDetail from './components/ArtistDetail/ArtistDetail';
import Header from './components/Header/Header';
import TopArtistsList from './components/TopArtistsList/TopArtistsList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TopArtistsList />} />
        <Route path="/detail/:mbid" element={<ArtistDetail />} />
      </Routes>
    </div>
  );
}

export default App;
