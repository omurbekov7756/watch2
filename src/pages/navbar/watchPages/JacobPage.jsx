import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useProductContext } from "../../../contexts/ProductContext";

function JacobPage() {
  const { products, getProduct, deleteProduct } = useProductContext();

  const [watches, setWatches] = useState([]);

  const { isAdmin } = useAuthContext();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatches(products.filter((item) => item.brand === "JACOB & Co"));
  }, [products]);

  return (
    <div>
      <div className="mainrolexImg">
        <img
          className="roleximg"
          src="https://content.thewosgroup.com/wosus/brands/jacob-and-co/jco-desktop-hero-banner.jpg"
          alt="rolex"
        />
      </div>
      <div>
        <div className="secondrolexbody">
            <h1 className="titleRolex">Jacob & Co Watches</h1>
          <p className="textRolexBody">
            Feat of watchmaking, design and engineering, taking the celestial
            display so integral to seafarers, astronomers and ancient horologers
            and placing it on your wrist. Never before seen in watchmaking, the
            Astronomia Sky introduces a three-dimensional sidereal display.
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

export default JacobPage;
