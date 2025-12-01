import {
  FaClipboardList,
  FaDumbbell,
  FaRegCheckCircle,
  FaUsers,
} from "react-icons/fa";
import FadeInSection from "../FadeInSection";

const features = [
  {
    icon: <FaUsers size={30} className="text-secondary" />,
    value: "150+",
    label: "Happy Clients",
  },
  {
    icon: <FaDumbbell size={30} className="text-secondary" />,
    value: "20+",
    label: "Expert Coaches",
  },
  {
    icon: <FaClipboardList size={30} className="text-secondary" />,
    value: "15+",
    label: "Custom Plans",
  },
  {
    icon: <FaRegCheckCircle size={30} className="text-secondary" />,
    value: "50+",
    label: "Success Stories",
  },
];

function WhyChooseUs() {
  return (
    <FadeInSection animation="blur" delay={0.3}>
      <section className="mt-[6rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-[1.5rem] md:text-[1.7rem] text-center mx-auto font-semibold font-montserrat mb-2">
            Why Choose Us
          </h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full mb-7"></div>

          <p className="text-center max-w-2xl text-text/80 tracking-wide leading-relaxed text-[1.4rem]">
            Your fitness journey deserves the right support. We provide
            personalised guidance, a friendly community, and a space designed to
            help you grow at your own pace.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 max-w-6xl mx-auto mt-14"> */}
        <section>
          <div className="w-[400px] h-[400px] bg-secondary [clip-path:polygon(0_0,0_100%,100%_100%)]"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto mt-14">
            {features.map((item, i) => (
              // <div
              //   key={i}
              //   className="bg-black/90 p-8 rounded-xl shadow-lg border border-white/10 hover:scale-[1.03] transition-transform duration-500 text-center"
              // >
              <div key={i} className=" p-8 rounded-xl  text-center">
                <div className="mx-auto mb-5 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-secondary text-[2rem] font-bold">
                  {item.value}
                </h3>

                <p className="text-text/80 mt-2 text-[1.3rem] tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </FadeInSection>
  );
}

export default WhyChooseUs;
