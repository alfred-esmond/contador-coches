import React, { Component } from "react";
import { connect } from "react-redux";

import {
  buy_car_action,
  sell_car_action,
} from "../redux/actions/carShopAction";

class CompraCoches extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-dark btn-sm mb-2"
          onClick={() => {
            this.props.buy_car_action(1);
          }}
        >
          Comprar coche
        </button>

        <button
          className="btn btn-dark btn-sm mb-2"
          onClick={() => {
            this.props.sell_car_action(1);
          }}
        >
          Vender coche
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  buy_car_action,
  sell_car_action,
};

export default connect(null, mapDispatchToProps)(CompraCoches);
