import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useProductContext } from "../../../contexts/ProductContext";
import "./rolex.css";

function RolexPage() {
  const { products, getProduct, deleteProduct } = useProductContext();

  const [watches, setWatches] = useState([]);

  const { isAdmin } = useAuthContext();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatches(products.filter((item) => item.brand === "ROLEX"));
  }, [products]);

  return (
    <div>
      <div className="mainrolexImg">
        <img
          className="roleximg"
          src="https://watchbox-sfcc.imgix.net/plp/Rolex+PLP.jpg?auto=compress,format&w=2560"
          alt="rolex"
        />
      </div>
      <div>
        <div className="secondrolexbody">
            <h1 className="titleRolex">Rolex Watches</h1>
          <p className="textRolexBody">
            No name in the watch world approaches the stature of Rolex watches.
            Literally a synonym for quality and a household name that transcends
            the watch industry, Rolex is both an impeccable manufacture of
            segment-leading products and an article of international pop
            culture.
          </p>
        </div>
      </div>
      <div>
        <div className="secrolebody">
          <a href="https://go.2gis.com/2sg4y">
            <img
              className="changinImg"
              src="https://watchbox-sfcc.imgix.net/editorials/03-23-2023/2023.01.18-Content-Blocks-locations.gif"
              alt=""
            />
          </a>
        </div>
        <div className="WatchBody">
          {watches.map((watch) => (
            <>
              <div className="cardWatch">
                <a href={`/details/${watch.id}`}>
                  <img src={watch.image} alt="#" className="imageWatch" />
                </a>
                <div className="bodyWatch">
                  <p className="brandWatch">{watch.brand}</p>
                  <h2 className="titleWatch">{watch.title.slice(0, 19)}</h2>
                  <p className="priceWatch">{`$${watch.price}`}</p>

                  <div className="allButtons">
                    {isAdmin() ? (
                      <>
                        <button
                          onClick={() => deleteProduct(watch.id)}
                          className="buttonDelWatch"
                        >
                          Delete
                        </button>
                        <a
                          style={{ textDecoration: "none" }}
                          href={`/edit/${watch.id}`}
                          className="buttonEdWatch"
                        >
                          Edit
                        </a>
                      </>
                    ) : null}

                    <a
                      style={{ textDecoration: "none" }}
                      className="buttonDetWatch"
                      href={`/details/${watch.id}`}
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RolexPage;
