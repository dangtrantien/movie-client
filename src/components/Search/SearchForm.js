import React, { useState } from 'react';

import styles from './SearchForm.module.css';

// ==================================================

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    keyword: '',
    genre: '',
    mediaType: 'all',
    language: '',
    year: '',
  });

  const inputSearchChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Kiểm tra xem input có value không
    if (formData.keyword === '') {
      alert('Movie name must not be empty! Please type something.');
    } else {
      setFormData({
        keyword: '',
        genre: '',
        mediaType: 'all',
        language: '',
        year: '',
      });

      // Truyền value cho component cha (component Search)
      props.onSearch(formData);
    }
  };

  // Fuction reset trang /search
  const resetHandler = () => {
    props.onSearch(formData);
    props.onCloseModal(true);
  };

  return (
    <form className={styles['form-container']} onSubmit={submitHandler}>
      <div className={styles['form-control']}>
        <label htmlFor='keyword'>Movie name:</label>

        <input
          id='keyword'
          type='text'
          value={formData.keyword}
          onChange={(e) =>
            inputSearchChange('keyword', e.target.value.toLowerCase())
          }
        />
      </div>

      <div className={styles['form-input--container']}>
        <div className={styles['form-control']}>
          <label htmlFor='genre'>Genre:</label>

          <input
            id='genre'
            type='text'
            value={formData.genre}
            onChange={(e) =>
              inputSearchChange('genre', e.target.value.toLowerCase())
            }
          />
        </div>

        <div className={styles['form-control']}>
          <label htmlFor='year'>Release year:</label>

          <input
            id='year'
            type='number'
            value={formData.year}
            onChange={(e) =>
              inputSearchChange('year', parseInt(e.target.value))
            }
          />
        </div>
      </div>

      <div className={styles['form-select--container']}>
        <div className={styles['form-control']}>
          <label htmlFor='mediaType'>Media type:</label>

          <select
            id='mediaType'
            value={formData.mediaType}
            onChange={(e) => inputSearchChange('mediaType', e.target.value)}
          >
            <option value='all'>All</option>
            <option value='movie'>Movie</option>
            <option value='tv'>TV</option>
            <option value='person'>Person</option>
          </select>
        </div>

        <div className={styles['form-control']}>
          <label htmlFor='language'>Language:</label>

          <select
            id='language'
            value={formData.language}
            onChange={(e) => inputSearchChange('language', e.target.value)}
          >
            <option value=''>Select language</option>
            <option value='en'>English</option>
            <option value='ja'>Japanese</option>
            <option value='ko'>Korea</option>
          </select>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.btn} ${styles['btn-submit']}`}
          type='submit'
        >
          Search
        </button>

        <button
          className={`${styles.btn} ${styles['btn-reset']}`}
          type='button'
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
