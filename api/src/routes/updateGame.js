const { Router } = require("express");
const router = Router();
const { Videogame, Genero } = require("../db");

router.put("/:id", async (req, res) => {
  let {
    name,
    description,
    released,
    rating,
    genres,
    platforms,
    background_image,
  } = req.body;
  let { id } = req.params;

  if (!name || !description || !released || !rating || !platforms || !genres) {
    return res.send("faltan datos puto");
  }

  try {
    await Videogame.update(
      {
        name,
        description,
        released,
        rating,
        platforms,
        background_image,
        genres,
      },
      { where: { id } }
    );

    return res.send("viedogame modificado");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
