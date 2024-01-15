import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import SwApi from "../pages/SwApi.jsx";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/swapi" element={<SwApi />}></Route>
        <Route
          path="*"
          element={
            <div>
              <h1>404 - Not Found</h1>
              <p>Sorry, the page you are looking for might not exist.</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
