import React, { useContext, useState } from "react";
import classes from "./Expense.module.css";
import ExpenstContext from "../../store/expense-context";
import Modal from "../UI/Modal";
import ExpenseEdit from "./ExpenseEdit";
const Expense = (props) => {
  const { dispatch } = useContext(ExpenstContext);
  const [isOpen, setIsOpen] = useState(false);

  const deleteHandler = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const editHandler = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={classes.container}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ExpenseEdit
          expense={{
            id: props.id,
            date: props.date,
            amount: props.amount,
            name: props.name,
            category: props.category,
          }}
          popUpClose={onClose}
        />
      </Modal>
      <h4 className={classes.item}>{props.date}</h4>
      <h4 className={classes.item}>{props.name}</h4>
      <h4 className={classes.item}>{props.category}</h4>
      <h4 className={classes.item}>{props.amount}</h4>
      <button className="theme-button" onClick={editHandler}>
        Edit
      </button>
      <button className="theme-button" onClick={(e) => deleteHandler(props.id)}>
        Remove
      </button>
    </div>
  );
};

export default Expense;
