import { save, clear, parsed, remove } from "../../functions/functions";

const itemsReducer = (state, action) => {
  if (action.type === "ADD_ONE") {
    const newArr = [
      ...state.items,
      { text: action.newText, id: state.counter, editEnable: false },
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

  if (action.type === "EDIT_ITEM_ON") {
    state.items.map((item) => {
      if (item.id === action.id) {
        item.editEnable = true;
      }
    });

    return {
      items: state.items,
      counter: state.counter,
    };
  }

  if (action.type === "SAVE_EDITED_ITEM") {
    const newArr = state.items.map((item) => {
      if (item.id === action.item.id) {
        item.editEnable = false;
        item.text = action.item.text;
      }
      return {
        text: item.text,
        itemEnable: item.itemEnable,
        id: item.id,
      };
    });

    remove("array");
    save("array", newArr);

    return {
      items: newArr,
      counter: state.counter,
    };
  }

  return { items: [], counter: 0 };
};

export default itemsReducer;
