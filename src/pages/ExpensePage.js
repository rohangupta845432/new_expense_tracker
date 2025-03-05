import React, { useContext, useEffect } from "react";
import ExpenseList from "../component/Expense/ExpenseList";
import ExpenseAdd from "../component/Expense/ExpenseAdd";
import Container from "../component/UI/Container";
import Navbar from "../component/UI/Navbar";
import ExpenstContext from "../store/expense-context";
import AuthContext from "../store/auth-context";
import { expenseUrl } from "../apis_url";

let isInitial = true;
const ExpensePage = () => {
  const expenseCtx = useContext(ExpenstContext);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    let email = authCtx.user;
    const clean_email = email.split("@").join("").split(".").join("");
    fetch(`${expenseUrl}${clean_email}.json`, {
      method: "PUT",
      body: JSON.stringify(expenseCtx.expenses),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Expense Updated Succesfully");
      });
  }, [expenseCtx, authCtx]);
  return (
    <>
      <Navbar />
      <Container>
        <ExpenseAdd />
        <ExpenseList />
      </Container>
    </>
  );
};

export default ExpensePage;
