import { FaDragon, FaHorseHead, FaWolfPackBattalion } from "react-icons/fa";
import { GiLion } from "react-icons/gi";
import FadeInSection from "../FadeInSection";

const plansInfo = [
  {
    title: 'Starter Horse',
    text: 'Building consistency & mastering the fundamentals',
    icon: <FaHorseHead className="text-gray-400" />,
    color: 'gray-400'
  },
  {
    title: 'Basic Wolf',
    text: 'Pack mentality with group classes & community support',
    icon: <FaWolfPackBattalion className="text-blue-400" />,
    color: 'blue-400'
  },
  {
    title: 'Premium Lion',
    text: 'King of the gym with premium benefits & exclusive access',
    icon: <GiLion className="text-yellow-500 " />,
    color: 'yellow-500'
  },
  {
    title: 'Elite Dragon',
    text: 'Unlimited power, exclusive privileges & complete transformation',
    icon: <FaDragon className="text-purple-500" />,
    color: 'purple-500'
  },

];

const borderColors = {
  "gray-400": "hover:border-gray-400/30",
  "blue-400": "hover:border-blue-400/30",
  "yellow-500": "hover:border-yellow-500/30",
  "purple-500": "hover:border-purple-500/30",
};


function PricingFitnessEvolution() {
  return (<div
    className=" mx-auto text-center mb-16"
  >
    <div className="flex flex-col items-center mt-17">
      <h2 className="text-[1.5rem] md:text-[1.7rem] text-center mx-auto font-semibold font-montserrat mb-2">
        Your Fitness Evolution
      </h2>
      <div className="h-1.5 w-20 bg-secondary  rounded-full mb-7"></div>
    </div>

    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl lg:max-w-[1200px] mx-auto ">

      {plansInfo.map((plan, i) => (
        <FadeInSection animation="blur" delay={0.3} key={i} className={`text-center p-6 bg-black/40 rounded-xl border border-white/15  ${borderColors[plan.color]} transition-all duration-500`}>
          <div className=" text-[5rem] mb-4 lg:text-[7rem]">
            {plan.icon}
          </div>
          <h4 className={`mb-2 text-[2rem] uppercase font-russo text-${plan.color}`}>{plan.title}</h4>
          <p className="text-text/70 tracking-wider">
            {plan.text}. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </FadeInSection>
      ))}
    </div>
  </div>
  )
}

export default PricingFitnessEvolution;
