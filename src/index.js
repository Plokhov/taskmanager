import React from "react";
import ReactDOM from "react-dom";

import {Board} from "./components/board.jsx";

const init = () => {
  ReactDOM.render(
      <Board />,
      document.querySelector(`#root`)
  );
};

init();
