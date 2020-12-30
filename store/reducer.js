import { ADD_ITEM } from "./action";
import Item from "../models/item";

const initialState = {
  textInputs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
    const newItem = new Item(new Date().toString(), action.data.title);
    return {
        textInputs: state.textInputs.concat(newItem)
    };
    default:
      return state;
  }
};
