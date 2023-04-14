import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API, LIMIT } from "../utils/const";
import axios from "axios";
import { async } from "@firebase/util";

const productContext = createContext();

export function useProductContext() {
  return useContext(productContext);
}

const initState = {
  products: [],
  oneProduct: null,
  pageTotalCount: 1,
  categoryList: [],
  rolexList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.pageTotalCount: {
      return { ...state, pageTotalCount: action.payload };
    }
    case ACTIONS.getCategory:
      return { ...state, categoryList: action.payload };
    case ACTIONS.getRolex:
      return { ...state, rolexList: action.payload };
    default:
      return state;
  }
}

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getCategory() {
    const res = await axios.get(API);
    dispatch({
      type: ACTIONS.getCategory,
      payload: [...new Set([...res.data.map((item) => item.category)])],
    });
  }


  async function getOnlyOneProduct(id) {
    const res = await axios.get(API);
    dispatch({
      type: ACTIONS.products,
      payload: [...new Set([...res.data.filter((item) => item.id === "2")])],
    });
  }

  async function getProduct() {
    try {
      const res = await axios.get(`${API}${window.location.search}`);
      const totalPages = Math.ceil(+res.headers["x-total-count"] / LIMIT);
      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalPages,
      });

      dispatch({
        type: ACTIONS.products,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.oneProduct,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }

  async function editProduct(id, prodEdit) {
    try {
      await axios.patch(`${API}/${id}`, prodEdit);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }
  const value = {
    getOnlyOneProduct,
    getCategory,
    categoryList: state.categoryList,
    pageTotalCount: state.pageTotalCount,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    addProduct: addProduct,
    getProduct: getProduct,
    products: state.products,
    getOneProduct: getOneProduct,
    oneProduct: state.oneProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
