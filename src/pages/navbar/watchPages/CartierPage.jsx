import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useProductContext } from '../../../contexts/ProductContext';

function CartierPage() {
  const { products, getProduct, deleteProduct } = useProductContext();

  const [watches, setWatches] = useState([]);

  const { isAdmin } = useAuthContext();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatches(products.filter((item) => item.brand === 'CARTIER'));
  }, [products]);

  return (
    <div>
      <div className="mainrolexImg">
        <img
          className="roleximg"
          src="https://watchbox-sfcc.imgix.net/plp/Cartier.jpg?auto=compress,format&w=2560"
          alt="rolex"
        />
      </div>
      <div>
        <div className="secondrolexbody">
            <h1 className="titleRolex">Cartier Watches</h1>
          <p className="textRolexBody">
            Elegance, sophistication, and class: these are just some of the
            descriptions that come to mind when a Cartier watch is mentioned. As
            one of the oldest jewelers in the world, Cartier is an expert when
            it comes to catering to the whims of celebrities, billionaire
            businessmen, and royalty. The highly diverse line from this company
            is also testament to its versatility. And unlike many innovative
            luxury watchmakers, Cartier actually became popular for their light,
            airy jewelry before it expanded into watch making. Cartier is only
            becoming stronger in the industry as it introduces more luxurious,
            appealing, and cutting-edge watches
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

export default CartierPage;
