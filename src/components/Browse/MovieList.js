import { useState, useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import MovieDetail from './MovieDetail';

import styles from './MovieList.module.css';

// ==================================================

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});

  const { errorMessage, sendRequest } = useHttp();

  // Function xem thông tin chi tiết của movie khi bấm vào img
  const showMovieDetailHandler = (movie) => {
    if (showMovieDetail) {
      if (movieDetail.id !== movie.id) {
        setMovieDetail(movie);
      } else {
        setShowMovieDetail(false);
      }
    } else {
      setMovieDetail(movie);
      setShowMovieDetail(true);
    }
  };

  useEffect(() => {
    sendRequest({ url: props.api }).then((resData) =>
      setMovies(resData?.results)
    );
  }, [props.api, sendRequest]);

  //Render lỗi nếu khi fetch data xảy ra vấn đề
  if (errorMessage) {
    return (
      <div className={styles['movie-list--container']}>
        <p className='error-message'>{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className={styles['movie-list--container']}>
      <p>{props.type}</p>

      <div className={`img-container ${styles['movie-img--container']}`}>
        {/* Render các movie img */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.backdrop_path}
            alt={movie.title}
            onClick={showMovieDetailHandler.bind(null, movie)}
          />
        ))}
      </div>

      {/* Render modal hiện thông tin movie */}
      {showMovieDetail && (
        <MovieDetail
          movie={movieDetail}
          onClose={() => setShowMovieDetail(false)}
        />
      )}
    </div>
  );
};

export default MovieList;
