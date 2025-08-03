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
    </div>
  );
}

export default BMICalc;
