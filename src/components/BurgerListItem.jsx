import React from "react";
import { NavLink } from "react-router-dom";

const BurgerListItem = ({ addBurger, burger }) => {
  const { eng, imgUrl } = burger.name;
  return (
    <NavLink to="/burger" className="card col-4" onClick={addBurger}>
      <div className="card-body text-center">
        <img src={imgUrl} alt={eng} />
        <h3>{eng}</h3>
      </div>
    </NavLink>
  );
};
export default BurgerListItem;
