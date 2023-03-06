import React from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle'; 
//import Navbar from './components/navbar/navbar'
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Reset from './pages/reset/reset';
import Order from './pages/order/order';
import ProductDetail from './pages/product-detail/product-detail'
import Layout from './layout/layout';
import Cart from './pages/cart/cart';
import CheckOut from './pages/checkout/checkOut';
import {ContentProvider} from './context/context'
import {AuthProvider} from './context/authContext'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ContentProvider>
      <AuthProvider>
      <Layout>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="shop" element={<Portfolio />} />
        <Route path="shop/:shopId" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="order" element={<Order />} />
       
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
        <Route path="register" element={<Register />} />
        
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>

        {/* <Footer/> */}
        </Layout>
        </AuthProvider>
        </ContentProvider>
    </div>
  );
}

export default App;
