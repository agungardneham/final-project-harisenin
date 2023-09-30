import { useState } from "react";
import Anchor from "../Elements/Anchor";
import Button from "../Elements/Button";
import FormInput from "../Elements/FormInput";
import { getUserByEmail, createUser } from "../../services/userDB";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const [registerStatus, setRegisterStatus] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    // Check if email already exists in API
    try {
      const existingUser = await getUserByEmail(formData.email);

      if (existingUser > 0) {
        setRegisterStatus("Email already registered");
        return;
      }
    } catch (error) {
      setRegisterStatus("Error checking email");
      return;
    }

    // Create a new user object
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Create the user and get the response data
      await createUser(newUser);
      // const createdUser = response.data;

      // Check if password and confirmPassword match
      if (formData.password !== formData.confirmPassword) {
        setRegisterStatus("Password does not match");
        return;
      }

      // Reset formData
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setRegisterStatus("Registration successful!");
      alert("Registration successful! Please login to continue.");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error);

      // Set a more informative error message
      setRegisterStatus("Error creating user. Please try again later.");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <div className="auth-form__container">
        <FormInput
          htmlFor="name"
          labelClass="auth-form__label"
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="on"
          spellCheck="false"
          inputClass="auth-form__input"
          value={formData.name}
          onChange={handleInputChange}
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
          value={formData.email}
          onChange={handleInputChange}
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
          value={formData.password}
          onChange={handleInputChange}
        >
          Password
        </FormInput>
        <FormInput
          htmlFor="confirmPassword"
          labelClass="auth-form__label"
          type="password"
          name="confirmPassword"
          placeholder="***********"
          inputClass="auth-form__input"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        >
          Confirm Password
        </FormInput>
        {registerStatus && (
          <div
            className={`font-lato ${
              registerStatus === "Registration successful!"
                ? "text-[#1ABC9C]"
                : "text-red-500"
            } font-medium`}
          >
            {registerStatus}
          </div>
        )}
        <div className="auth-form__button-container">
          <Button type="submit" className="auth-form__button">
            Sign Up
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="auth__desc2">
          <p>
            By clicking the Sign Up button you agree to our Terms Condition and
            Policy Privacy
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
    </form>
  );
};

export default RegisterForm;
