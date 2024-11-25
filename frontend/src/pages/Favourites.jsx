import { useEffect, useState } from 'react';
import { getFavourites } from '../api/favourites';
import JokeCard from '../components/JokeCard';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFavourites();
      setFavourites(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Favourites</h2>
      <div className="row">
        {favourites.map((joke) => (
          <div key={joke.id} className="col-md-4 d-flex justify-content-center">
            <JokeCard joke={joke} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;

