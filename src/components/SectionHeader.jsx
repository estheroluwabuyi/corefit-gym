function SectionHeader({ title, highlight, titleColor, highlightColor }) {
  return (
    <div>
      <h2
        className={`text-center text-[1.3rem] sm:text-[1.5rem] uppercase lg:text-[2rem] font-montserrat font-bold mb-4 md:mb-10 text-${titleColor} text-shadow-orange`}
      >
        {title}
        <span className={`text-${highlightColor}`}>{highlight}</span>
      </h2>
    </div>
  );
}

export default SectionHeader;
