const Favourite = require('../models/favouriteModel');

const getFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.findAll();
    res.json(favourites);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favourites' });
  }
};

const addFavourite = async (req, res) => {
  const { joke_id, joke_text, image_url } = req.body;

  try {
    await Favourite.create({ joke_id, joke_text, image_url });
    res.status(201).json({ message: 'Favourite added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add favourite' });
  }
};

module.exports = { getFavourites, addFavourite };
