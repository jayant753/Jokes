const express = require('express');
const { searchJokes } = require('../controllers/jokeController');

const router = express.Router();

router.get('/search', searchJokes);

module.exports = router;
