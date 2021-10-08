import React from "react";

function Product(props) {
  return (
    <div className="product">
      <h2 className="name">{props.product.name}</h2>
      <p>
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
        - {props.product.description}
      </p>
    </div>
  );
}

export default Product;
