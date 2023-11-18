import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ReactRoutes } from "src/routes";

function App() {
  return (
    <BrowserRouter>
      <ReactRoutes />
    </BrowserRouter>
  );
}

export default App;
