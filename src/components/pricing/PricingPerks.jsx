import { FaClock, FaParking, FaShower, FaUsers, FaWifi, } from "react-icons/fa";


const perks = [
    { text: '24/7 Facility Access', icon: <FaClock className="text-green-400" /> },
    { text: 'Free High-Speed Wi-Fi', icon: <FaWifi className="text-blue-400" /> },
    { text: 'Locker Rooms & Showers', icon: <FaShower className="text-cyan-400" /> },
    { text: 'Community Events', icon: <FaUsers className="text-yellow-400" /> },
    { text: 'Free Parking', icon: <FaParking className="text-emerald-400" /> },
];


function PricingPerks() {
    return (
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
    )
}

export default PricingPerks
