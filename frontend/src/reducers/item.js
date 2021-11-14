import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../actions/types";

const initialState = [];

function itemReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS:
      return payload;

    case ADD_ITEM:
      return [...state, payload];

    case DELETE_ITEM:
      return state.filter(({ id }) => id !== payload.id);

    case UPDATE_ITEM:
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}

export default itemReducer;
