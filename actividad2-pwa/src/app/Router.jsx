import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Layout from "../components/Layout/Layout";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
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
