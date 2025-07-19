import { useState } from "react";
import SectionHeader from "../SectionHeader";
import check from "/images/check.svg";
import gymEquipments3 from "/images/value/gym-equipments3.webp";

// import gymClass from "/images/value/value-gym-class.webp";
// import gymClass2 from "/images/value/value-gym-class2.webp";
// import gymClass3 from "/images/value/value-gym-class3.webp";

const sectionA = [
  "Personalised workout plans",
  " Supportive, expert-led classes",
  "Clean, modern workout environment",
  "Flexible schedules for busy lives",
];

function ValueSection() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="bg-dark-alt px-8 py-8 pt-12 lg:px-[5rem]">
      <SectionHeader
        highlight="Your Fitness Partner"
        highlightColor="secondary"
        title="More Than a Gym—"
        titleColor="text"
      />

      <div className="pt-8 md:max-w-5xl lg:max-w-full m-auto">
        <section className="  flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-20">
          {!imgLoaded && (
            <div className="w-full h-[400px] bg-gray-700 animate-pulse rounded-3xl" />
          )}
          <img
            src={gymEquipments3}
            className={`w-full h-auto rounded-3xl mb-8 outline-text outline-3 lg:w-1/2 lg:mb-0 shadow-lg ${
              imgLoaded ? "block" : "hidden"
            }`}
            onLoad={() => setImgLoaded(true)}
            alt="Gym Equipment"
          />

          <div className="flex flex-col md:items-center lg:items-start">
            <h2 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-secondary lg:max-w-2xl mb-4">
              Best Equipment & Expert Trainers
            </h2>
            <p className="md:text-[1.4rem] lg:text-[1.55rem] tracking-wider md:text-center sm:max-w-4xl lg:text-left mb-8">
              We don’t just help you break a sweat—we help you build a
              lifestyle. With top-tier gym equipment and certified trainers who
              care, your goals are always within reach.
            </p>

            <div>
              <ul className="md:text-[1.5rem] lg:text-[1.7rem] tracking-wider list-none flex flex-col gap-7 w-full">
                {sectionA.map((text, index) => (
                  <li key={index} className="flex items-center gap-4 ">
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

            <button className="self-start lg:self-start md:self-center ml-[3rem] bg-transparent py-4 px-8 lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.5rem] lg:text-[1.8rem] border-2 border-secondary font-[600] uppercase tracking-wide text-text transition-all duration-600 hover:bg-secondary active:bg-secondary mt-8  focus:outline-none focus:ring focus:ring-secondary">
              Lets Start
            </button>
          </div>
        </section>

        {/* section: 2 */}
        <section></section>
      </div>
    </div>
  );
}

export default ValueSection;
