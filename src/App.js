import "./App.css";
import Movies from "./components/Movies";
import api from "./api";

function App() {
  return (
    <div className="App">
      <Movies title="Netflix Originals" url={api.fetchNetflixOriginals} />
      <Movies title="Trending Now" url={api.fetchTrending} />
      <Movies title="Top Rated" url={api.fetchTopRated} />
      <Movies title="Action Movies" url={api.fetchActionMovie} />
      <Movies title="Comedy Movies" url={api.fetchComedyMovies} />
      <Movies title="Romance Movies" url={api.fetchRomanceMovies} />
      {/* <Movies title="Documentaries" url={api.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
