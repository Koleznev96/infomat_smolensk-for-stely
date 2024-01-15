import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ReactRoutes } from "src/routes";

import { index } from "src/store";

function App() {
  useEffect(() => {
    function handleGestureStart(e: Event) {
      e.preventDefault();
      document.body.style.transform = "scale(0.99)";
    }

    function handleGestureChange(e: Event) {
      e.preventDefault();
      document.body.style.transform = "scale(0.99)";
    }

    function handleGestureEnd(e: Event) {
      e.preventDefault();
      document.body.style.transform = "scale(1)";
    }

    document.addEventListener("gesturestart", handleGestureStart);
    document.addEventListener("gesturechange", handleGestureChange);
    document.addEventListener("gestureend", handleGestureEnd);

    return () => {
      document.removeEventListener("gesturestart", handleGestureStart);
      document.removeEventListener("gesturechange", handleGestureChange);
      document.removeEventListener("gestureend", handleGestureEnd);
    };
  }, []);

  return (
    <BrowserRouter>
      <Provider store={index}>
        <ReactRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
