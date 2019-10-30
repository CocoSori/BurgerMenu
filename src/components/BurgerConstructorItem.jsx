import React from "react";

const BurgerConstructorItem = ({ name, value, cost, inc, dec }) => {
  return (
    <li className="list-group-item text-align-center d-flex">
      <h5 className="justify-content-center align-center mr-auto p-1">
        {value} {name}, total = {value * cost}$
      </h5>
      <div className="btn-group justify-content-end">
        <button className="btn btn-success" onClick={inc}>
          +1
        </button>
        <button disabled={!value} className="btn btn-danger" onClick={dec}>
          -1
        </button>
      </div>
    </li>
  );
};
export default BurgerConstructorItem;
