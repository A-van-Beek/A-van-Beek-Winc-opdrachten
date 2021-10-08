import React from "react";

function Product(props) {
  return (
    <div className="product">
      <h3 className="name">{props.product.name}</h3>
      <p>
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
        - {props.product.description}-{" "}
        <button
          type="button"
          className="button"
          onClick={() => alert(`Description: ${props.product.description}`)}
        >
          Click Me!
        </button>
      </p>
    </div>
  );
}

export default Product;
