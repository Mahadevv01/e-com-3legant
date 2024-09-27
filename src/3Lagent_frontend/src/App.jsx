import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import SignIn from './features/Auth/SignIn';
import SignUp from './features/Auth/SignUp';
import CheckoutLayout from './layouts/CheckoutLayout';
import CompleteLayout from './layouts/CompleteLayout';
import ProductDetailsLayout from './layouts/ProductDetailsLayout';
import CartLayout from './layouts/CartLayout';
import ProductLayout from './layouts/ProductLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData && storedUserData.isAuth === true) {
      setIsAuth(true);
    }
  }, []);

  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<MainLayout />} />
              <Route path="/shop" element={<ProductLayout />} />
              <Route path="/product" element={<ProductDetailsLayout />} />
              <Route path="/cart" element={<CartLayout />} />
              <Route path="/check" element={<CheckoutLayout />} />
              <Route path="/complete" element={<CompleteLayout />} />
              <Route path="/contact" element={<Contact />} />
            </>
          ) : (
            <>
              <Route path="/" element={<SignIn setIsAuth={setIsAuth} />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </main>
  );
}

export default App;