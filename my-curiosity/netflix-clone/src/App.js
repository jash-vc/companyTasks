import './App.css';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTreanding}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies}/>
      
    </div>
  );
}

export default App;
