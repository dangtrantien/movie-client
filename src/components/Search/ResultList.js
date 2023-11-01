import { useState, useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import MovieDetail from '../Browse/MovieDetail';

import styles from './ResultList.module.css';

// ==================================================

const ResultList = (props) => {
  const [movies, setMovies] = useState([]);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState();

  const { errorMessage, sendRequest } = useHttp();

  // Xem thông tin chi tiết của movie khi bấm vào img
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

  const { keyword, genre, mediaType, language, year } = props.searchValue;

  useEffect(() => {
    // Đóng modal khi bấm nút reset
    if (props.closeModal) {
      setShowMovieDetail(false);
    }

    if (keyword) {
      const requestAPI =
        'https://movie-server-dangtrantien.vercel.app/api/movies/search?page=&token=8qlOkxz4wq';

      sendRequest({
        url: requestAPI,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          keyword,
          genre,
          mediaType,
          language,
          year,
        },
      }).then((resData) => setMovies(resData?.results || []));
    } else {
      setMovies([]);
    }
  }, [
    props.closeModal,
    keyword,
    genre,
    mediaType,
    language,
    year,
    sendRequest,
  ]);

  return (
    <div className={styles['result-list__container']}>
      <p>Search Result</p>

      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <div className={`img-container ${styles['list-img']}`}>
        {!errorMessage &&
          movies.length !== 0 &&
          movies.map((movie) => (
            <img
              key={movie.id}
              src={movie.poster_path}
              alt={movie.title}
              onClick={showMovieDetailHandler.bind(null, movie)}
            />
          ))}
      </div>

      {showMovieDetail && (
        <MovieDetail
          movie={movieDetail}
          onClose={() => setShowMovieDetail(false)}
        />
      )}
    </div>
  );
};

export default ResultList;
