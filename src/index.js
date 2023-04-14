import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./contexts/ProductContext";
import AuthContext from "./contexts/AuthContext";
import CartContext from "./contexts/CartContext";
import WishContext from "./contexts/WishContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <CartContext>
        <AuthContext>
          <WishContext>
            <App />
          </WishContext>
        </AuthContext>
      </CartContext>
    </ProductContext>
  </BrowserRouter>
);
