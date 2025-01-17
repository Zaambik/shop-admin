import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Products from './components/pages/products/Products';
import Home from './components/pages/home/Home';
import Delivers from './components/pages/delivers/Delivers';
import Users from './components/pages/users/Users';
import ProductsAdd from './components/pages/products-add/ProductsAdd';
import DeliversAdd from './components/pages/delivers-add/DeliversAdd';
import UsersAdd from './components/pages/users-add/UsersAdd';
import ProductsEdit from './components/pages/products-edit/ProductsEdit';
import DeliversEdit from './components/pages/delivers-edit/DeliversEdit';
import UsersEdit from './components/pages/users-edit/UsersEdit';

import './App.css';

function App() {
   return (
      <div className="App">
         <Header />
         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<Products />} />
               <Route path="/products/add" element={<ProductsAdd />} />
               <Route path="/products/edit/:id" element={<ProductsEdit />} />
               <Route path="/delivers" element={<Delivers />} />
               <Route path="/delivers/add" element={<DeliversAdd />} />
               <Route path="/delivers/edit/:id" element={<DeliversEdit />} />
               <Route path="/users" element={<Users />} />
               <Route path="/users/add" element={<UsersAdd />} />
               <Route path="/users/edit/:id" element={<UsersEdit />} />
               <Route
                  path="*"
                  element={<h1 style={{ textAlign: 'center', paddingTop: '100px', color: 'rgb(57, 86, 115)' }}>Страница не найдена</h1>}
               />
            </Routes>
         </main>
         <Footer />
      </div>
   );
}

export default App;
