import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Navigation>
    </div>
  );
}

export default App;
