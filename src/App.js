import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import CantidadCoches from "./components/CantidadCoches";
import CompraCoches from "./components/CompraCoches";
import store from "./redux/store";

import { Provider } from "react-redux";
import CantidadCochesHook from "./components/CantidadCoches.hook";
import CompraCochesHook from "./components/CompraCoches.hook";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div>
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div>
                  <img
                    src={require("./img/coche.png")}
                    alt="coches"
                    className="card-img"
                  ></img>
                </div>
                <div>
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadCochesHook />
                    </div>
                    <CompraCochesHook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
