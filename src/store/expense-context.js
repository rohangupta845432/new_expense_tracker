import {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
import { expenseUrl } from "../apis_url";
import AuthContext from "./auth-context";

const ExpenstContext = createContext();

const ExpenseReduser = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), ...action.payload }];
    case "Edit":
      return state.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    case "DELETE":
      return state.filter((expense) => {
        return action.payload !== expense.id;
      });
    case "SET_EXPENSES": // This will set initial data from API
      return action.payload;
    default:
      return state;
  }
};

export const ExpenseContextProvider = (props) => {
  const [data, setData] = useState([]);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let email = authCtx.user;
        const clean_email = email.split("@").join("").split(".").join("");
        const responce = await fetch(`${expenseUrl}${clean_email}.json`);
        const data = await responce.json();
        console.log(data ? Object.values(data) : []);
        setData(data ? Object.values(data) : []);
        console.log(Object.values(data));
        dispatch({
          type: "SET_EXPENSES",
          payload: data ? Object.values(data) : [],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [authCtx.user]);

  const [expenses, dispatch] = useReducer(ExpenseReduser, data);

  return (
    <ExpenstContext.Provider value={{ expenses, dispatch }}>
      {props.children}
    </ExpenstContext.Provider>
  );
};
export default ExpenstContext;
