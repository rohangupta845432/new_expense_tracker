import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Logout = () => {
  const AuthCtx = useContext(AuthContext);
  return <button onClick={(e) => AuthCtx.logout()}>Logout</button>;
};

export default Logout;
