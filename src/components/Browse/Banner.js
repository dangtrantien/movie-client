import { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';

import styles from './Banner.module.css';

// ==================================================

const Banner = (props) => {
  const [movie, setMovie] = useState({});
  const { errorMessage, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: props.api }).then((resData) => {
      const movieData =
        resData.results[Math.floor(Math.random() * resData.results.length - 1)];

      setMovie(movieData);
    });
  }, [props.api, sendRequest]);

  //Render lỗi nếu khi fetch data xảy ra vấn đề
  if (errorMessage) {
    return (
      <section className={styles['section-banner']}>
        <p className='error-message'>{errorMessage}</p>
      </section>
    );
  }

  return (
    <section
      style={{ backgroundImage: `url(${movie?.poster_path})` }}
      className={styles['section-banner']}
    >
      <div className={styles['banner-container']}>
        <div className={styles['banner-content']}>
          <h1>{movie.title}</h1>

          <div>
            <div className={styles['banner-actions']}>
              <button>Play</button>
              <button>My List</button>
            </div>

            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
