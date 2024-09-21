import React from "react";
import ExpenseList from "../component/Expense/ExpenseList";
import ExpenseAdd from "../component/Expense/ExpenseAdd";
import Container from "../component/UI/Container";
import Navbar from "../component/UI/Navbar";
const ExpensePage = () => {
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
