import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
