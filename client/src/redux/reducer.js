import {
  ADD_ALL_CHARS,
  ADD_NAME_CHARS,
  ADD_PAGE_CHARS,
  CHANGE_ACTUAL_PAGE,
  FILTER,
  ORDER,
} from "./actions";

const initialState = {
  allCharacters: [],
  shownCharacters: [],
  actualPage: false,
};

const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_ALL_CHARS:
      return {
        ...state,
        allCharacters: payload,
        actualPage: 0,
      };
      break;

    case ADD_PAGE_CHARS:
      const { offset, limit } = payload;
      const aux = [...state.allCharacters].splice(offset, limit);
      return {
        ...state,
        shownCharacters: aux,
      };
      break;

    case ADD_NAME_CHARS:
      return {
        ...state,
        shownCharacters: payload,
      };

    case CHANGE_ACTUAL_PAGE:
      return {
        ...state,
        actualPage: payload,
      };

    default:
      return { ...state };
      break;
  }
};

export default rootReducer;
