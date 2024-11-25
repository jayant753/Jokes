const axios = require('axios');

const searchJokes = async (req, res) => {
  const { term } = req.query;

  try {
    const response = await axios.get('https://icanhazdadjoke.com/search', {
      headers: { Accept: 'application/json' },
      params: { term },
    });

    return res.json(response.data.results.map(joke => ({
      id: joke.id,
      joke: joke.joke,
      image: `https://icanhazdadjoke.com/j/${joke.id}.png`,
    })));
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch jokes' });
  }
};

module.exports = { searchJokes };
