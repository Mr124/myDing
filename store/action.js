export const ADD_ITEM = "ADD_Item";

export const addItem = (title) => {
    return { type: ADD, data: {title: title}};
}