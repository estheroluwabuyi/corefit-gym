// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <svg width="280" height="60" viewBox="0 0 280 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Dumbbell Icon -->
  <g transform="translate(0,10)">
    <!-- Left plate -->
    <rect x="0" y="0" width="10" height="40" rx="5" fill="#ff5500"/>
    <!-- Bar -->
    <rect x="10" y="17" width="40" height="6" fill="#cccccc"/>
    <!-- Right plate -->
    <rect x="50" y="0" width="10" height="40" rx="5" fill="#ff5500"/>
  </g>
  <!-- Text -->
  <text
    x="70"
    y="35"
    font-family="'Russo One', sans-serif"
    font-size="40"
    fill="#cccccc"
    dominant-baseline="middle"
  >
    CORE
  </text>
  <text
    x="180"
    y="35"
    font-family="'Russo One', sans-serif"
    font-size="40"
    fill="#ff5500"
    dominant-baseline="middle"
  >
    FIT
  </text>
</svg> */
}
//tailwind class
{
  /* <svg viewBox="0 0 280 60" className="w-48 h-auto" ...> */
}

{
  /* <svg
  viewBox="0 0 280 60"
  className="w-64 h-auto"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Dumbbell *
  <g transform="translate(0,10)">
    <rect x="0" y="0" width="10" height="40" rx="5" className="fill-primary" />
    <rect x="10" y="17" width="40" height="6" className="fill-muted" />
    <rect x="50" y="0" width="10" height="40" rx="5" className="fill-primary" />
  </g>
  {/* Text *
  <text
    x="70"
    y="35"
    fontFamily="'Russo One', sans-serif"
    fontSize="40"
    className="fill-muted"
    dominantBaseline="middle"
  >
    CORE
  </text>
  <text
    x="180"
    y="35"
    fontFamily="'Russo One', sans-serif"
    fontSize="40"
    className="fill-accent"
    dominantBaseline="middle"
  >
    FIT
  </text>
</svg> */
}
