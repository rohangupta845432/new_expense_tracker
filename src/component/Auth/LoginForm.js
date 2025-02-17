import React, { useContext, useRef } from "react";
import classes from "./Login.module.css";
import {
  Link,
  NavLink,
  useHistory,
} from "react-router-dom/cjs/react-router-dom";
import AuthContext from "../../store/auth-context";
import { loginUrl } from "../../apis_url";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let emailValue = emailRef.current.value;
    let passwordValue = passwordRef.current.value;
    const url = loginUrl;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      }),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((err) => {
            let message = "Somthing Went Wrong";
            if (err && err.error && err.error.message) {
              message = err.error.message;
            }
            alert(message);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        alert(data.email);
        history.replace("/profile");
      });
  };

  return (
    <div className={classes.login_div}>
      <div className={classes.form_div}>
        <h3 className={classes.form_title}>Login</h3>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.from_row}>
            <label>Email Id</label>
            <input type="email" ref={emailRef} />
          </div>
          <div className={classes.from_row}>
            <label>Password</label>
            <input type="password" ref={passwordRef} />
          </div>
          <div className={classes.from_row}>
            <button>SignUp</button>
            <NavLink to="/forgotpassword">Forgot Password</NavLink>
          </div>
          <div className={classes.from_row}>
            <NavLink to="signup">SignUp</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
