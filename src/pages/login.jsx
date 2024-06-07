import React, { useEffect } from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const login = () => {
  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      window.location.href = "/products";
    }
  }, []);
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default login;
