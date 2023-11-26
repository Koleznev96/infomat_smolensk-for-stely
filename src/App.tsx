import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { index } from "src/store";
import { ReactRoutes } from "src/routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={index}>
        <ReactRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
