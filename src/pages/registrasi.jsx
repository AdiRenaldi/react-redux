import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegistrasi from "../components/Fragments/FormRegistrasi";

const registrasi = () => {
  return (
    <>
      <AuthLayouts title="Registrasi" type="registrasi">
        <FormRegistrasi />
      </AuthLayouts>
    </>
  );
};

export default registrasi;
