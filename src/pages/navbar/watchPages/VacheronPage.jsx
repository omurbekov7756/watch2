import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useProductContext } from '../../../contexts/ProductContext';

function VacheronPage() {
  const { products, getProduct, deleteProduct } = useProductContext();

  const [watches, setWatches] = useState([]);

  const { isAdmin } = useAuthContext();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatches(products.filter((item) => item.brand === 'VACHERON CONSTANTIN'));
  }, [products]);

  return (
    <div>
      <div className="mainrolexImg">
        <img
          className="roleximg"
          src="https://content.thewosgroup.com/wosus/brands/vacheron-constantin/vacheron-hero-desktop-sep20.jpg"
          alt="rolex"
        />
      </div>
      <div>
        <div className="secondrolexbody">
          <h1 className="titleRolex">Vacheron Constantin Watches</h1>
          <p className="textRolexBody">
            Founded in Geneva in 1755, the Maison Vacheron Constantin is the
            world's oldest continuously operating watch manufacturer. For more
            than 260 years, each timepiece embodies the quest for excellence and
            the values cherished by Vacheron Constantin, the loyal custodian of
            unique technical expertise and creativity.
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
                        style={{ textDecoration: 'none' }}
                        href={`/edit/${watch.id}`}
                        className="buttonEdWatch"
                      >
                        Edit
                      </a>
                    </>
                  ) : null}

                  <a
                    style={{ textDecoration: 'none' }}
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

export default VacheronPage;
