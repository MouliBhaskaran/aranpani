import React from "react";
import CustomLoginForm from "./loginForms/LoginForm";
import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div>
          <h1 className="login-container__heading">
            Welcome back to{" "}
            <span className="login-container__span">Aran Pani</span>
          </h1>
        </div>
        <div className="login-container__loginform">
          <h1 className="login-container__loginform__heading">
            Login to admin portal
          </h1>
          <CustomLoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
