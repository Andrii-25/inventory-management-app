import { SET_SELECTED_ITEMS } from "../actions/types";

const initialState = [];

function selectedItemsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SELECTED_ITEMS:
      return payload;

    default:
      return state;
  }
}

export default selectedItemsReducer;
