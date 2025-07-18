function SectionHeader({ title, highlight, titleColor, highlightColor }) {
  return (
    <div>
      <h2
        className={`text-center text-2xl sm:text-[2rem] lg:text-[3rem] font-montserrat font-bold mb-8 text-${titleColor} text-shadow-orange`}
      >
        {title}
        <span className={`text-${highlightColor}`}>{highlight}</span>
      </h2>
    </div>
  );
}

export default SectionHeader;
