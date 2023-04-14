import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useProductContext } from "../../../contexts/ProductContext";

function DeBethunePage() {
  const { products, getProduct, deleteProduct } = useProductContext();

  const [watches, setWatches] = useState([]);

  const { isAdmin } = useAuthContext();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatches(products.filter((item) => item.brand === "DE BETHUNE"));
  }, [products]);

  return (
    <div>
      <div className="mainrolexImg">
        <img
          className="roleximg"
          src="https://watchbox-sfcc.imgix.net/new-arrivals/2020-07-27-plp-hero-newArrivals-desktop.jpg?auto=compress,format&w=2560"
          alt="rolex"
        />
      </div>
      <div>
        <div className="secondrolexbody">
            <h1  className="titleRolex">De Bethune Watches</h1>       
          <p className="textRolexBody">
            Founded in 2002, De Bethune continues to propel independent luxury
            watchmaking into new directions. Fostering a brand philosophy
            focused on cutting-edge craftsmanship, contemporary technical
            processes, and innovative development, De Bethune creates pieces
            that have never been seen before. Discover entrancing skeletonized
            pieces, proprietary materials, and exquisite movements when you
            browse our pre-owned collection.
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
  );
}

export default DeBethunePage;
