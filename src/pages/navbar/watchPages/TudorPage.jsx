import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useProductContext } from "../../../contexts/ProductContext";

function TudorPage() {
  const { products, getProduct, deleteProduct } = useProductContext();

  const [watches, setWatch] = useState([]);

  const { isAdmin } = useAuthContext();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatch(products.filter((item) => item.brand === "TUDOR"));
  }, [products]);

  return (
    <div>
      <div className="mainrolexImg">
        <img
          className="roleximg"
          src="https://watchbox-sfcc.imgix.net/plp/2022_12_22_PLP+Handoff/PLP+Web+Crop/PLP+Updates_Tudor+Pelagos+FXD+web.jpg?auto=compress,format&w=2560"
          alt="rolex"
        />
      </div>
      <div>
        <div className="secondrolexbody">
            <h1 className="titleRolex">Tudor Watches</h1>
          <p className="textRolexBody">
            Created in 1926 by Rolex’s founder, Hans Wilsdorf, Tudor watches are
            known for their exceptional quality and versatility. With robust
            models like the Tudor Submariner and Black Bay, Tudor offers an
            array of unique timepieces for men and women. Browse our unrivaled
            assortment of pre-owned luxury Tudor watches in pristine condition.
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

export default TudorPage;
