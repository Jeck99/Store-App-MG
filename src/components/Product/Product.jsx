import React from "react";

export default function ProductComponent(props) {
  const { } = props;
  return (
    <div>
      <h1>Product Unit</h1>
      <h2>Product Name: {props.name}</h2>
      <h2>Product Price: {props.price}</h2>
      <h2>Product Quntity: {props.qunt}</h2>
      {props.isInSeasion ? <h2>Product In Seasion</h2> : ''}
    </div>
  );
}