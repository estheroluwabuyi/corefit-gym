import { FaClock, FaDragon, FaHorseHead, FaParking, FaShower, FaUsers, FaWifi, FaWolfPackBattalion } from "react-icons/fa";
import { GiLion } from "react-icons/gi";
import { HiCheck } from "react-icons/hi";

const perks = [
  { text: '24/7 Facility Access', icon: <FaClock className="text-green-400" /> },
  { text: 'Free High-Speed Wi-Fi', icon: <FaWifi className="text-blue-400" /> },
  { text: 'Locker Rooms & Showers', icon: <FaShower className="text-cyan-400" /> },
  { text: 'Community Events', icon: <FaUsers className="text-yellow-400" /> },
  { text: 'Free Parking', icon: <FaParking className="text-emerald-400" /> },
];

function PricingSection() {
  return (
    <section>
      <div className=" bg-secondary/10 border
       border-secondary/20 rounded-full px-6 py-2 mb-6 text-center mx-auto max-w-3xl text-[0.9rem] xs:text-[1.1rem] sm:text-[1.2rem] text-secondary  tracking-wider font-russo">
        <span className="">
          NO CONTRACTS • CANCEL ANYTIME • NO HIDDEN FEES
        </span>
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
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h3 className="text-[1.8rem] md:text-[2.2rem] font-bold mb-10 font-montserrat">
          Your <span className="text-secondary">Fitness Evolution</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center p-6 bg-black/40 rounded-xl border border-white/10 hover:border-gray-400/30 transition-colors">
            <div className="text-gray-400 text-5xl md:text-6xl mb-4">
              <FaHorseHead />
            </div>
            <h4 className="font-semibold mb-2 text-lg">Starter Horse</h4>
            <p className="text-text/70 text-sm md:text-base">
              Building consistency & mastering the fundamentals
            </p>
          </div>
          <div className="text-center p-6 bg-black/40 rounded-xl border border-white/10 hover:border-blue-400/30 transition-colors">
            <div className="text-blue-400 text-5xl md:text-6xl mb-4">
              <FaWolfPackBattalion />
            </div>
            <h4 className="font-semibold mb-2 text-lg">Basic Wolf</h4>
            <p className="text-text/70 text-sm md:text-base">
              Pack mentality with group classes & community support
            </p>
          </div>
          <div className="text-center p-6 bg-black/40 rounded-xl border border-white/10 hover:border-yellow-500/30 transition-colors">
            <div className="text-yellow-500 text-5xl md:text-6xl mb-4">
              <GiLion />
            </div>
            <h4 className="font-semibold mb-2 text-lg">Premium Lion</h4>
            <p className="text-text/70 text-sm md:text-base">
              King of the gym with premium benefits & exclusive access
            </p>
          </div>
          <div className="text-center p-6 bg-black/40 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
            <div className="text-purple-500 text-5xl md:text-6xl mb-4">
              <FaDragon />
            </div>
            <h4 className="font-semibold mb-2 text-lg">Elite Dragon</h4>
            <p className="text-text/70 text-sm md:text-base">
              Unlimited power, exclusive privileges & complete transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
