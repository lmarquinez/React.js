import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Index.jsx";
import Profile from "../pages/Profile/Index.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/*" element={<div>404 Swapi</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
