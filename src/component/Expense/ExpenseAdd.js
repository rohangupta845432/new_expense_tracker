import React, { useContext, useRef } from "react";
import ExpenstContext from "../../store/expense-context";
import Card from "../UI/Card";
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

    fetch("*************/expense.json", {
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
          <input type="text" placeholder="Date" ref={dateRef} />
        </div>
        <div>
          <input type="text" placeholder="Expense Name" ref={nameref} />
        </div>
        <div>
          <input type="text" placeholder="Amount" ref={amountref} />
        </div>
        <div>
          <button>Add Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseAdd;
