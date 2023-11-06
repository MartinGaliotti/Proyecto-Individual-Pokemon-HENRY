import { ADD_ALL_CHARS, ADD_NAME_CHARS, FILTER, ORDER } from "./actions";

const initialState = {
  allCharacters: [],
  shownCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_CHARS:
      return {
        ...state,
        allCharacters: action.payload,
      };
      break;

    case ADD_NAME_CHARS:
      return {
        ...state,
        shownCharacters: action.payload,
      };

    default:
      return { ...state };
      break;
  }
};

export default rootReducer;
