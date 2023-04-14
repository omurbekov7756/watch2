import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../utils/const";

const wishContext = createContext();

export function useWishContext() {
  return useContext(wishContext);
}

const initState = {
  wish: {
    products: [],
    totalPrice: 0,
  },
  wishLength: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.wish:
      return { ...state, wish: action.payload };
    case ACTIONS.wishLength:
      return { ...state, wishLength: action.payload };
    default:
      return state;
  }
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("wish"));
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

function WishContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  function getWish() {
    const data = getDataFromLS();
    const quantity = data.products.reduce((acc, item) => acc + item.count, 0);
    dispatch({
      type: ACTIONS.wishLength,
      payload: quantity,
    });
    dispatch({
      type: ACTIONS.wish,
      payload: data,
    });
  }

  function addProductToWish(product) {
    const data = getDataFromLS();
    data.products.push({
      ...product,
      count: 1,
      subPrice: product.price,
    });

    console.log(data);

    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );

    localStorage.setItem("wish", JSON.stringify(data));
    getWish();
  }

  function deleteProductWish(id) {
    const data = getDataFromLS();
    data.products = data.products.filter((item) => item.id !== id);

    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );

    localStorage.setItem("wish", JSON.stringify(data));
    getWish();
  }

  function isAlreadyInWish(id) {
    const data = getDataFromLS();

    const isInwish = data.products.some((item) => item.id === id);
    return isInwish;
  }

  function clearWish() {
    localStorage.removeItem("wish");
    getWish();
  }

  const value = {
    clearWish,
    wishLength: state.wishLength,
    isAlreadyInWish,
    deleteProductWish,
    getWish,
    addProductToWish,
    wish: state.wish,
  };
  return <wishContext.Provider value={value}>{children}</wishContext.Provider>;
}
export default WishContext;
