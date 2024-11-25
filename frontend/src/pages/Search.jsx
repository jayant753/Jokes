import { useState } from 'react';
import { fetchJokes } from '../api/jokes';
import { saveFavourite } from '../api/favourites';
import JokeCard from '../components/JokeCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jokes, setJokes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchJokes(searchTerm);
    setJokes(data.results);
  };

  const handleFavourite = async (joke) => {
    await saveFavourite(joke);
    alert('Added to favourites!');
  };

  return (
    <div className="container">
      <form className="search-form" onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search jokes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="row">
        {jokes.map((joke) => (
          <div key={joke.id} className="col-md-4 d-flex justify-content-center">
            <JokeCard joke={joke} onFavourite={handleFavourite} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

