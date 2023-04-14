import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import { useWishContext } from '../../contexts/WishContext';
import './wishPage.css';

export default function WishPage() {
  const { wish, deleteProductWish } = useWishContext();

  const { addProductToCart, isAlreadyInCart } = useCartContext();

  const navigate = useNavigate();

  return (
    <div className="shopping-wish">
      <div className="wishTitle">
        <div className="wishProduct">Product</div>
        <div className="wishPrice">Price</div>
      </div>

      {wish.products.map((item) => (
        <div key={item.id} className="itemWish">
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

          <div className="wish2Price">
            <span>${item.price}</span>
          </div>

          {isAlreadyInCart(item.id) ? null : (
            <div className="quantityWish">
              <button
                onClick={() => {
                  addProductToCart(item);
                  deleteProductWish(item.id);
                }}
                className="wishBUTTON"
              >
                Add to Bag
              </button>
            </div>
          )}

          <button
            onClick={() => {
              deleteProductWish(item.id);
            }}
            type="button"
            name="button"
            className="XBTN"
          >
            <img
              className="xBTN"
              src="https://media.istockphoto.com/id/688548038/vector/black-x-mark-icon-cross-symbol.jpg?s=1024x1024&w=is&k=20&c=Aen4iUfFjRXYGK4nYht9PXWddBM-KjY5gw0HNgzVnlM="
              alt=""
            />
          </button>
        </div>
      ))}
    </div>
  );
}
