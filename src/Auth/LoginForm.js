import React, { useReff } from "react";
import classes from "./Login.module.css";

const LoginupForm = () => {
  const emailReff = useReff();
  const passwordReff = useReff();
  const onSubmitHandler = () => {
    let emailValue = emailReff.current.value;
    let passwordValue = passwordReff.current.value;
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=****";
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
            <input type="email" ref={emailReff} />
          </div>
          <div className={classes.from_row}>
            <label>Password</label>
            <input type="password" ref={passwordReff} />
          </div>
          <div className={classes.from_row}>
            <button>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginupForm;
