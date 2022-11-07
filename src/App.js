import './App.css';
import ArtistDetail from './components/ArtistDetail/ArtistDetail';
import Header from './components/Header/Header';
import TopArtistsList from './components/TopArtistsList/TopArtistsList';

function App() {
  return (
    <div className="App">
      <Header />
      <TopArtistsList />
      <ArtistDetail />
    </div>
  );
}

export default App;
