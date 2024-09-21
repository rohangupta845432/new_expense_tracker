import { createContext, useState } from "react";

const AuthContext = createContext({
  isLogin: null,
  token: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let defaultToken = null;

  const loginTokenSetTime = localStorage.getItem("loginTokenSetTime");
  console.log((loginTokenSetTime - Date.now()) / 60000);
  console.log("delete LocalStorag");
  if ((Date.now() - loginTokenSetTime) / 60000 <= 5000) {
    if (localStorage.getItem("isLogin")) {
      defaultToken = localStorage.getItem("loginToken");
    }
  } else {
    console.log("delete LocalStorage Data");
    localStorage.setItem("loginToken", "");
    localStorage.setItem("isLogin", "");
    localStorage.setItem("loginTokenSetTime", "");
  }

  const [token, setToken] = useState(defaultToken);

  const userIsLoggedin = !!token;
  // console.log(userIsLoggedin);
  const login = (token) => {
    setToken(token);
    console.log(token);
    localStorage.setItem("loginToken", token);
    localStorage.setItem("isLogin", true);
    localStorage.setItem("loginTokenSetTime", Date.now());
  };
  const logout = () => {
    localStorage.setItem("loginToken", "");
    localStorage.setItem("isLogin", "");
    localStorage.setItem("loginTokenSetTime", "");
  };
  const contextValue = {
    token: token,
    isLogin: userIsLoggedin,
    login: login,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
