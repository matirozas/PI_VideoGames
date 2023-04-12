require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const axios = require("axios");

const { Genero } = require("../db");

const getGeneros = async () => {
  const {
    data: { results },
  } = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
  return results.map((g) => g.name);
};

const getGenerosDb = async () => {
  const getGenerosDb = await getGeneros();
  getGenerosDb.forEach((g) => {
    Genero.findOrCreate({ where: { name: g } });
  });
  const genDB = await Genero.findAll();
  return genDB;
};

module.exports = { getGeneros, getGenerosDb };
