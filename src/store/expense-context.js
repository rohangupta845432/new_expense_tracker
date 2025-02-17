import { createContext, useReducer, useEffect, useState } from "react";

const ExpenstContext = createContext();

const ExpenseReduser = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "Edit":
      return [...state];
    case "DELETE":
      return state.filter((expense) => {
        return action.payload !== expense.id;
      });
    default:
      return state;
  }
};

export const ExpenseContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(
          "https://new-expense-76f73-default-rtdb.firebaseio.com//expense.json"
        );
        const data = await responce.json();
        console.log(data);
        setData(Object.values(data));
        console.log(Object.values(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [expenses, dispatch] = useReducer(ExpenseReduser, data);

  return (
    <ExpenstContext.Provider value={{ expenses, dispatch }}>
      {props.children}
    </ExpenstContext.Provider>
  );
};
export default ExpenstContext;
