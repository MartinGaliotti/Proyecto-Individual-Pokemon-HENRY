import Styles from "./FormConfig.module.css";
import axios from "axios";
import URL from "../../helpers/URL";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { orderAndFilterChars } from "../../redux/actions";

const FormConfig = (props) => {
  const { setConfig, setReload } = props;

  const dispatch = useDispatch();

  const [types, setTypes] = useState([]);

  const [options, setOptions] = useState({
    type: "nothing",
    origin: "API",
    sortBy: "default",
    order: "nothing",
  });

  const getTypes = async () => {
    axios.get(URL.BaseUrl + URL.Types).then((res) => {
      const { data } = res;
      setTypes(data);
    });
  };

  useEffect(() => {
    getTypes();
  }, []);

  const optionsTypesRender = () => {
    return types.map((type, key) => {
      return (
        <option key={key} value={type}>
          {type}
        </option>
      );
    });
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setOptions({ ...options, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(orderAndFilterChars(options)).then(() => {
      setReload(Math.random());
    });
  };

  const hideConfig = () => {
    setConfig(false);
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.container}>
      <button onClick={hideConfig}>X</button>
      <label htmlFor="type">Filtrar por tipo: </label>
      <select
        onChange={handleChange}
        value={options.type}
        className={Styles.select}
        name="type"
      >
        <option value="nothing">------</option>
        {optionsTypesRender()}
      </select>
      {/*  */}
      <label htmlFor="origin">Filtrar por origen: </label>
      <select
        onChange={handleChange}
        value={options.origin}
        className={Styles.select}
        name="origin"
      >
        <option value="API">API</option>
        <option value="BDD">Mis pokemons</option>
      </select>
      {/*  */}
      <label htmlFor="sortBy">Ordenar por: </label>
      <select
        onChange={handleChange}
        value={options.sortBy}
        className={Styles.select}
        name="sortBy"
      >
        <option value="default">Defecto</option>
        <option value="name">Nombre</option>
        <option value="attack">Ataque</option>
      </select>
      {/*  */}
      <label htmlFor="order">En orden: </label>
      <select
        onChange={handleChange}
        value={options.order}
        className={Styles.select}
        name="order"
      >
        <option value="nothing">------</option>
        <option value="upward">Ascendente</option>
        <option value="falling">Descendente</option>
      </select>
      {/*  */}
      <button type="submit">Aplicar</button>
    </form>
  );
};

export default FormConfig;
