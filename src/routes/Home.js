import { useState, useEffect } from "react";
import Movie from "../Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=17c33e4d48fe55d74830ef1412fa468f"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movieListResult.movieList);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>My Movie</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        movies.map((movie) => (
          <Movie
            movieId={movie.movieCd}
            movieNm={movie.movieNm}
            companys={movie.companys}
          />
        ))
      )}
    </div>
  );
}

export default Home;
