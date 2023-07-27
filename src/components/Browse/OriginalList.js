import { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';
import styles from './OriginalList.module.css';

// ==================================================

const OriginalList = (props) => {
  const [movies, setMovies] = useState([]);

  const { errorMessage, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: props.api }).then((resData) =>
      setMovies(resData.results)
    );
  }, [props.api, sendRequest]);

  //Render lỗi nếu khi fetch data xảy ra vấn đề
  if (errorMessage) {
    return (
      <section className={styles['section-original']}>
        <p className='error-message'>{errorMessage}</p>
      </section>
    );
  }

  return (
    <section className={styles['section-original']}>
      <div className={`img-container ${styles['original-img--container']}`}>
        {/* Render các movie img */}
        {movies.map((movie) => (
          <img key={movie.id} src={movie.poster_path} alt={movie.title} />
        ))}
      </div>
    </section>
  );
};

export default OriginalList;
