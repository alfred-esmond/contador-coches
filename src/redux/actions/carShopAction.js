export const BUY_CAR = "BUY_CAR";
export const SELL_CAR = "SELL_CAR";

export const buy_car_action = (cant) => {
  return {
    type: BUY_CAR,
    payload: cant,
  };
};

export const sell_car_action = (cant) => {
  return {
    type: SELL_CAR,
    payload: cant,
  };
};
