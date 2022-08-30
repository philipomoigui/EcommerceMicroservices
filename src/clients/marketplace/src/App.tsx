import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";
import Contact from "./pages/Contact";

const HomePage = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product"));
const Category = React.lazy(() => import("./pages/Category"));

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            index
            element={
              <Loading>
                <HomePage />
              </Loading>
            }
          />
          <Route
            path="contact-us"
            element={
              <Loading>
                <Contact />
              </Loading>
            }
          />
          <Route path="product">
            <Route
              path=":slug"
              element={
                <Loading>
                  <Product />
                </Loading>
              }
            />
          </Route>
          <Route path="category">
            <Route
              path=":type"
              element={
                <Loading>
                  <Category />
                </Loading>
              }
            />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
