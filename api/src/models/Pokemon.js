const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 255,
        },
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 255,
        },
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 255,
        },
      },
      speed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          max: 150,
        },
      },
      height: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: true,
          max: 50,
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          max: 1000,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
