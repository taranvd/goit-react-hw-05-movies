import { useState } from 'react';

const SearchBar = ({ onSubmit, initialQuery }) => {
  const [query, setQuery] = useState(initialQuery ?? '');

  function handlerSubmit(e) {
    e.preventDefault();

    onSubmit(query.trim());
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={query}
          onChange={evt => setQuery(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
