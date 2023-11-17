import React from "react";

import { Header, Slider, Links } from "./components";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
      </div>
      <Slider />
      <div className="wrapper">
        <Links />
      </div>
    </div>
  );
}

export default App;
