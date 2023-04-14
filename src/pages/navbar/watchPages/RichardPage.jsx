import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useProductContext } from '../../../contexts/ProductContext';

function RichardPage() {
  const { products, getProduct, deleteProduct } = useProductContext();

  const [watches, setWatches] = useState([]);

  const { isAdmin } = useAuthContext();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setWatches(products.filter((item) => item.brand === 'RICHARD MILLE'));
  }, [products]);

  return (
    <main>
      <div className="mainrolexImg">
        <img
          className="roleximg"
          src="https://watchbox-sfcc.imgix.net/plp/Moser+PLP_v2.jpg?auto=compress,format&w=2560"
          alt="rolex"
        />
      </div>
      <div>
        <div className="secondrolexbody">
          <h1 className="titleRolex">Richard Mille Watches</h1>
          <p className="textRolexBody">
            Fueled by a passion for innovation, technology, and racing, Richard
            Mille launched his namesake Swiss watch brand in 2001 at the age of
            50. During its impressive history, the brand has accomplished what
            was previously thought to be impossible—introducing the luxury world
            to new innovations in materials, movements, and design. Meet Richard
            Mille and discover the nuances of this captivating brand by
            exploring our pre-owned collection.
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
    </main>
  );
}

export default RichardPage;
