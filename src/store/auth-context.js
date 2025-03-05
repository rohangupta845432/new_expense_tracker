import { createContext, useState } from "react";

const AuthContext = createContext({
  isLogin: null,
  token: "",
  user: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let defaultToken = null;
  let defaultUser = "";
  const loginTokenSetTime = localStorage.getItem("loginTokenSetTime");
  console.log(loginTokenSetTime - Date.now() / 1000);
  console.log("delete LocalStorag");
  if (Date.now() / 1000 - loginTokenSetTime < 3600) {
    if (localStorage.getItem("isLogin")) {
      defaultToken = localStorage.getItem("loginToken");
      defaultUser = localStorage.getItem("user");
    }
  } else {
    console.log("delete LocalStorage Data");
    localStorage.setItem("loginToken", "");
    localStorage.setItem("isLogin", "");
    localStorage.setItem("loginTokenSetTime", "");
  }

  const [token, setToken] = useState(defaultToken);
  const [user, setUser] = useState(defaultUser);
  const userIsLoggedin = !!token;
  // console.log(userIsLoggedin);
  const login = (token, email) => {
    setToken(token);
    setUser(email);
    console.log(token);
    localStorage.setItem("loginToken", token);
    localStorage.setItem("user", email);
    localStorage.setItem("isLogin", true);
    localStorage.setItem("loginTokenSetTime", Date.now() / 1000);
  };

  const logout = () => {
    setToken("");
    localStorage.setItem("loginToken", "");
    localStorage.setItem("user", "");
    localStorage.setItem("isLogin", "");
    localStorage.setItem("loginTokenSetTime", "");
  };
  const contextValue = {
    token: token,
    user: user,
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
