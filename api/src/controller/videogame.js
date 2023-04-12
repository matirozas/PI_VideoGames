require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const axios = require("axios");

const { Videogame, Genero } = require("../db");

const ApiId = async (id) => {
  const apiID = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`
  );
  return {
    id: apiID.data.id,
    background_image: apiID.data.background_image,
    name: apiID.data.name,
    genres: apiID.data.genres.map((g) => {
      return g.name;
    }),
    description: apiID.data.description_raw,
    released: apiID.data.released,
    rating: apiID.data.rating,
    platforms: apiID.data.platforms.map((p) => {
      return p.platform.name;
    }),
  };
};

const DbId = async (id) => {
  const juegoID = await Videogame.findByPk(id);

  const jID = {
    id: juegoID.id,
    name: juegoID.name,
    genres: juegoID.genres,
    released: juegoID.released,
    rating: juegoID.rating,
    platforms: juegoID.platforms,
    description: juegoID.description,
    background_image: juegoID.background_image,
  };
  return jID;
};
module.exports = { ApiId, DbId };
