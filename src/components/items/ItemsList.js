import Card from "../Card/Card";
import classes from "./ItemsList.module.css";
import EditInput from "../Input/EditInput";

const ItemsList = (props) => {
  const deleteItemHandler = (e) => {
    props.onDeleteItemId(e);
  };

  const editItemHandler = (id) => {
    props.onEditItem(id);
  };

  const saveItemHandler = (item) => {
    props.onSaveItem(item);
  };

  return (
    <Card className={classes.list}>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              {!item.editEnable && <div>{item.text}</div>}
              {item.editEnable && (
                <EditInput item={item} onNewItemText={saveItemHandler} />
              )}

              <button
                className={classes.delete}
                onClick={() => {
                  deleteItemHandler(item.id);
                }}
              >
                Delete
              </button>
              {!item.editEnable && (
                <button
                  className={classes.edit}
                  onClick={() => {
                    editItemHandler(item.id);
                  }}
                >
                  Edit
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ItemsList;
