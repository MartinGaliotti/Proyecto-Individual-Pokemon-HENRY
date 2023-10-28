const express = require("express");
const getPokemonsByIdRouter = require("./getPokemonByIdRouter");
const getPokemonsRouter = require("./getPokemonsRouter");
const getTypesRouter = require("./getTypesRouter");
const postPokemonRouter = require("./postPokemonRouter");
// Importar todos los routers;

const router = express.Router();

// Configurar los routers
router.get("/pokemons", getPokemonsRouter);
router.get("/pokemons/:id", getPokemonsByIdRouter);
router.post("/pokemons", postPokemonRouter);
router.get("/types", getTypesRouter);
// router.use("/types", typesRouter);
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
