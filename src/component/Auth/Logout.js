import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Logout = () => {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const onClickHandler = () => {
    AuthCtx.logout();
    history.replace("/login");
  };

  return <button onClick={onClickHandler}>Logout</button>;
};

export default Logout;
