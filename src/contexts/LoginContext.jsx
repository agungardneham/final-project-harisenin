import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

const CreateLoginStatusContext = createContext();

const LoginProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(() => {
    const savedStatus = localStorage.getItem("loginStatus");
    const userNameCookies = Cookies.get("username");
    if (savedStatus && userNameCookies) {
      return JSON.parse(savedStatus);
    } else if (!savedStatus || !userNameCookies) {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
  }, [loginStatus]);

  return (
    <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </LoginStatusContext.Provider>
  );
};

export const LoginStatusContext = CreateLoginStatusContext;
export default LoginProvider;
