import React, { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';
import Modal from '../../components/UI/Modal';

import styles from './MovieDetail.module.css';

// ==================================================

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [youtubeKey, setYoutubeKey] = useState('');

  const { errorMessage, sendRequest } = useHttp();

  const { id, title, backdrop_path, release_date, vote_average, overview } =
    props.movie;

  useEffect(() => {
    const requestAPI =
      'https://movie-server-xp1w.onrender.com/api/movies/video?token=8qlOkxz4wq';

    setMovieDetail({
      id,
      title,
      backdrop_path,
      release_date: new Date(release_date).toLocaleDateString(),
      vote_average,
      overview,
    });

    sendRequest({
      url: requestAPI,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { film_id: id },
      isYoutube: true,
    }).then((resData) => {
      if (resData?.key) {
        setYoutubeKey(resData.key);
      } else {
        setYoutubeKey('');
      }
    });
  }, [
    id,
    title,
    backdrop_path,
    release_date,
    vote_average,
    overview,
    sendRequest,
  ]);

  let youtubeVideo = (
    <iframe
      title={title}
      className={styles['youtube-container']}
      src={`https://www.youtube.com/embed/${youtubeKey}`}
    ></iframe>
  );

  // Render img nếu không có youtube trailer
  if (youtubeKey === '') {
    youtubeVideo = (
      <img
        className={styles.img}
        src={movieDetail.backdrop_path}
        alt={movieDetail.title}
      />
    );
  }

  //Render lỗi nếu khi fetch data xảy ra vấn đề
  if (errorMessage) {
    return (
      <div className={styles['movie-list--container']}>
        <p className='error-message'>{errorMessage}</p>
      </div>
    );
  }

  return (
    <Modal onClose={props.onClose}>
      <div className={styles['movie-detail--content']}>
        <h2>{movieDetail.title}</h2>

        <div className={styles['movie-detail--rate']}>
          <p>Release Date: {movieDetail.release_date}</p>

          <p>Vote: {movieDetail.vote_average} / 10</p>
        </div>

        <span>{movieDetail.overview}</span>
      </div>

      {/* Render youtube video */}
      {youtubeVideo}
    </Modal>
  );
};

export default MovieDetail;
