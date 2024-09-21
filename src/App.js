import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfileUpdatePage from "./pages/ProfileUpdate";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ExpensePage from "./pages/ExpensePage";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Switch>
      <Route path="/signup" exact>
        <SignUpPage />
      </Route>
      {!authCtx.isLogin && (
        <Route path="/" exact>
          <LoginPage />
        </Route>
      )}
      {authCtx.isLogin && (
        <Route path="/" exact>
          <ProfileUpdatePage />
        </Route>
      )}
      {authCtx.isLogin && (
        <Route path="/signup" exact>
          <ProfileUpdatePage />
        </Route>
      )}

      {!authCtx.isLogin && (
        <Route path="/forgotpassword" exact>
          <ForgotPasswordPage />
        </Route>
      )}

      {authCtx.isLogin && (
        <Route path="/expense" exact>
          <ExpensePage />
        </Route>
      )}

      <Route path="*">
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
