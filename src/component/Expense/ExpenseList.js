import React, { useContext } from "react";
import ExpenstContext from "../../store/expense-context";
import Expense from "./Expense";
import Card from "../UI/Card";
import DownloadExpense from "./DownloadExpense";
const ExpenseList = () => {
  const { expenses } = useContext(ExpenstContext);
  console.log(expenses);
  return (
    <Card>
      <h3>Expensex List</h3>
      {expenses.map((expense) => {
        return (
          <Expense
            key={expense.id}
            id={expense.id}
            name={expense.name}
            date={expense.date}
            amount={expense.amount}
            category={expense.category}
          />
        );
      })}
      <DownloadExpense />
    </Card>
  );
};

export default ExpenseList;
