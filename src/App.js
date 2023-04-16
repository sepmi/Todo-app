import { useEffect, useReducer } from "react";
import Card from "./components/Card/Card";
import classes from "./App.module.css";
import Input from "./components/Input/Input";
import ItemsList from "./components/items/ItemsList";
import { parsed } from "./functions/functions.js";
import itemsReducer from "./components/items/itemsReducer";
import { clear } from "./functions/functions";

function App() {
  const [items, itemsDispatch] = useReducer(itemsReducer, {
    items: [],
    counter: 0,
  });

  const newItemHandler = (text) => {
    itemsDispatch({ type: "ADD_ONE", newText: text });
  };

  useEffect(() => {
    const parsedArray = parsed("array");

    if (parsedArray && parsedArray.length !== 0 && items.items.length === 0) {
      itemsDispatch({
        type: "ADD_OLD",
      });
    }
  }, []);

  const clearBtnHandler = (e) => {
    clear();
    itemsDispatch({ type: "CLEAR" });
  };

  const onDeleteItemHandler = (id) => {
    itemsDispatch({ type: "DELETE_ONE", id: id });
  };

  return (
    <Card className={classes.mainCard}>
      <Input onItem={newItemHandler} />
      {items.items.length !== 0 && (
        <ItemsList items={items.items} onDeleteItemId={onDeleteItemHandler} />
      )}
      <div className={classes.actions}>
        {items.items.length !== 0 && (
          <button onClick={clearBtnHandler}>clear List</button>
        )}
      </div>
    </Card>
  );
}

export default App;
