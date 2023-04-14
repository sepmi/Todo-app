import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import classes from "./App.module.css";
import Input from "./components/Input/Input";
import ItemsList from "./components/items/ItemsList";
import { save, clear, parsed, remove } from "./functions/functions.js";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [itemDeleted, setItemDeleted] = useState(false);

  const newItemHandler = (item) => {
    let newArr = [];
    setItemsList((prevItemsList) => {
      newArr = [...prevItemsList, { text: item, id: counter }];
      return newArr;
    });

    clear();
    save("array", newArr);
    if (newArr.length != 0) {
      save("lastId", newArr[newArr.length - 1].id);
    }
    setCounter(counter + 1);
  };

  useEffect(() => {
    const parsedArray = parsed("array");
    const parsedCounter = parsed("lastId");

    if (parsedArray && parsedArray.length != 0 && counter == 0) {
      setItemsList(parsedArray);
      setCounter(parsedCounter + 1);
    } else if (itemDeleted == true) {
      remove("array");
      save("array", itemsList);
    }
    setItemDeleted(false);
  }, [itemsList]);

  const clearBtnHandler = (e) => {
    clear();
    setCounter(0);
    setItemsList([]);
  };

  const onDeleteItemHandler = (id) => {
    console.log(itemsList);

    setItemsList((prevItemList) => {
      return prevItemList.filter((item) => item.id != id);
    });
    setItemDeleted(true);
  };

  return (
    <Card className={classes.mainCard}>
      <Input onItem={newItemHandler} />
      {itemsList.length != 0 && (
        <ItemsList items={itemsList} onDeleteItemId={onDeleteItemHandler} />
      )}
      <div className={classes.actions}>
        {itemsList.length != 0 && (
          <button onClick={clearBtnHandler}>clear List</button>
        )}
      </div>
    </Card>
  );
}

export default App;
