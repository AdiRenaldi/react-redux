import { useEffect, useState } from "react";
import { getUsername } from "../../Services/authService";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      setUsername(getUsername(token));
    }
  }, []);
  return username;
};
