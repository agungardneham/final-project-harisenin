import LoginForm from "./AuthForm";

const AuthContainer = ({ type }) => {
  return (
    <div className="authlayout__container1">
      <div className="authlayout__container2">
        <h2 className="auth__title">Sign In</h2>
        <LoginForm type={type} />
      </div>
    </div>
  );
};

export default AuthContainer;
