import {
  FaClipboardList,
  FaDumbbell,
  FaRegCheckCircle,
  FaUsers,
} from "react-icons/fa";
import FadeInSection from "../FadeInSection";

const features = [
  {
    icon: <FaUsers className="text-secondary text-[3rem] ss:text-[5rem]" />,
    value: "150+",
    label: "Happy Clients",
  },
  {
    icon: <FaDumbbell className="text-secondary text-[3rem] ss:text-[5rem]" />,
    value: "20+",
    label: "Expert Coaches",
  },
  {
    icon: (
      <FaClipboardList className="mt-20 text-secondary text-[3rem] ss:text-[5rem]" />
    ),
    value: "15+",
    label: "Custom Plans",
  },
  {
    icon: (
      <FaRegCheckCircle className="mt-20 text-secondary text-[3rem] ss:text-[5rem]" />
    ),
    value: "50+",
    label: "Success Stories",
  },
];

function WhyChooseUs() {
  return (
    <FadeInSection animation="blur" delay={0.5}>
      <section className="mt-[6rem]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[1.5rem] md:text-[1.7rem] text-center mx-auto font-semibold font-montserrat mb-2">
            Why Choose Us
          </h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full mb-7"></div>

          <p className="text-center text-text/80 tracking-wider leading-relaxed text-[1.5rem] mb-20 lg:px-[5rem] 2xl:px-[15rem] px-8 max-w-3xl">
            Get the support, coaching, and community you need to stay committed
            and achieve real progress.
          </p>
        </div>

        <section className="flex flex-col-reverse lg:flex-row  items-center lg:gap-20 mx-auto">
          <div className="relative lg:w-1/2 w-full mt-[7rem] lg:mt-0 ">
            <div className="w-full h-[300px] ss:h-[370px] lg:w-full sm:h-[500px] bg-secondary [clip-path:polygon(0_0,0_100%,100%_100%)]"></div>
            <img
              src="/images/whychooseus/why-choose-us.png"
              alt="Why Choose Us"
              className="absolute top-0 left-0 w-[300px] h-[300px]  ss:w-[370px] ss:h-[370px] sm:w-[500px] sm:h-[500px]"
            />
          </div>

          <div className=" w-full grid gap-x-40 grid-cols-2 lg:w-1/2 max-w-5xl lg:px-[5rem] 2xl:px-[15rem] px-8 ">
            {features.map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-5 flex justify-center ">
                  {item.icon}
                </div>

                <h3 className="text-secondary  text-[2.5rem] font-bold font-russo tracking-wider">
                  {item.value}
                </h3>

                <p
                  className="text-text/80 mt-2 font-montserrat text-[1.13rem] ss:text-[1.35rem]  md:text-[1.45rem] 
                tracking-wider"
                >
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
