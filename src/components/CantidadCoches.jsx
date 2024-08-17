import React, { Component } from "react";
import { connect } from "react-redux";
import car_shop from "../redux/reducers/carShopReducer";

class CantidadCoches extends Component {
  render() {
    return <>Unidades: {this.props.car_shop.cars}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    car_shop: state.car_shop,
  };
};
export default connect(mapStateToProps)(CantidadCoches);
