import { save, clear, parsed, remove } from "../../functions/functions";

const itemsReducer = (state, action) => {
  if (action.type === "ADD_ONE") {
    const newArr = [
      ...state.items,
      { text: action.newText, id: state.counter },
    ];
    clear();
    save("array", newArr);
    if (newArr.length !== 0) {
      save("lastId", newArr[newArr.length - 1].id);
    }

    return {
      items: newArr,
      counter: state.counter + 1,
    };
  }

  if (action.type === "ADD_OLD") {
    return {
      items: parsed("array"),
      counter: parsed("lastId") + 1,
    };
  }

  if (action.type === "CLEAR") {
    clear();
    return {
      items: [],
      counter: 0,
    };
  }

  if (action.type === "DELETE_ONE") {
    const newArr = state.items.filter((item) => item.id !== action.id);

    remove("array");
    save("array", newArr);
    if (newArr.length === 0) {
      clear();
    }

    return {
      items: newArr,
      counter: state.counter,
    };
  }

  if (action.type === "EDIT_ITEM") {
    state.items.map((item) => {
      if (item.id === action.id) {
      }
    });

    return {
      items: state.items,
      counter: state.counter,
    };
  }

  return { items: [], counter: 0 };
};

export default itemsReducer;
