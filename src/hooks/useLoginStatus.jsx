import { useContext } from "react";
import { LoginStatusContext } from "../contexts/LoginContext";

const useLoginStatus = () => {
  const context = useContext(LoginStatusContext);
  if (!context) {
    throw new Error("useLoginStatus must be used within a LoginProvider");
  }
  return context;
};

export default useLoginStatus;
