import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useProductContext } from "../../contexts/ProductContext";
import "./allWatchPage.css";

function AllWatch({ item }) {
  const { deleteProduct } = useProductContext();

  const { isAdmin } = useAuthContext();

  return (
    <div style={{ textDecoration: "none", maxWidth: 345, marginTop: "30px" }}>
      <div className="cardWatch">
        <a href={`/details/${item.id}`}>
          <img src={item.image} alt="#" className="imageWatch" />
        </a>
        <div className="bodyWatch">
          <p className="brandWatch">{item.brand}</p>
          <h2 className="titleWatch">{item.title.slice(0, 19)}</h2>
          <p className="priceWatch">{`$${item.price}`}</p>

          <div className="allButtons">
            {isAdmin() ? (
              <>
                <button
                  onClick={() => deleteProduct(item.id)}
                  className="buttonDelWatch"
                >
                  Delete
                </button>
                <a
                  style={{ textDecoration: "none" }}
                  href={`/edit/${item.id}`}
                  className="buttonEdWatch"
                >
                  Edit
                </a>
              </>
            ) : null}

            <a
              style={{ textDecoration: "none" }}
              className="buttonDetWatch"
              href={`/details/${item.id}`}
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllWatch;
