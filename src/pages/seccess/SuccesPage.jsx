import { width } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { useWishContext } from "../../contexts/WishContext";
import { runConfetti } from "../../utils/confetti";

function SuccesPage() {
  const { clearWish } = useWishContext();
  const { clearCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    clearWish();
    clearCart();
    runConfetti();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div
      style={{
        height: "740px",
        width: "1519px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100px",
          width: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Thank you for your order!</h1>
      </div>
    </div>
  );
}

export default SuccesPage;
