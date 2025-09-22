import { useContext } from "react";
import SectionHeader from "../SectionHeader";
import CtaBtn from "../CtaBtn";
import { Link, useNavigate } from "react-router-dom";
import FadeInSection from "../FadeInSection";
import { GymContext } from "../../App";
import ProductsItem from "./ProductsItem";

function Products() {
  const { equipments } = useContext(GymContext);

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/shop");
  }

  return (
    <div className="bg-primary px-8 py-12 pb-15 lg:pb-20 lg:px-[5rem]">
      <SectionHeader
        title="Our "
        highlight="Products"
        highlightColor="text"
        titleColor="secondary"
      />

      <p className="md:text-[1.35rem] lg:text-[1.55rem] tracking-wider sm:max-w-5xl lg:max-w-7xl text-center mx-auto">
        We’ve got the tools to match your hustle. Built for performance, priced
        for you. Ready to power up your home or gym space?
      </p>

      <FadeInSection animation="slide" delay={0.4}>
        <div>
          <div className="grid-small-container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-12 sm:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto">
            {equipments.slice(0, 10).map((item) => (
              <div key={item.id}>
                {item.inStock ? (
                  <Link to={`/shop/${item.id}`}>
                    <ProductsItem item={item} />
                  </Link>
                ) : (
                  <ProductsItem item={item} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <CtaBtn
              hoverBg="hover:bg-transparent"
              activeBg="active:bg-transparent"
              mobileHoverBg="bg-transparent"
              text="See More →"
              bg="bg-secondary"
              func={handleNavigate}
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Products;
