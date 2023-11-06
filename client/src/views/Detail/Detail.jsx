import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import URL from "../../helpers/URL";
import Styles from "./Detail.module.css";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Detail = (props) => {
  const [pokemon, setPokemon] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams(); // Obtiene el id del pokemon mediante los params de la url actual

  const getCharacter = async () => {
    try {
      const response = await axios.get(`${URL.BaseUrl}${URL.Pokemons}/${id}`); // Pide el pokemon usando el id al back
      const { data } = response;
      setPokemon(data); // Si lo encontro lo guarda en el estado local
    } catch (error) {
      const { message } = error;
      setError(message); // Sino guarda el error
    }
  };

  useEffect(() => {
    getCharacter(); // Cuando se inicia el componente ejecuta la función
  }, [id]);

  const statsRender = () => {
    // Renderiza las estadisticas que disponga el pokemon
    return (
      <ul className={Styles.statsList}>
        <li className={Styles.hp}>{pokemon.hp}</li>
        <li className={Styles.attack}>{pokemon.attack}</li>
        <li className={Styles.defense}>{pokemon.defense}</li>
        {pokemon.speed !== 0 && (
          <li className={Styles.speed}>{pokemon.speed}</li>
        )}
        {pokemon.height !== 0 && (
          <li className={Styles.height}>{pokemon.height}</li>
        )}
        {pokemon.weight !== 0 && (
          <li className={Styles.weight}>{pokemon.weight}</li>
        )}
      </ul>
    );
  };

  const pokemonRender = () => {
    // Renderiza los datos del pokemon
    if (pokemon.image) {
      return (
        <>
          <h1 className={Styles.name}>{pokemon.name.toUpperCase()}</h1>
          <h2 className={Styles.id}>{pokemon.id}</h2>
          <div className={Styles.imgageContainer}>
            <img src={pokemon.image} alt="POKEMON" className={Styles.image} />
            {statsRender()}
          </div>
          <ul>
            <h4 className={Styles.typesTitule}>TIPOS</h4>
            {pokemon.types.map((type, id) => {
              return (
                <li key={id} className={Styles.type}>
                  {type}
                </li>
              );
            })}
          </ul>
        </>
      );
    } else if (error) {
      return (
        <Error
          text={`El pokemon no se puede mostrar debido a: `} // Si hay algun error, renderiza el componente Error
          error={error}
        />
      );
    } else {
      return <Loading />;
    }
  };

  return <div className={Styles.container}>{pokemonRender()}</div>;
};

export default Detail;
