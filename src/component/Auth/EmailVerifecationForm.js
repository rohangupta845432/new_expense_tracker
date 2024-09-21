import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";

const EmailVerifecationForm = () => {
  const otpRef = useRef();
  const authCtx = useContext(AuthContext);
  const [inputShow, setInputShow] = useState(false);
  const onVerifyEmailHandler = () => {
    const loginToken = authCtx.token;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBIbNTYU0iRjY2StvrObVWKjSgg3LK5oUQ",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: loginToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
        setInputShow(true);
      });
  };
  const onSubmitHandler = (event) => {
    event.preventdefault();
    console.log(otpRef.current.value);
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=";
    fetch(url, {
      method: "POST",
      body: { oobCode: otpRef.current.value },
      headers: {
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
    <div>
      <button onClick={onVerifyEmailHandler}>Verify Your Email</button>
      {inputShow && (
        <form onSubmit={onSubmitHandler}>
          <input placeholder="Enter Otp" ref={otpRef} />
          <button>Submit Verifecation Code</button>
        </form>
      )}
    </div>
  );
};

export default EmailVerifecationForm;
