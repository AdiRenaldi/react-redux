import React, { useContext } from "react";
import { useLogin } from "../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navabar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10">
      {username}
      <Button classname="bg-black ml-5" type="submit" onClick={handleLogout}>
        Logout
      </Button>

      <div className="flex items-center bg-black p-2 rounded-md ml-5 mr-5">
        Item : {totalCart} | Price : ${" "}
        {total.toLocaleString("id-ID", {
          styles: "currency",
          currency: "USD",
        })}
      </div>
      <Button classname="bg-black" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navabar;
