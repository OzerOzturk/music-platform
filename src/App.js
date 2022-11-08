import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ArtistDetail from './components/ArtistDetail/ArtistDetail';
import Header from './components/Header/Header';
import TopArtistsList from './components/TopArtistsList/TopArtistsList';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [{ theme }, changeTheme] = useContext(ThemeContext);

  return (
    <div
      data-testid="app-container"
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Header changeTheme={changeTheme} />
      <Routes>
        <Route path="/" element={<TopArtistsList />} />
        <Route path="/detail/:mbid" element={<ArtistDetail />} />
      </Routes>
    </div>
  );
}

export default App;
