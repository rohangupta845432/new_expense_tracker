import React, { useContext } from "react";
import classes from "./Expense.module.css";
import ExpenstContext from "../../store/expense-context";
const Expense = (props) => {
  const { dispatch } = useContext(ExpenstContext);

  const deleteHandler = (id) => {
    fetch(`https://*****************/expense/${id}.json`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "DELETE", payload: id });

        console.log("Expense Deleted Succesfully");
      });
  };
  return (
    <div className={classes.container}>
      <h4 className={classes.item}>{props.date}</h4>
      <h4 className={classes.item}>{props.name}</h4>
      <h4 className={classes.item}>{props.amount}</h4>
      <button className={classes.item} onClick={(e) => deleteHandler(props.id)}>
        Remove
      </button>
    </div>
  );
};

export default Expense;
