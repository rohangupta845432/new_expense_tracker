import React, { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import ExpenstContext from "../../store/expense-context";

function AvtivatePremium() {
  const themeCtx = useContext(ThemeContext);
  const { expenses } = useContext(ExpenstContext);
  const premium = themeCtx.premium;
  console.log(premium);
  if (expenses.length) {
    const totalAmount = expenses.reduce((total, expense) => {
      return total + Number(expense.amount);
    }, 0);
    console.log(totalAmount);
    if (totalAmount >= 500 && themeCtx.premium === "false") {
      return (
        <button
          className="theme-toggle-btn"
          onClick={() =>
            themeCtx.setPremium(premium === "false" ? "true" : "false")
          }
        >
          Activate Premium
        </button>
      );
    } else {
      return "";
    }
  } else {
    return "";
  }
}

export default AvtivatePremium;
