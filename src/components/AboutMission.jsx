import { FaDumbbell, FaUsers, FaFire, FaLeaf, FaBrain } from "react-icons/fa";

const missionPoints = [
  {
    icon: <FaUsers size={25} className="text-blue-500" />,
    text: "To build a supportive, inclusive community that celebrates every milestone.",
  },
  {
    icon: <FaDumbbell size={25} className="text-red-500" />,
    text: "To empower individuals to reach their peak physical and mental fitness.",
  },
  {
    icon: <FaFire size={25} className="text-orange-500" />,
    text: "To inspire consistency and discipline—on and off the gym floor.",
  },
  {
    icon: <FaLeaf size={25} className="text-green-500" />,
    text: "To encourage healthy eating habits and overall wellness.",
  },
  {
    icon: <FaBrain size={25} className="text-purple-500" />,
    text: "To support mental resilience and a positive mindset.",
  },
];

function AboutMission() {
  return (
    <section className="mt-16 bg-dark-alt py-12 rounded-xl shadow-lg max-w-7xl mx-auto font-permanent">
      <div className="bg-black/90 p-12 rounded-xl relative">
        <div className="flex flex-col items-center">
          <h2 className="text-[2.5rem] lg:text-[3rem] font-caveat  text-center mb-3">
            Our Mission
          </h2>
          <div className="h-1.5 w-20 bg-secondary  rounded-full mb-10"></div>
        </div>

        <ul className="space-y-12 flex flex-col items-start md:items-center">
          {missionPoints.map((point, i) => (
            <li key={i} className="flex items-center gap-4">
              {point.icon}
              <p className=" sm:text-[1.5rem] leading-relaxed">{point.text}</p>
            </li>
          ))}
        </ul>

        <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-dashed border-white/40 rounded-xl pointer-events-none"></div>
      </div>
    </section>
  );
}

export default AboutMission;
