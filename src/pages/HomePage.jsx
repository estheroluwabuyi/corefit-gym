import Brands from "../components/main/Brands";
import Hero from "../components/header/Hero";
import ValueSection from "../components/main/ValueSection";
import Products from "../components/main/Products";

function HomePage() {
  return (
    <div>
      <Hero />
      <Brands />
      <ValueSection />
      <Products />
    </div>
  );
}

export default HomePage;
