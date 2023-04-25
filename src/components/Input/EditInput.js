import { useState } from "react";
import classes from "./EditInput.module.css";

const EditInput = (props) => {
  const [inputItem, setInputItem] = useState(props.item.text);

  const inputTextHandler = (e) => {
    setInputItem(e.target.value);
  };

  const saveSubmitHandler = (e) => {
    e.preventDefault();
    if (inputItem) {
      props.onNewItemText({ text: inputItem, id: props.item.id });
    }
  };

  return (
    <form onSubmit={saveSubmitHandler} className={classes.form}>
      <input
        type="text"
        name="inputText"
        onChange={inputTextHandler}
        value={inputItem}
      ></input>
      <button className={classes.save} type="submit">
        Save
      </button>
    </form>
  );
};

export default EditInput;
