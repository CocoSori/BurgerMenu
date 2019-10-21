import React from "react";

const OrderItem = ({ name, remove, cost }) => {
  return (
    <li className="list-group-item-info">
      <h5 className="align-middle">
        {name}
        {"  "}
        cost: {cost} $
        <button className="btn btn-danger" onClick={remove}>
          DELETE
        </button>
      </h5>
    </li>
  );
};

export default OrderItem;
