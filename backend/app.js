const express = require('express');
const jokeRoutes = require('./routes/jokeRoutes');
const favouriteRoutes = require('./routes/favouriteRoutes');

const app = express();

app.use(express.json());

// Routes
app.use('/api/jokes', jokeRoutes);
app.use('/api/favourites', favouriteRoutes);

module.exports = app;
