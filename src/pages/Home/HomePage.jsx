import React, { useEffect, useState } from "react";
import { useProductContext } from "../../contexts/ProductContext";
import "./home.css";

function HomePage() {
  const { products, getProduct } = useProductContext();

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatches(products.filter((item) => item.brand === "CARTIER"));
  }, [products]);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="divVideo">
        <video
          className="MainVideo"
          loop="loop"
          autoplay="autoplay"
          muted="muted"
        >
          <source
            className="sourceVideo"
            src="https://watchbox-sfcc.imgix.net/home/2022-06-24-New-Arrivals/V03/2022-06-28_NewArrivals_Web_FullBleed_v03.webm"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="HomeCard">
        {watches.map((item) => {
          return (
            <div className="mainHomeBody">
              <div className="homeWatch">
                <a className="aimage" href={`/details/${item.id}`}>
                  <img src={item.image} alt="#" className="imagehome" />
                </a>
                <div className="HomeSecondary">
                  <p className="brandHome">{item.brand}</p>
                  <h2 className="titleHome">{item.title.slice(0, 19)}</h2>
                  <p className="priceHome">{`$${item.price}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
