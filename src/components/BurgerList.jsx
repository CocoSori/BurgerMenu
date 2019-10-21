import React from "react";
import BurgerListItem from "./BurgerListItem";
import { connect } from "react-redux";
import * as actions from "../actions";

const BurgerList = ({ burgers, pickBurger }) => {
  const burg = burgers.map(b => {
    return (
      <BurgerListItem addBurger={() => pickBurger(b)} key={b.id} burger={b} />
    );
  });
  return (
    <div className="container">
      <h1 className="text-center">Burgers menu</h1>
      <div className="row">{burg}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { burgers: state.burgers };
};

export default connect(
  mapStateToProps,
  actions
)(BurgerList);
