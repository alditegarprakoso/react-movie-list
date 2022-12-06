import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Movies.css";

const img_url = "https://image.tmdb.org/t/p/original/";

function Movies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.url);
      setMovies(request.data.results);
    }
    fetchData();
  }, [props.url]);

  console.log(movies);

  return (
    <div className="row">
      <h2 className="title_movie">{props.title}</h2>
      <div className="row_poster">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={img_url + movie.poster_path}
              alt={movie.title}
              className="img-poster"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
