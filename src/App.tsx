import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ColorModeProvider } from "src/store/language";

import { ReactRoutes } from "src/routes";

function App() {
  return (
    <BrowserRouter>
      <ColorModeProvider>
        <ReactRoutes />
      </ColorModeProvider>
    </BrowserRouter>
  );
}

export default App;
