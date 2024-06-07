import React, { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/index";
import { login } from "../../Services/authService";

const FormLogin = () => {
  const [loginFiled, setLoginFiled] = useState("");
  const handleL = () => {};
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFiled(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFiled && (
        <p className="text-red-500 text-center mb-2">{loginFiled}</p>
      )}
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="jhon doe"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <Button
        classname="bg-blue-600 w-full"
        children="Login"
        type="submit"
        onClick={handleL}
      />
    </form>
  );
};

export default FormLogin;
