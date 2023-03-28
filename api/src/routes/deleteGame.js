const { Router } = require("express");
const router = Router();
const { Videogame, Genero } = require("../db");

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteGame = await Videogame.destroy({ where: { id: id } });

    res.send("el juego se borro");
  } catch (error) {
    res.status(404).send("no se pudo borrar el juego");
  }
});

module.exports = router;
