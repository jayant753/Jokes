const JokeCard = ({ joke, onFavourite }) => {
  return (
    <div className="card joke-card">
      <img src={joke.image_url} className="card-img-top" alt="Joke" />
      <div className="card-body text-center">
        <h5 className="card-title">{joke.joke_text}</h5>
        {onFavourite && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onFavourite(joke)}
          >
            Favourite
          </button>
        )}
      </div>
    </div>
  );
};

export default JokeCard;
