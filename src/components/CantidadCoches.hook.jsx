import React from "react";
import car_shop from "../redux/reducers/carShopReducer";
import { useSelector } from "react-redux";

const CantidadCochesHook = () => {
  const car_shop = useSelector((state) => state.car_shop);
  return <>Unidades: {car_shop.cars} </>;
};

export default CantidadCochesHook;
