import React, { useContext, useRef } from "react";
import ExpenstContext from "../../store/expense-context";
import Card from "../UI/Card";
import classes from "./ExpenseAdd.module.css";
import { expenseUrl } from "../../apis_url";
import AuthContext from "../../store/auth-context";

const ExpenseAdd = () => {
  const nameref = useRef();
  const amountref = useRef();
  const dateRef = useRef();
  const categoryref = useRef();
  const { dispatch } = useContext(ExpenstContext);
  const { user } = useContext(AuthContext);
  console.log(user);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formValue = {
      name: nameref.current.value,
      date: dateRef.current.value,
      amount: amountref.current.value,
      category: categoryref.current.value,
    };

    console.log(formValue);
    const clean_email = user.split("@").join("").split(".").join("");
    fetch(`${expenseUrl}${clean_email}.json`, {
      method: "POST",
      body: JSON.stringify(formValue),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "ADD", payload: { ...formValue, id: data.name } });
        nameref.current.value = "";
        dateRef.current.value = "";
        amountref.current.value = "";
        categoryref.current.value = "";
        console.log("Expense Added Succesfully");
      });
  };
  return (
    <Card>
      <h3>Expensex Add</h3>

      <form onSubmit={onSubmitHandler} className="theme-form">
        <div>
          <div>
            <input
              className={classes.input_box}
              type="text"
              placeholder="Expense Name"
              ref={nameref}
            />
          </div>
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
            placeholder="Amount"
            ref={amountref}
          />
        </div>

        <div>
          <select className={classes.input_box} ref={categoryref}>
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Unassigned">Unassigned </option>
          </select>
        </div>
        <div>
          <button className="theme-button">Add Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseAdd;
