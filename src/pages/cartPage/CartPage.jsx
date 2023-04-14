import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import './cartPage.css';

export default function CartPage() {
  const { cart, plusCount, minusCount, deleteProductCart } = useCartContext();
  const navigate = useNavigate();

  console.log(cart);

  return (
    <div className="shopping-cart">
      <div className="upperTitle">
        <p className="PRoductCart">Product</p>
        <p className="PRICECart">Price</p>
        <p className="subTotalCart">SubTotal</p>
      </div>

      {cart.products.map((item) => (
        <div key={item.id} className="item">
          <div
            onClick={() => navigate(`/details/${item.id}`)}
            className="Divup"
          >
            <img className="image123" src={item.image} alt="watch" />
            <div className="columnItem">
              <span className="title">{item.title}</span>
              <span className="title-brand">{item.brand}</span>
            </div>
          </div>

          <div className="description">
            <span>${item.price}</span>
          </div>

          <div className="quantity">
            <button
              onClick={() => plusCount(item.id)}
              className="plusBTN"
              type="button"
              name="button"
            >
              +
            </button>
            <p className="count">{item.count}</p>
            <button
              onClick={() => {
                if (item.count == 1) {
                  deleteProductCart(item.id);
                } else {
                  minusCount(item.id);
                }
              }}
              className="minusBTN"
              type="button"
              name="button"
            >
              -
            </button>
          </div>

          <div className="total-price">${item.subPrice}</div>
        </div>
      ))}
      <span className="subPrice">Total Price: ${cart.totalPrice}</span>
      <button onClick={() => navigate('/order')} className="cartBUTTON">
        Buy All
      </button>
    </div>
  );
}
