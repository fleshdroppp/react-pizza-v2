import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const Notfound = React.lazy(() => import(/* webpackChunkName: "Notfound" */ './pages/Notfound'));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={
            <React.Suspense fallback={<div>Идет загрузка...</div>}>
              <Cart />
            </React.Suspense>
          } />
          <Route path="/pizza/:id" element={
            <React.Suspense fallback={<div>Идет загрузка...</div>}>
              <FullPizza />
            </React.Suspense>
          } />
          <Route path="*" element={
            <React.Suspense fallback={<div>Идет загрузка...</div>}>
              <Notfound />
            </React.Suspense>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
