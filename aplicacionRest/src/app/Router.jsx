import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Index';
import Profile from '../pages/Profile/Index';

const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/:id" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/*" element={<div>404 Swapi</div>} />

  </Routes>
);

export default Router;
