import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

const CreateLoginStatusContext = createContext();

const LoginProvider = ({ children }) => {
  // define state and const
  const [loginStatus, setLoginStatus] = useState(() => {
    // save user login status to localStorage
    const savedStatus = localStorage.getItem("loginStatus");
    // save username to cookie
    const userNameCookies = Cookies.get("username");
    if (savedStatus && userNameCookies) {
      return JSON.parse(savedStatus);
    } else if (!savedStatus || !userNameCookies) {
      return false;
    }
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
  }, [loginStatus]);

  return (
    <LoginStatusContext.Provider
      value={{ loginStatus, setLoginStatus, user, setUser, userId, setUserId }}
    >
      {children}
    </LoginStatusContext.Provider>
  );
};

export const LoginStatusContext = CreateLoginStatusContext;
export default LoginProvider;
