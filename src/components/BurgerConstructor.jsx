import React from "react";
import { connect } from "react-redux";
import BurgerConstructorItem from "./BurgerConstructorItem";
import * as actions from "../actions";
import { NavLink } from "react-router-dom";

const BurgerConstructor = ({ burger, cost, incIng, decIng, addBurger }) => {
  if (!burger.name) {
    return <h2>Здесь пока пусто :(</h2>;
  } else {
    let items = [];
    // eslint-disable-next-line
    for (let item in burger.engridients) {
      items.push(
        <BurgerConstructorItem
          key={item}
          name={item}
          value={burger.engridients[item]}
          cost={cost[item]}
          inc={() => incIng(item)}
          dec={() => decIng(item)}
        />
      );
    }

    return (
      <div className="container">
        <h1 className="text-center">{burger.name.eng}</h1>
        <img
          className="d-block mx-auto"
          src={burger.name.imgUrl}
          alt={burger.name.eng}
        />
        <ul className="list-group">{items}</ul>
        <NavLink className="btn btn-info" to="/">
          Back to Menu
        </NavLink>
        <NavLink
          className="btn btn-success"
          to="/order"
          onClick={() => addBurger(burger)}
        >
          TAKE IT!
        </NavLink>
        <h3>Total cost: {burger.totalCost}</h3>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { burger: state.currentBurger, cost: state.cost };
};

export default connect(
  mapStateToProps,
  actions
)(BurgerConstructor);
