const express = require("express");
const pokemonsRouter = require("./pokemonsRouter");
// Importar todos los routers;

const router = express.Router();

// Configurar los routers
router.use("/pokemons", pokemonsRouter);
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
