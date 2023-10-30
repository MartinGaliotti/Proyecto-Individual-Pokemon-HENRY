import Styles from "./FormTypes.module.css";
import axios from "axios";
import URL from "../../helpers/URL";

import { useState, useEffect } from "react";
const FormTypes = (props) => {
  const [types, setTypes] = useState([]);

  const [pokemonTypes, setPokemonTypes] = useState([]);

  const getData = async () => {
    const respuesta = await axios.get(URL.BaseUrl + URL.Types);
    const { data } = respuesta;
    setTypes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Elige el/los tipos: </h2>
      <form>
        {types.map((type, key) => {
          return <div key={key}>{type}</div>;
        })}
        <button className={Styles.submit}>
          <span className={Styles.circle} aria-hidden="true">
            <span className={Styles.iconArrow}></span>
          </span>
          <span className={Styles.buttonText}>Crear</span>
        </button>
      </form>
    </>
  );
};

export default FormTypes;
