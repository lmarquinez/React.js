import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";
import Product from "../pages/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
