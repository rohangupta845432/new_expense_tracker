import { Link } from "react-router-dom/cjs/react-router-dom";
import Logout from "../Auth/Logout";

import AuthContext from "../../store/auth-context";
import { useContext } from "react";

import classes from "./NAvbar.module.css";
const Navbar = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={classes.navbar}>
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
      </ul>
    </div>
  );
};

export default Navbar;
