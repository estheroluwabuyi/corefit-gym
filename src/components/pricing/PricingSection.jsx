import { FaClock, FaDragon, FaHorseHead, FaParking, FaShower, FaUsers, FaWifi, FaWolfPackBattalion } from "react-icons/fa";
import { GiLion } from "react-icons/gi";

const perks = [
  { text: '24/7 Facility Access', icon: <FaClock className="text-green-400" /> },
  { text: 'Free High-Speed Wi-Fi', icon: <FaWifi className="text-blue-400" /> },
  { text: 'Locker Rooms & Showers', icon: <FaShower className="text-cyan-400" /> },
  { text: 'Community Events', icon: <FaUsers className="text-yellow-400" /> },
  { text: 'Free Parking', icon: <FaParking className="text-emerald-400" /> },
];

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


function PricingSection() {
  return (
    <section>
      <div className=" bg-secondary/10 border
       border-secondary/20 rounded-full px-6 py-2 mb-6 text-center mx-auto max-w-3xl text-[1.2rem] text-secondary  tracking-wider font-russo">
        CANCEL ANYTIME • NO HIDDEN FEES
      </div>

      <section className="mt-[3rem] rounded-xl max-w-7xl mx-auto font-permanent">
        <div className="bg-black/90 p-12 rounded-xl relative">
          <div className="flex flex-col items-center">
            <h2 className="text-[2rem] lg:text-[2.5rem]  text-center mb-2">
              Every Membership Includes:
            </h2>
            <div className="h-1.5 w-20 bg-secondary  rounded-full mb-7"></div>
          </div>

          <ul className="space-y-10 mt-3 grid md:grid-cols-2 ">
            {perks.map((p, i) => (
              <li
                className="flex bold text-[1.7rem] tracking-wider font-lato items-center gap-4 leading-relaxed group hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 px-4 py-2 rounded-lg"
                key={i}
              >
                <div className="text-secondary/80 text-[2.5rem]">
                  {p.icon}
                </div>

                <span className="group-hover:text-white transition-colors duration-300 ">
                  {p.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-dashed border-white/40 rounded-xl pointer-events-none"></div>
        </div>
      </section>


      {/* Section 2*/}
      <div
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
            <div className={`text-center p-6 bg-black/40 rounded-xl border border-white/15 hover:border-${plan.color}/30 transition-all duration-500`} key={i}>
              <div className=" text-[5rem] mb-4 lg:text-[7rem]">
                {plan.icon}
              </div>
              <h4 className={`mb-2 text-[2rem] uppercase font-russo text-${plan.color}`}>{plan.title}</h4>
              <p className="text-text/70 tracking-wider">
                {plan.text}. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
