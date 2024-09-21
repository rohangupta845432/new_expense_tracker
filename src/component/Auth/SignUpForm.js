import React, { useRef } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
const SignUpForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let emailValue = emailRef.current.value;
    let passwordValue = passwordRef.current.value;
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
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
          res.json();
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
        console.log(data);
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
            <label>Confirm Password</label>
            <input type="password" />
          </div>
          <div className={classes.from_row}>
            <button>SignUp</button>
          </div>

          <div className={classes.from_row}>
            <Link to="/login">If You Have An Account Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
