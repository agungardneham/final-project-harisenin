import AuthContainer from "../Fragments/AuthContainer";
import AuthLogo from "../Fragments/AuthLogo";

const AuthLayouts = ({ type }) => {
  return (
    <section className="auth__container">
      <AuthLogo />
      <AuthContainer type={type} />
    </section>
  );
};

export default AuthLayouts;
