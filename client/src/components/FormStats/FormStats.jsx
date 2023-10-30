import Styles from "./FormStats.module.css";
import { formState } from "../../views/Create/consts";
import { useState } from "react";

const FormStats = (props) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setPokemon({ ...pokemon, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit(pokemon);
    props.setForm(formState.statsComplete);
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        {/*  */}
        <div className={Styles.textInputContainer}>
          <label htmlFor="name" className={Styles.textLabel}>
            Name:
          </label>
          <input
            value={pokemon.name}
            onChange={handleChange}
            placeholder="Ingresar nombre..."
            type="text"
            name="name"
            className={Styles.textInput}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <div className={Styles.textInputContainer}>
          <label htmlFor="image" className={Styles.textLabel}>
            Imagen:
          </label>
          <input
            value={pokemon.image}
            onChange={handleChange}
            placeholder="Ingresar url de la imagen..."
            type="text"
            name="image"
            className={Styles.textInput}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <div className={Styles.fieldContainer}>
          <label htmlFor="hp" className={Styles.label}>
            Vida: {pokemon.hp}
          </label>
          <input
            value={pokemon.hp}
            onChange={handleChange}
            max="255"
            min="1"
            step="1"
            type="range"
            name="hp"
            className={Styles.input}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <div className={Styles.fieldContainer}>
          <label htmlFor="attack" className={Styles.label}>
            Ataque:{pokemon.attack}
          </label>
          <input
            value={pokemon.attack}
            onChange={handleChange}
            max="255"
            min="1"
            step="1"
            type="range"
            name="attack"
            className={Styles.input}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <div className={Styles.fieldContainer}>
          <label htmlFor="defense" className={Styles.label}>
            Defensa:{pokemon.defense}
          </label>
          <input
            value={pokemon.defense}
            onChange={handleChange}
            max="255"
            min="1"
            step="1"
            type="range"
            name="defense"
            className={Styles.input}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <div className={Styles.fieldContainer}>
          <label htmlFor="speed" className={Styles.label}>
            Velocidad:{pokemon.speed}
          </label>
          <input
            value={pokemon.speed}
            onChange={handleChange}
            max="150"
            min="0"
            step="1"
            type="range"
            name="speed"
            className={Styles.input}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <div className={Styles.fieldContainer}>
          <label htmlFor="height" className={Styles.label}>
            Altura:{pokemon.height}
          </label>
          <input
            value={pokemon.height}
            onChange={handleChange}
            max="50"
            min="0"
            step="0.1"
            type="range"
            name="height"
            className={Styles.input}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <div className={Styles.fieldContainer}>
          <label htmlFor="weight" className={Styles.label}>
            Peso:{pokemon.weight}
          </label>
          <input
            value={pokemon.weight}
            onChange={handleChange}
            max="1000"
            min="0"
            step="1"
            type="range"
            name="weight"
            className={Styles.input}
          />
        </div>
        <p className={Styles.error}></p>
        {/*  */}
        <button className={Styles.submit}>
          <span className={Styles.circle} aria-hidden="true">
            <span className={Styles.iconArrow}></span>
          </span>
          <span className={Styles.buttonText}>Siguiente</span>
        </button>
        {/*  */}
      </form>
    </div>
  );
};

export default FormStats;
