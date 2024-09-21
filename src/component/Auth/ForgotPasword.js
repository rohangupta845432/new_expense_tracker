import { useRef, useState } from "react";
import classes from "./Login.module.css";

const ForgotPassword = () => {
  const emailRef = useRef();
  const otpRef = useRef();
  const [isMessageSend, setIsMessageSend] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    setIsMessageSend(true);
  };

  const onOtpFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(otpRef.current.value);
  };
  return (
    <div className={classes.login_div}>
      <div className={classes.form_div}>
        <h3 className={classes.form_title}>Forgot Password</h3>
        {!isMessageSend && (
          <form onSubmit={onSubmitHandler}>
            <div className={classes.from_row}>
              <label>Email Id</label>
              <input type="email" ref={emailRef} />
            </div>
            <div className={classes.from_row}>
              <button>SignUp</button>
            </div>
          </form>
        )}

        {isMessageSend && (
          <form onSubmit={onOtpFormSubmitHandler}>
            <div className={classes.from_row}>
              <label>Email Id</label>
              <input type="text" ref={otpRef} />
            </div>
            <div className={classes.from_row}>
              <button>SignUp</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
