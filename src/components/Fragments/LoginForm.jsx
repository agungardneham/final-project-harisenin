import Anchor from "../Elements/Anchor";
import Button from "../Elements/Button";
import FormInput from "../Elements/FormInput";
import getUser from "../../services/userDB";
import Cookies from "js-cookie";
import useLoginStatus from "../../hooks/useLoginStatus";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const LoginForm = () => {
  // define state and const
  // loginStatus = state to define if the user is logged in or not
  // showLoginStatus = state to show login error message
  const { loginStatus, setLoginStatus, user, setUser } = useLoginStatus();
  const [showLoginStatus, setShowLoginStatus] = useState(false);
  const navigate = useNavigate();

  // debounce the data from API
  const delayedUser = debounce(getUser, 1000);
  useEffect(() => {
    delayedUser((userData) => {
      setUser(userData);
    });
    return () => {
      delayedUser.cancel();
    };
  }, [delayedUser, setUser]);

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // check user data in API
    const enteredEmail = e.target.email.value;
    const enteredPassword = e.target.password.value;
    const userData = user.find((user) => user.email === enteredEmail);

    // check if the password match
    if (userData && userData.password === enteredPassword) {
      setLoginStatus(true);
      setShowLoginStatus(true);
      Cookies.set("username", userData.name);
      Cookies.set("id", userData.id);
      navigate("/");
    } else {
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
