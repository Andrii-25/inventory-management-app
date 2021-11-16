import { SET_SELECTED_ITEMS } from "../actions/types";

export const setSelectedItems = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SELECTED_ITEMS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
