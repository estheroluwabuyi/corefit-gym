function PageHeader({
  title,
  titleColor,
  titleSpan,
  titleSpanColor,
  subtitle,
}) {
  return (
    <section className="min-h-[40vh] w-full component-header-bg lg:px-[5rem] pt-[15rem] pb-[5rem] px-8 text-text flex flex-col justify-center items-center text-center gap-7">
      <h1 className="text-[2rem] md:text-[4rem] font-bold uppercase font-montserrat drop-shadow-lg ">
        <span className={`${titleColor}`}>{title}</span>
        <span className={`${titleSpanColor}`}>{titleSpan}</span>
      </h1>
      <p className="text-text/85 max-w-2xl text-[1.35rem] lg:text-[1.55rem] tracking-wider">
        {subtitle}
      </p>
    </section>
  );
}

export default PageHeader;
