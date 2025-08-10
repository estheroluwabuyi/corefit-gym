import CtaBtn from "../CtaBtn";
import SectionHeader from "../SectionHeader";

function BMICalc() {
  return (
    <div className="bmi-bg  px-8 py-12 pb-15 lg:pb-20 lg:px-[5rem]">
      <SectionHeader
        title="Let's Check "
        highlight="Your BMI"
        highlightColor="secondary"
        titleColor="text"
      />

      <p className="md:text-[1.35rem] lg:text-[1.55rem] tracking-wider sm:max-w-5xl lg:max-w-7xl text-center mx-auto">
        Body Mass Index (BMI) is a quick way to gauge whether you're in a
        healthy weight range based on your height and weight. Find out now —
        it's fast and free.
      </p>

      <form className="md:text-[1.35rem] lg:text-[1.55rem] tracking-wider">
        <div className="flex flex-col gap-[3rem] ">
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" className=" bmi-input" required />
          </div>

          <div>
            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" className="bmi-input" required />
          </div>

          <div>
            <label htmlFor="height">Age:</label>
            <input type="text" id="age" className="bmi-input" required />
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <CtaBtn
            hoverBg="hover:bg-transparent"
            activeBg="active:bg-transparent"
            mobileHoverBg="bg-transparent"
            text="Calculate BMI"
            bg="bg-secondary"
            btnType="submit"
            // func={handleNavigate}
          />
        </div>
      </form>
    </div>
  );
}

export default BMICalc;
