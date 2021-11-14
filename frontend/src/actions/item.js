import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../actions/types";
import ItemService from "../service/itemService";

export const getItems = () => async (dispatch) => {
  try {
    const res = await ItemService.getItems();

    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addItem = (data) => async (dispatch) => {
  try {
    const res = await ItemService.addItem(data);

    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeItem = (id) => async (dispatch) => {
  try {
    const res = await ItemService.removeItem(id);

    dispatch({
      type: DELETE_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateItem = (data, id) => async (dispatch) => {
  try {
    const res = await ItemService.updateItem(data, id);

    dispatch({
      type: UPDATE_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
