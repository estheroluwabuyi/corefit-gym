import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import { equipmentItems } from "./utils/equipmentList";

const GymContext = createContext();

function GymProvider({ children }) {
  const [equipments, setEquipments] = useState(equipmentItems);

  return (
    <GymContext.Provider value={{ equipments, setEquipments }}>
      {children}
    </GymContext.Provider>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{!isLoaded && <Preloader />}</AnimatePresence>

      {isLoaded && (
        <GymProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route index element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </GymProvider>
      )}
    </>
  );
}

export default App;
export { GymContext };
