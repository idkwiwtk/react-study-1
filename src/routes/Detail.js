import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getMovieInfo = async (id) => {
    const response = await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=17c33e4d48fe55d74830ef1412fa468f&movieCd=${id}`
    );
    const data = await response.json();
    setMovie(data.movieInfoResult);
    setLoading(false);
  };

  useEffect(() => {
    getMovieInfo(id);
  }, []);

  return (
    <>
      <h3>Detail</h3>
      {loading ? <p>Loading...</p> : <div>hello</div>}
    </>
  );
}

export default Detail;
