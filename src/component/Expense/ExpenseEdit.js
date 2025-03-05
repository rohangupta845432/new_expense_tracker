import React, { useContext, useState } from "react";
import ExpenstContext from "../../store/expense-context";
import Card from "../UI/Card";
import classes from "./ExpenseAdd.module.css";

const ExpenseEdit = ({ expense, popUpClose }) => {
  console.log(expense);
  const { dispatch } = useContext(ExpenstContext);
  const [formValue, setFormValue] = useState(
    expense || { name: "", amount: "", date: "", category: "" }
  );
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch({ type: "Edit", payload: formValue });
    popUpClose();
  };
  return (
    <Card>
      <h3>Edit Expense</h3>

      <form onSubmit={onSubmitHandler} className="theme-form">
        <div>
          <div>
            <input
              className={classes.input_box}
              type="text"
              placeholder="Expense Name"
              value={formValue.name}
              onChange={(e) =>
                setFormValue({ ...formValue, name: e.target.value })
              }
            />
          </div>
          <input
            className={classes.input_box}
            type="date"
            placeholder="Date"
            value={formValue.date}
            onChange={(e) =>
              setFormValue({ ...formValue, date: e.target.value })
            }
          />
        </div>

        <div>
          <input
            className={classes.input_box}
            type="text"
            placeholder="Amount"
            value={formValue.amount}
            onChange={(e) =>
              setFormValue({ ...formValue, amount: e.target.value })
            }
          />
        </div>

        <div>
          <select
            className={classes.input_box}
            value={formValue.category}
            onChange={(e) =>
              setFormValue({ ...formValue, category: e.target.value })
            }
            required
          >
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Unassigned">Unassigned </option>
          </select>
        </div>
        <div>
          <button className="theme-button">Update </button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseEdit;
