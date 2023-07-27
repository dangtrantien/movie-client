import { useState } from 'react';

import SearchForm from '../components/Search/SearchForm';
import ResultList from '../components/Search/ResultList';

// ==================================================

const Search = () => {
  const [formData, setFormData] = useState({});
  const [closeModal, setCloseModal] = useState(false);

  const searchHandler = (value) => {
    setFormData(value);
  };

  const closeModalHandler = (bool) => {
    setCloseModal(bool);
  };

  return (
    <>
      <SearchForm onSearch={searchHandler} onCloseModal={closeModalHandler} />

      <ResultList searchValue={formData} closeModal={closeModal} />
    </>
  );
};

export default Search;
