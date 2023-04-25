import { Fragment, useEffect, useReducer } from "react";
import Card from "./components/Card/Card";
import classes from "./App.module.css";
import Input from "./components/Input/Input";
import ItemsList from "./components/items/ItemsList";
import { parsed } from "./functions/functions.js";
import itemsReducer from "./components/items/itemsReducer";

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
    itemsDispatch({ type: "CLEAR" });
  };

  const onDeleteItemHandler = (id) => {
    itemsDispatch({ type: "DELETE_ONE", id: id });
  };

  const onEditItemHandler = (id) => {
    itemsDispatch({ type: "EDIT_ITEM", id: id });
  };

  return (
    <Fragment>
      <Card className={classes.mainCard}>
        <Input onItem={newItemHandler} />
        {items.items.length !== 0 && (
          <ItemsList
            items={items.items}
            onDeleteItemId={onDeleteItemHandler}
            onEditItem={onEditItemHandler}
          />
        )}
        <div className={classes.actions}>
          {items.items.length !== 0 && (
            <button onClick={clearBtnHandler}>clear List</button>
          )}
        </div>
      </Card>

      <a
        href="https://github.com/sepmi/Todo-app"
        target="_blank"
        rel="noreferrer"
        className={classes.main_logo}
      >
        <div className={classes.logo}></div>
      </a>
    </Fragment>
  );
}

export default App;
