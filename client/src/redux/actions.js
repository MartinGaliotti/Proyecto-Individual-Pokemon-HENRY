import axios from "axios";
import URL from "../helpers/URL";

export const ADD_ALL_CHARS = "ADD_ALL_CHARS";
export const ADD_NAME_CHARS = "ADD_NAME_CHARS";
export const ADD_PAGE_CHARS = "ADD_PAGE_CHARS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CHANGE_ACTUAL_PAGE = "CHANGE_ACTUAL_PAGE";

export const addAllChars = (limit) => {
  const endpoint = `${URL.BaseUrl}${URL.Pokemons}?limit=${limit}`;
  return (dispatch) => {
    axios.get(endpoint).then(({ data }) => {
      return dispatch({
        type: ADD_ALL_CHARS,
        payload: data,
      });
    });
  };
};

export const addPageChars = (offset, limit) => {
  return (dispatch) => {
    return dispatch({
      type: ADD_PAGE_CHARS,
      payload: { offset, limit },
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

export const changeActualPage = (page) => {
  return (dispatch) => {
    return dispatch({
      type: CHANGE_ACTUAL_PAGE,
      payload: page,
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
