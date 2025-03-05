import React, { useContext } from "react";
import ExpenstContext from "../../store/expense-context";
import ThemeContext from "../../store/theme-context";

function DownloadExpense() {
  const { expenses } = useContext(ExpenstContext);
  const themeCtx = useContext(ThemeContext);
  if (themeCtx.premium === "false") {
    return "";
  }

  function onCLickHandler(e) {
    if (!expenses.length) return "";

    const headers = Object.keys(expenses[0]);

    const csvContent = expenses
      .map((expense) => {
        return headers.map((header) => expense[header]).join(",");
      })
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  return (
    <div>
      <button onClick={onCLickHandler} className="theme-button">
        Download Csv
      </button>
    </div>
  );
}

export default DownloadExpense;
