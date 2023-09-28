import Anchor from "../Elements/Anchor";
import Button from "../Elements/Button";
import FormInput from "../Elements/FormInput";
import userDB from "../../services/userDB";
import Cookies from "js-cookie";
import useLoginStatus from "../../hooks/useLoginStatus";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { loginStatus, setLoginStatus } = useLoginStatus();
  const [showLoginStatus, setShowLoginStatus] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // check user data in database
    const enteredEmail = e.target.email.value;
    const enteredPassword = e.target.password.value;

    const user = userDB.find((user) => user.email === enteredEmail);

    if (user && user.password === enteredPassword) {
      setLoginStatus(true);
      setShowLoginStatus(true);
      Cookies.set("username", user.name);
      navigate("/");
    } else {
      // setLoginStatus(false);
      setShowLoginStatus(true);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <div className="auth-form__container">
        <FormInput
          htmlFor="email"
          labelClass="auth-form__label"
          type="email"
          name="email"
          placeholder="example@email.com"
          autoComplete="on"
          spellCheck="false"
          inputClass="auth-form__input"
        >
          Email
        </FormInput>
        <FormInput
          htmlFor="password"
          labelClass="auth-form__label"
          type="password"
          name="password"
          placeholder="***********"
          inputClass="auth-form__input"
        >
          Password
        </FormInput>
        {showLoginStatus && (
          <div
            className={`font-lato ${
              loginStatus ? "text-[#1ABC9C]" : "text-red-500"
            } font-medium`}
          >
            {loginStatus ? "Login successful!" : "Invalid email or password"}
          </div>
        )}

        <div className="auth-form__button-container">
          <Button type="submit" className="auth-form__button">
            Login
          </Button>
        </div>
      </div>

      <div className="auth__desc3">
        <p>
          Doesn&apos;t have an account? Sign Up{" "}
          <Anchor href="/register" className="no-underline text-[#ff5733]">
            here
          </Anchor>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
