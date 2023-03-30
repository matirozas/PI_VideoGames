const { Router } = require("express");
const router = Router();

const videogames = require("./videogames");
const videogame = require("./videogame");
const genres = require("./genres");
const updateGame = require("./updateGame");
const deleteGame = require("./deleteGame");

router.use("/videogames", videogames);
router.use("/videogame", videogame);
router.use("/genres", genres);
router.use("/updateGame", updateGame);
router.use("/deleteGame", deleteGame);

module.exports = router;
