const { Router } = require("express");
const router = Router();
const { Videogame, Genero } = require("../db");

router.put("/:id", async (req, res) => {
  const {
    name,
    description,
    released,
    rating,
    genres,
    platforms,
    background_image,
  } = req.body;
  const { id } = req.params;

  if (!name || !description || !released || !rating  || !platforms) {
    return res.send("faltan datos puto");
  }

  try {
    
  
 
    const updateVideogame = await Videogame.update(
      {
        name:name,
        description:description,
        released:released,
        rating:rating,
        platforms:platforms,
        background_image:background_image,
        
      },
      { where: { id: +id } }
    );
console.log('-----------------',updateVideogame)
    
    updateVideogame.concat(genres);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
