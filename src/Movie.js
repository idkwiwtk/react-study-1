import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movieId, movieNm, companys }) {
  return (
    <div key={movieId}>
      <h2>
        <Link to={`/detail/${movieId}`}>Title: {movieNm}</Link>
      </h2>
      {companys.length > 0 ? (
        <>
          <h3>Company</h3>
          <ul>
            {companys.map((company) => (
              <li key={company.companyCd}>{company.companyNm}</li>
            ))}
          </ul>
        </>
      ) : null}
      <hr />
    </div>
  );
}

Movie.propTypes = {
  movieId: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  companys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
