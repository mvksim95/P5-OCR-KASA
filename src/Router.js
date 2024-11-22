import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/Notfound';
import Layout from './components/Layout';
import Logement from './pages/Logement';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path=":id" element={<Logement />} />
      </Route>
    </Routes>
  );
};

export default Router;