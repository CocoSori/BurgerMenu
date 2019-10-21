import db from "./db";

const updateIngr = (state, ing, quantity) => {
  const newIng = state.currentBurger.engridients[ing] + quantity;
  const newCurrentBurger = { ...state.currentBurger };
  newCurrentBurger.engridients[ing] = newIng;
  const newTotalCost =
    state.currentBurger.totalCost + quantity * state.cost[ing];
  newCurrentBurger.totalCost = newTotalCost;
  return { ...state, currentBurger: newCurrentBurger };
};

const addBurgerOrder = (state, payload) => {
  return { ...state, order: [...state.order, payload] };
};

const removeOrderItem = (state, idx) => {
  const newOrder = [
    ...state.order.slice(0, idx),
    ...state.order.slice(idx + 1)
  ];
  return { ...state, order: newOrder };
};

const reducer = (state = db, action) => {
  switch (action.type) {
    case "PICK_BURGER":
      return { ...state, currentBurger: action.payload };
    case "INC_ING":
      return updateIngr(state, action.payload, 1);
    case "DEC_ING":
      return updateIngr(state, action.payload, -1);
    case "REMOVE_ORDER_ITEM":
      return removeOrderItem(state, action.payload);
    case "ADD_BURGER":
      return addBurgerOrder(state, action.payload);
    case "SEND_ORDER":
      return { ...state, order: [] };

    default:
      return state;
  }
};

export default reducer;
