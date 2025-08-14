import Brands from "../components/main/Brands";
import Hero from "../components/header/Hero";
import ValueSection from "../components/main/ValueSection";
import Products from "../components/main/Products";
import BMICalc from "../components/main/BMICalc";
import BlogPreview from "../components/main/BlogPreview";

function HomePage() {
  return (
    <div>
      <Hero />
      <Brands />
      <ValueSection />
      <Products />
      <BMICalc />
      <BlogPreview />
    </div>
  );
}

export default HomePage;
