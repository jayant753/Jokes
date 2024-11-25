const express = require('express');
const { getFavourites, addFavourite } = require('../controllers/favouriteController');

const router = express.Router();

router.get('/', getFavourites);
router.post('/', addFavourite);

module.exports = router;
