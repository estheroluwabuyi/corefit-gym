import SectionHeader from "../SectionHeader";
import check from "/images/check.svg";
import gymEquipments from "/images/value/value-gym-equipments.webp";
import gymEquipments2 from "/images/value/value-gym-equipments2.webp";
import gymEquipments3 from "/images/value/gym-equipments3.jpg";
import gymEquipments4 from "/images/value/gym-equipments.jpg";
import gymEquipments5 from "/images/value/gym-equipments2.jpg";
import gymEquipments6 from "/images/value/gym-equipments3.jpg";

import gymClass from "/images/value/value-gym-class.webp";
import gymClass2 from "/images/value/value-gym-class2.webp";
import gymClass3 from "/images/value/value-gym-class3.webp";

const sectionA = [
  "Personalised workout plans",
  " Supportive, expert-led classes",
  "Clean, modern workout environment",
  "Flexible schedules for busy lives",
];

function ValueSection() {
  return (
    <div className="bg-dark-alt  px-8 py-8 pt-12 lg:px-[5rem]">
      <SectionHeader
        highlight="Your Fitness Partner"
        highlightColor="text"
        title="More Than a Gym—"
        titleColor="secondary"
      />

      <div>
        {/* section: 1 */}
        <section className="">
          {/* img */}
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img
              src={gymEquipments3}
              className="w-full  rounded-2xl shadow-lg"
            />
          </div>
          {/* texts */}
          <div className="flex flex-col gap-[2rem]">
            <h2 className="text-[1.7rem] sm:text-[2rem] lg:text-[3rem] font-bold text-secondary lg:max-w-2xl ">
              Best Equipment & Expert Trainers
            </h2>
            {/* max-w-3xl */}

            <p className=" md:text-[1.4rem] lg:text-[1.55rem] tracking-wider  md:max-w-6xl lg:text-left">
              We don’t just help you break a sweat—we help you build a
              lifestyle. With top-tier gym equipment and certified trainers who
              care, your goals are always within reach.
            </p>

            <ul className="md:text-[1.5rem] lg:text-[1.7rem] tracking-wider  list-none flex flex-col gap-7 w-full">
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

          <button className="bg-secondary py-4 px-8 lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.5rem] lg:text-[1.8rem] border-2 border-secondary font-[600] uppercase tracking-wide text-text hover:bg-transparent transition-all duration-600 hover:border-secondary active:border-secondary mt-8  focus:outline-none focus:ring focus:ring-secondary">
            Lets Start
          </button>
        </section>

        {/* section: 2 */}
        <section></section>
      </div>
    </div>
  );
}

export default ValueSection;
