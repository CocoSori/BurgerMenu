import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import OrderItem from "./OrderItem";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const Order = ({ orderList, removeOrderItem, sendOrder }) => {
  const orders = orderList.map((item, i) => (
    <OrderItem
      name={item.name.eng}
      cost={item.totalCost}
      key={i}
      remove={() => removeOrderItem(i)}
    />
  ));
  let totalOrderCost = orderList.reduce((sum, cur) => sum + cur.totalCost, 0);
  return (
    <div>
      <ul className="list-group">{orders}</ul>
      <h3>Total order: {totalOrderCost}$</h3>
      <Modal sendOrder={sendOrder} />
      <NavLink className="btn btn-info" to="/">
        MoreBurgers!
      </NavLink>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Finish Order
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { orderList: state.order };
};

export default connect(
  mapStateToProps,
  actions
)(Order);
