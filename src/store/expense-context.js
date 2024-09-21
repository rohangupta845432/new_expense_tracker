import { createContext, useReducer } from "react";

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
  const [expenses, dispatch] = useReducer(ExpenseReduser, []);

  return (
    <ExpenstContext.Provider value={{ expenses, dispatch }}>
      {props.children}
    </ExpenstContext.Provider>
  );
};
export default ExpenstContext;
