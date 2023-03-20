const { Router } = require('express');
const router = Router();

const videogames= require('./videogames');
const videogame= require('./videogame');
const genres= require('./genres');
const updateVideogame= require('./updateVideogame');



router.use('/videogames',videogames);
router.use('/genres',genres);
router.use('/videogame',videogame);
router.use('/updateVideogame',updateVideogame);


module.exports = router;
