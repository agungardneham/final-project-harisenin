import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthContainer = ({ type }) => {
  return (
    <div className="authlayout__container1">
      <div className="authlayout__container2">
        <h2 className="auth__title">Sign In</h2>
        {type === "login" && <LoginForm />}
        {type === "register" && <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthContainer;
