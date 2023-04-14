import React from 'react';
import filledHeart from './images/filledHeart.png';
import outlinedHeart from './images/outlinedHeart.png';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import { useProductContext } from '../../contexts/ProductContext';
import './details.css';
import { useWishContext } from '../../contexts/WishContext';

function DetailsPage() {
  const { deleteProductCart, isAlreadyInCart, addProductToCart } =
    useCartContext();

  const { oneProduct, getOneProduct } = useProductContext();

  const { deleteProductWish, isAlreadyInWish, addProductToWish } =
    useWishContext();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <>
      {oneProduct ? (
        <div className="mainBodyDet">
          <img src={oneProduct.image} alt="#" className="imageDet" />
          <div className="bodyDet">
            {isAlreadyInWish(oneProduct.id) ? (
              <img
                src={filledHeart}
                className="cartPlusMinusWatch"
                onClick={() => deleteProductWish(oneProduct.id)}
              />
            ) : (
              <img
                src={outlinedHeart}
                className="cartPlusMinusWatch"
                onClick={() => addProductToWish(oneProduct)}
              />
            )}

            <p className="brandDet">{oneProduct.brand}</p>
            <h2 className="titleDet">{oneProduct.title}</h2>
            <p className="priceDet">{`$${oneProduct.price}`}</p>
            <p className="textDet">{`${oneProduct.description.slice(
              0,
              400
            )}...`}</p>
            <h4 className="detailsWatch">Watch Details:</h4>
            <div className="lineDet"></div>
            <p className="textDet">
              Reference Number: {`${oneProduct.ReferenceNumber}`}
            </p>
            <p className="textDet">
              Manufactured In: {`${oneProduct.ManufacturedIn}`}
            </p>
            <p className="textDet">Case Size: {`${oneProduct.CaseSize}`}</p>
            <p className="textDet">Color: {`${oneProduct.Color}`}</p>
            <p className="textDet">
              Water Resistance: {`${oneProduct.WaterResistance}`}
            </p>
            <Link
              style={{ textDecoration: 'none' }}
              to="/order"
              className="editButtonDet"
            >
              Buy Now
            </Link>
            {isAlreadyInCart(oneProduct.id) ? (
              <button
                className="DeleteBTN"
                onClick={() => deleteProductCart(oneProduct.id)}
              >
                Remove From Bag
              </button>
            ) : (
              <button
                onClick={() => addProductToCart(oneProduct)}
                className="DeleteBTN"
                alt=""
              >
                {' '}
                Add To Bag
              </button>
            )}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default DetailsPage;
