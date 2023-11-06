import Styles from "./SearchBar.module.css";
import { useState } from "react";
import URL from "../../helpers/URL";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNameChars } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const actual = event.target.value; // Obtiene el valor del input en cada cambio
    setName(actual); // Y lo setea en el estado local
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${URL.BaseUrl}${URL.Pokemons}?name=${name}` // Pide los pokemons por nombre al back
      );
      const { data } = response;
      dispatch(addNameChars(data)); // Dispatch de los pokemons
    } catch (error) {
      window.alert("No se encontro ningun pokemon con ese nombre"); // Si hay un error envia una alerta
    }
  };

  return (
    <form className={Styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        className={Styles.input}
        placeholder="Inserte un nombre... "
        onChange={handleChange}
        value={name}
      />
      <button type="submit" className={Styles.button}>
        B
      </button>
    </form>
  );
};

export default SearchBar;
