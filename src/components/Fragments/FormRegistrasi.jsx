import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/index";

const FormRegistrasi = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="Masukkan Nama Lengkap...."
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="********"
      />
      <Button classname="bg-blue-600 w-full" children="Registrasi" />
    </form>
  );
};

export default FormRegistrasi;
