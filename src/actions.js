export const pickBurger = payload => {
  return { type: "PICK_BURGER", payload };
};

export const incIng = payload => {
  return { type: "INC_ING", payload };
};

export const decIng = payload => {
  return { type: "DEC_ING", payload };
};

export const removeOrderItem = payload => {
  return { type: "REMOVE_ORDER_ITEM", payload };
};

export const addBurger = payload => {
  return { type: "ADD_BURGER", payload };
};

export const sendOrder = () => {
  return { type: "SEND_ORDER" };
};
