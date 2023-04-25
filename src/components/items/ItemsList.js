import Card from "../Card/Card";
import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  const deleteItemHandler = (e) => {
    props.onDeleteItemId(e);
  };

  const editItemHandler = (id) => {
    props.onEditItem(id);
  };

  return (
    <Card className={classes.list}>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              <div>{item.text}</div>
              <button
                className={classes.delete}
                onClick={() => {
                  deleteItemHandler(item.id);
                }}
              >
                Delete
              </button>
              {/* <button
                className={classes.edit}
                onClick={() => {
                  editItemHandler(item.id);
                }}
              >
                Edit
              </button> */}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ItemsList;
