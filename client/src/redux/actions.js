import axios from "axios";
import URL from "../helpers/URL";

export const ADD_ALL_CHARS = "ADD_ALL_CHARS";
export const ADD_NAME_CHARS = "ADD_NAME_CHARS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addAllChars = () => {
  const endpoint = `${URL.BaseUrl}${URL.Pokemons}`;
  return (dispatch) => {
    axios.get(endpoint).then(({ data }) => {
      return dispatch({
        type: ADD_ALL_CHARS,
        payload: data,
      });
    });
  };
};

export const addNameChars = (characters) => {
  return (dispatch) => {
    return dispatch({
      type: ADD_NAME_CHARS,
      payload: characters,
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
