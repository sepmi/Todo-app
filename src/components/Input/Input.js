import { useState } from "react";
import Card from "../Card/Card";
import classes from "./Input.module.css";

const Input = (props) => {
  const [inputItem, setInputItem] = useState("");

  const inputSubmitHandler = (e) => {
    e.preventDefault();

    if (inputItem) {
      props.onItem(inputItem);
    }

    setInputItem("");
  };

  const inputChangeHandler = (e) => {
    setInputItem(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={inputSubmitHandler}>
        <label>Type your task</label>
        <input
          type="text"
          name="inputText"
          onChange={inputChangeHandler}
          value={inputItem}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Input;
