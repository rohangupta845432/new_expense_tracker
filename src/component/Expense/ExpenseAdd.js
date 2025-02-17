import React, { useContext, useRef } from "react";
import ExpenstContext from "../../store/expense-context";
import Card from "../UI/Card";
import classes from "./ExpenseAdd.module.css";
import { expenseUrl } from "../../apis_url";

const ExpenseAdd = () => {
  const nameref = useRef();
  const amountref = useRef();
  const dateRef = useRef();
  const { dispatch } = useContext(ExpenstContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formValue = {
      name: nameref.current.value,
      date: dateRef.current.value,
      amount: amountref.current.value,
    };

    console.log(formValue);

    fetch(expenseUrl, {
      method: "POST",
      body: JSON.stringify(formValue),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "ADD", payload: { ...formValue, id: data.name } });

        console.log("Expense Added Succesfully");
      });
  };
  return (
    <Card>
      <h3>Expensex Add</h3>

      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            className={classes.input_box}
            type="date"
            placeholder="Date"
            ref={dateRef}
          />
        </div>
        <div>
          <input
            className={classes.input_box}
            type="text"
            placeholder="Expense Name"
            ref={nameref}
          />
        </div>
        <div>
          <input
            className={classes.input_box}
            type="text"
            placeholder="Amount"
            ref={amountref}
          />
        </div>
        <div>
          <button className={classes.input_btn}>Add Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseAdd;
