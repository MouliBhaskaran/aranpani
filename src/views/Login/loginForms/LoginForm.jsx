import { useFormik } from "formik";
import { loginSchema } from "./loginValidationSchema";
import "../login.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UserService from "../../../services/AuthService/auth.service";

const CustomLoginForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);

  const service = UserService();
  const onSubmit = async (values, actions) => {
    values = {
      user: { ...values, permissions: [] },
    };
    const trial = await service.loginUser(values);
  };
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  // HANDLE TOOGLE FOR PASSWORD EYE ICON
  const handleToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="formEmail-container">
          <label htmlFor="email" className="formEmail-container__emailLabel">
            Email ID
          </label>
          <input
            id="email"
            onChange={handleChange}
            value={values.email}
            type="email"
            onBlur={handleBlur}
            placeholder="Type Email"
            className="formEmail-container__emailInput"
          />
        </div>

        {errors.email && touched.email && (
          <span className="formEmail-container__emailError">
            {errors.email}
          </span>
        )}

        <div className="formPassword-container">
          {" "}
          <label
            htmlFor="password"
            className="formPassword-container__passwordLabel"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="formPassword-container__passwordInput"
          />
          <span
            className="formPassword-container__eyeIcon"
            onClick={handleToggle}
          >
            {""} {passwordIcon}
          </span>
        </div>

        {errors.password && touched.password && (
          <span className="formPassword-container__passwordError">
            {errors.password}
          </span>
        )}
        
        <Link className="forgotPassword" to="/dashboard">
          {" "}
          Forgot Password ?
        </Link>
        <button className="form-LoginBtn" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default CustomLoginForm;
