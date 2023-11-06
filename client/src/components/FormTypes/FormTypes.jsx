import Styles from "./FormTypes.module.css";
import axios from "axios";
import URL from "../../helpers/URL";
import { formState } from "../../views/Create/consts";
import actions from "./Consts";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

import { useState, useEffect } from "react";
const FormTypes = (props) => {
  const [state, setState] = useState(false);

  const [types, setTypes] = useState([]);

  const [pokemonTypes, setPokemonTypes] = useState([]);

  const getData = () => {
    axios
      .get(URL.BaseUrl + URL.Types) // Pide los tipos de pokemon al back
      .then((data) => {
        data = data.data;
        setState(actions.ok);
        setTypes(data); // Agrega los tipos al estado local
      })
      .catch((error) => {
        setState(error.message);
      });
  };

  const handleClick = (event) => {
    const action = event.target.name;
    const value = event.target.value;
    if (action === actions.add) {
      setPokemonTypes([...pokemonTypes, value]); // Si la accion es agregar, agrega el tipo al pokemon
    } else if (action === actions.delete) {
      let aux = pokemonTypes.filter((type) => type !== value); // Si la accion es eliminar, filtra los tipos
      setPokemonTypes(aux); // Y actualiza el estado local
    }
  };

  const handleSubmit = () => {
    if (pokemonTypes.length > 0) {
      props.submit({ ...props.pokemon, types: pokemonTypes }); // Cuando se envia el formulario actualiza el estado del componenete Create
      props.setForm(formState.complete); // Y el estado del Form
    } else {
      window.alert("Debe ingresar al menos un tipo para su pokemon");
    }
  };

  const buttonRender = (type) => {
    // Si el tipo se encuentra agregado, renderiza el boton eliminar
    if (pokemonTypes.includes(type)) {
      return (
        <button name={actions.delete} onClick={handleClick} value={type}>
          Eliminar
        </button>
      );
    } else {
      // Sino el boton agregar
      return (
        <button name={actions.add} onClick={handleClick} value={type}>
          Agregar
        </button>
      );
    }
  };

  useEffect(() => {
    getData(); // Cuando se renderiza el componente llama a la funcion getData()
  }, []);

  const typesRender = () => {
    return types.map((type, key) => {
      // Recorre y renderiza los tipos y sus botones
      return (
        <div key={key}>
          <div>{type}</div>
          {buttonRender(type)}
        </div>
      );
    });
  };

  const renderComponent = () => {
    if (state) {
      if (state === actions.ok) {
        return (
          <>
            <h2>Elige el/los tipos: </h2>
            <div className={Styles.typesContainer}>{typesRender()}</div>

            <button onClick={handleSubmit} className={Styles.submit}>
              <span className={Styles.circle} aria-hidden="true">
                <span className={Styles.iconArrow}></span>
              </span>
              <span className={Styles.buttonText}>Crear</span>
            </button>
          </>
        );
      } else {
        return (
          <Error
            text={"Los tipos no se pudieron renderizar debido a: "}
            error={state}
          />
        );
      }
    } else {
      return <Loading />;
    }
  };

  return <>{renderComponent()}</>;
};

export default FormTypes;
