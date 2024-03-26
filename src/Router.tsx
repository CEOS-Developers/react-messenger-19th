import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './components/@common/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
