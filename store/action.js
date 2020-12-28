export const ADD = "ADD";

export const add = (title) => {
    return { type: ADD, data: {title: title}};
}