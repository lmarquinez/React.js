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
        <Route path="*" element={<div>Error 404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
