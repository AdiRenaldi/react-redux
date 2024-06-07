import React from "react";
import { useRouteError } from "react-router-dom";

const errorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!!</h1>
      <p className="my-3 text-xl">Halaman tidak di ketahui</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default errorPage;
