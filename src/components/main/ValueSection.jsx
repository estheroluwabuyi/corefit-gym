import { useState } from "react";
import clsx from "clsx";

import SectionHeader from "../SectionHeader";
import CtaBtn from "../CtaBtn";
import FadeInSection from "../FadInSection";

import check from "/images/check.svg";
import gymEquipments3 from "/images/value/gym-equipments3.webp";
import gymClass from "/images/value/value-gym-class.webp";

const sections = {
  sectionA: {
    heading: "Best Equipment & Expert Trainers",
    texts:
      "  We don’t just help you break a sweat—we help you build a lifestyle. With top-tier gym equipment and certified trainers who care, your goals are always within reach",
    img: gymEquipments3,
    btn: "Start Your Journey",
    alt: "Gym Equipment",
    arr: [
      "Personalised workout plans",
      " Supportive, expert-led classes",
      "Clean, modern workout environment",
      "Flexible schedules for busy lives",
    ],
  },

  sectionB: {
    heading: "Classes Tailored to Your Needs",
    texts:
      "Whether you're looking to build strength, improve flexibility, or just stay active, our wide range of classes keeps things fresh and fun. There's always something for everyone.",
    img: gymClass,
    btn: "Join a Class →",
    alt: "Gym Equipment",
    arr: [
      "HIIT & Strength",
      "Yoga, Stretch & Dance Fit",
      "Cardio Burn",
      "Core Training",
    ],
  },
};

function ValueSection() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { sectionA, sectionB } = sections;

  return (
    <div className="bg-dark-alt px-8 py-12 pb-15 lg:pb-20 lg:px-[5rem]">
      <SectionHeader
        highlight="Your Fitness Partner"
        highlightColor="secondary"
        title="More Than a Gym—"
        titleColor="text"
      />

      <div className="flex flex-col md:flex-row lg:flex-col gap-15 lg:gap-25 mt-8 lg:mt-16">
        {[sectionA, sectionB].map((sec, i) => (
          <FadeInSection key={i} delay={i * 0.4}>
            <section
              className={clsx(
                "flex flex-col lg:justify-between lg:gap-20 ",
                i === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {!imgLoaded && (
                <div className="w-full h-[300px] lg:h-[400px] bg-gray-700 animate-pulse rounded-3xl md:self-center " />
              )}
              <img
                src={sec.img}
                className={`w-full h-auto rounded-3xl mb-8 md:w-[350px] lg:w-1/2 lg:mb-0 md:self-center shadow-lg ${
                  imgLoaded ? "block" : "hidden"
                }`}
                onLoad={() => setImgLoaded(true)}
                alt={sec.alt}
              />

              <div className="flex flex-col lg:items-start">
                <h2 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-secondary lg:max-w-2xl mb-4 md:text-center">
                  {sec.heading}
                </h2>
                <p className="md:text-[1.35rem] lg:text-[1.55rem] tracking-wider sm:max-w-4xl lg:text-left mb-8">
                  {sec.texts}
                </p>

                <div>
                  {/* flex flex-col gap-7  */}

                  <ul
                    className={clsx(
                      "md:text-[1.5rem] lg:text-[1.7rem] tracking-wider list-none w-full flex flex-col gap-7"
                    )}
                  >
                    {sec.arr.map((text, i) => (
                      <li key={i} className="flex items-center gap-4 ">
                        <img
                          src={check}
                          width={22}
                          height={22}
                          className="w-[20px] h-[20px]"
                          alt="check"
                        />
                        {text.trim()}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="self-start lg:self-start md:self-center ml-[3rem]">
                  <CtaBtn
                    text={sec.btn}
                    bg="bg-transparent"
                    hoverBg="hover:bg-secondary"
                    mobileHoverBg="bg-secondary"
                    activeBg="active:bg-secondary"
                  />
                </div>
              </div>
            </section>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}

export default ValueSection;
