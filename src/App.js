import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ExpensePage from "./pages/ExpensePage";
import ThemeContext from "./store/theme-context";
import Profile from "./pages/Profile";
function App() {
  const authCtx = useContext(AuthContext);
  const themeCtx = useContext(ThemeContext);
  return (
    <div data-theme={themeCtx.theme}>
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
            <Profile />
          </Route>
        )}
        {authCtx.isLogin && (
          <Route path="/signup" exact>
            <Profile />
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
    </div>
  );
}

export default App;
