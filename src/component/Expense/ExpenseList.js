import React, { useContext } from "react";
import ExpenstContext from "../../store/expense-context";
import Expense from "./Expense";
import Card from "../UI/Card";
const ExpenseList = () => {
  const { expenses } = useContext(ExpenstContext);
  return (
    <Card>
      <h3>Expensex List</h3>
      {expenses.map((expense) => {
        return (
          <Expense
            id={expense.id}
            name={expense.name}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
};

export default ExpenseList;
