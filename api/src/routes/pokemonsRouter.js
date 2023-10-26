const express = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonById = require("../controllers/getPokemonById");

const pokemonsRouter = express.Router();

pokemonsRouter.get("/", getPokemons);
pokemonsRouter.get("/:id", getPokemonById);

module.exports = pokemonsRouter;
