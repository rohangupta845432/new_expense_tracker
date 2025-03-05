import { Link } from "react-router-dom/cjs/react-router-dom";
import Logout from "../Auth/Logout";

import AuthContext from "../../store/auth-context";
import { useContext } from "react";

import classes from "./NAvbar.module.css";
// import ExpenstContext from "../../store/expense-context";
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = () => {
  const authCtx = useContext(AuthContext);
  // const expCtx = useContext(ExpenstContext);
  return (
    <div className={classes.navbar}>
      <h4>Expense Tracker</h4>
      <ul>
        {authCtx.isLogin && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {authCtx.isLogin && (
          <li>
            <Link to="/expense">Manage Expense</Link>
          </li>
        )}
        {authCtx.isLogin && (
          <li>
            <Logout />
          </li>
        )}
        {authCtx.isLogin && (
          <li>
            <ThemeSwitcher />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
