import Brands from "../components/main/Brands";
import Hero from "../components/header/Hero";
import ValueSection from "../components/main/ValueSection";
import Products from "../components/main/Products";
import BMICalc from "../components/main/BMICalc";

function HomePage() {
  return (
    <div>
      <Hero />
      <Brands />
      <ValueSection />
      <Products />
      <BMICalc />
    </div>
  );
}

export default HomePage;
