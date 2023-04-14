import Card from "../Card/Card";
import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  const deleteItemHandler = (e) => {
    props.onDeleteItemId(e);
  };
  return (
    <Card className={classes.list}>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              <div>{item.text}</div>
              <button
                onClick={() => {
                  deleteItemHandler(item.id);
                }}
              ></button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ItemsList;
