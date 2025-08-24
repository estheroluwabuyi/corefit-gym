import { MdEmail, MdSend, MdLocationOn, MdPhone } from "react-icons/md";

function FooterContactInfo() {
  return (
    <section className="flex flex-col  text-text/85 text-[1.25rem] lg:text-[1.45rem] justify-center items-center">
      <h1 className="font-bold uppercase text-text text-[1.8rem] mb-5 md:text-[2.3rem] ">
        <span className="text-secondary">contact</span> info
      </h1>
      <div className="text-center flex flex-col gap-4">
        <p>
          <MdPhone className="inline-block mr-2 text-secondary text-[2rem]" />
          (555) 123-4567
        </p>
        <p>
          <MdEmail className="inline-block mr-2 text-secondary text-[2rem] " />
          support@corefitgym.com
        </p>
        <p>
          <MdLocationOn className="inline-block mr-2 text-secondary text-[2rem]" />
          CoreFit Gym, 401 West Fitness Ave, Brooklyn, NY 11201, USA
        </p>
      </div>
    </section>
  );
}

export default FooterContactInfo;
