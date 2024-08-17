import React from "react";
import { useDispatch } from "react-redux";
import {
  buy_car_action,
  sell_car_action,
} from "../redux/actions/carShopAction";

const CompraCochesHook = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-dark btn-sm mb-2"
        onClick={() => {
          dispatch(buy_car_action(1));
        }}
      >
        Comprar coche
      </button>
      <button
        className="btn btn-dark btn-sm mb-2"
        onClick={() => {
          dispatch(sell_car_action(1));
        }}
      >
        Vender coche
      </button>
    </div>
  );
};

export default CompraCochesHook;
