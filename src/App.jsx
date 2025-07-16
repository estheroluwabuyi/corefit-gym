import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {!isLoaded ? (
        <Preloader />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route index element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
