import { BUY_CAR, SELL_CAR } from "../actions/carShopAction";

const default_car_shop = {
  cars: 30,
};

const car_shop = (state = default_car_shop, action) => {
  switch (action.type) {
    case BUY_CAR: {
      return {
        ...state,
        cars: state.cars - action.payload,
      };
    }
    case SELL_CAR: {
      return {
        ...state,
        cars: state.cars + action.payload,
      };
    }

    default:
      return state;
  }
};

export default car_shop;
