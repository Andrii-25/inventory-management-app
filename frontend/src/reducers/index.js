import { combineReducers } from "redux";
import items from "./item";
import selectedItems from "./selectedItems";

export default combineReducers({
  items,
  selectedItems,
});
