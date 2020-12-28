import { add } from "./action";
import Place from "../models/place";

const initialState = {
  textInputs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add:
    const newPlace = new Place(new Date().toString(), action.data.title);
    return {
        textInputs: state.textInputs.concat(newPlace)
    };
    default:
      return state;
  }
};
