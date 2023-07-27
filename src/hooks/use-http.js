import { useState, useCallback } from 'react';

// ==================================================

const useHttp = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setErrorMessage(null);

    try {
      // Fetch data
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const data = await response.json();

      if (!requestConfig.isYoutube) {
        // Kiểm tra xem api có data không
        if (!data.results) {
          return setErrorMessage(data.message);
        }

        const movieList = data.results.map((movie) => {
          // Sửa trường title, backdrop_path, poster_path cho movie list
          return {
            ...movie,
            title: !movie.name ? movie.title : movie.name,
            backdrop_path: movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : '',
            poster_path: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : '',
          };
        });

        return { ...data, results: movieList };
      } else {
        return data;
      }
    } catch (error) {
      return setErrorMessage(error.message || 'Something went wrong!');
    }
  }, []);

  return {
    errorMessage,
    sendRequest,
  };
};

export default useHttp;
