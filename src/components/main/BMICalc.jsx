import { useState } from "react";
import CtaBtn from "../CtaBtn";
import SectionHeader from "../SectionHeader";
import FadeInSection from "../FadeInSection";

function BMICalc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const ageNum = parseInt(age);

    if (!weightInKg || !heightInM || heightInM <= 0 || !ageNum) {
      setBmi(null);
      setCategory("Invalid input");
      return;
    }

    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(1));
    setCategory(getBMICategory(bmiValue));

    if (ageNum < 18) {
      setCategory(
        `${getBMICategory(
          bmiValue
        )}, But Use child BMI charts for accurate results`
      );
    } else {
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <div className="bmi-bg  px-8 py-12 pb-15 lg:pb-20 lg:px-[5rem] overflow-hidden">
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

      <FadeInSection delay={0.4}>
        <form
          className="mt-12 md:text-[1.35rem] lg:text-[1.55rem] tracking-wider"
          onSubmit={calculateBMI}
        >
          <div className="flex flex-col gap-[3rem] ">
            <div>
              <label htmlFor="weight">Weight (kg):</label>
              <input
                type="number"
                id="weight"
                className=" bmi-input"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="height">Height (cm):</label>
              <input
                type="number"
                id="height"
                className="bmi-input"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                className="bmi-input"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {bmi && (
              <div className="flex justify-center items-center flex-col gap-7 uppercase">
                <p className="flex justify-center items-center ">
                  Your BMI is
                  <strong className="font-bold text-[1.8rem] ml-3 lg:text-[2rem] text-secondary font-montserrat">
                    {bmi}
                  </strong>
                </p>

                <p className=" border-2 bg-secondary/70 px-10 py-5 rounded-[1rem]  mr-[1rem] font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]font-semibold flex justify-center items-center gap-[1.5rem]">
                  <span>Category:</span>
                  <span>{category}</span>
                </p>
              </div>
            )}
          </div>

          <div className="mt-5 flex justify-center">
            <CtaBtn
              hoverBg="hover:bg-transparent"
              activeBg="active:bg-transparent"
              mobileHoverBg="bg-transparent"
              text="Calculate BMI"
              bg="bg-secondary"
              btnType="submit"
            />
          </div>
        </form>
      </FadeInSection>
    </div>
  );
}

export default BMICalc;
