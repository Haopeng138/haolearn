import About from '@/pages/about';
import Home from '@/pages/home';
import { Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home></Home>} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
