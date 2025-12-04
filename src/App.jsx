import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import { GymProvider } from "./contexts/GymContext";
import Layout from "./components/Layout";
import { CartProvider } from "./contexts/CartContext";

import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import CartItemDetails from "./pages/CartItemDetails";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { Toaster } from "react-hot-toast";
import Pricing from "./pages/Pricing";

// Lazy imports
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// const HomePage = lazy(() => import("./pages/HomePage"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Shop = lazy(() => import("./pages/Shop"));
// const CartItemDetails = lazy(() => import("./pages/CartItemDetails"));
// const About = lazy(() => import("./pages/About"));
// const Blog = lazy(() => import("./pages/Blog"));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 1500);
    };

    window.addEventListener("load", handleLoad);

    const fallback = setTimeout(() => setIsLoaded(true), 4000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && <Preloader key="preloader" />}
      </AnimatePresence>

      {isLoaded && (
        <GymProvider>
          <CartProvider>
            <Toaster position="top-right" />
            <BrowserRouter>
              <ScrollToTop />
              {/* <Suspense fallback={null}> */}
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route index element={<HomePage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/shop/:id" element={<CartItemDetails />} />
                </Route>
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              {/* </Suspense> */}
            </BrowserRouter>
          </CartProvider>
        </GymProvider>
      )}
    </>
  );
}

export default App;
