const getTypes = require("../controllers/getTypes");

const getTypesRouter = async (req, res) => {
  try {
    const respuesta = await getTypes();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTypesRouter;
