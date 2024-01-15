import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Page2 from "../pages/Page2.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/page2/:id" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
