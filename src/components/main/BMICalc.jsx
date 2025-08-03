import SectionHeader from "../SectionHeader";

function BMICalc() {
  return (
    <div className="bg-dark-alt  px-8 py-12 pb-15 lg:pb-20 lg:px-[5rem]">
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
    </div>
  );
}

export default BMICalc;
