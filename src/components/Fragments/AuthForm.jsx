import Anchor from "../Elements/Anchor";
import Button from "../Elements/Button";
import FormInput from "../Elements/FormInput";

const LoginForm = ({ type }) => {
  return (
    <form
      className="auth-form"
      action={type === "register" ? "/register" : "/login"}
    >
      <div className="auth-form__container">
        <FormInput
          htmlFor="name"
          labelClass={type === "register" ? "auth-form__label" : "hidden"}
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="on"
          spellCheck="false"
          inputClass={type === "register" ? "auth-form__input" : "hidden"}
        >
          Name
        </FormInput>
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
        <FormInput
          htmlFor="confirmPassword"
          labelClass={type === "register" ? "auth-form__label" : "hidden"}
          type="password"
          name="confirmPassword"
          placeholder="***********"
          inputClass={type === "register" ? "auth-form__input" : "hidden"}
        >
          Confirm Password
        </FormInput>
        <div className="auth-form__button-container">
          <Button type="submit" className="auth-form__button">
            {type === "register" ? "Sign Up" : "Login"}
          </Button>
        </div>
      </div>
      {type === "register" && (
        <div className="flex flex-col">
          <div className="auth__desc2">
            <p>
              By clicking the Sign Up button you agree to our Terms Condition
              and Policy Privacy
            </p>
          </div>
          <div className="auth__desc3">
            <p>
              Already have an account? Login{" "}
              <Anchor href="/login" className="no-underline text-[#ff5733]">
                here
              </Anchor>
            </p>
          </div>
        </div>
      )}
      {type === "login" && (
        <div className="auth__desc3">
          <p>
            Doesn&apos;t have an account? Sign Up{" "}
            <Anchor href="/register" className="no-underline text-[#ff5733]">
              here
            </Anchor>
          </p>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
