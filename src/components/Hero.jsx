import heroImg from "/images/bg.webp";

function Hero() {
  return (
    <header className="bg-black pt-[15rem] lg:pt-[11rem] hero-bg px-8 flex justify-center items-center lg:items-start lg:px-[5rem] flex-col lg:flex-row gap-8 relative">
      <div className="text-center lg:text-left self-center">
        <h1 className="font-montserrat font-[800] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] uppercase">
          <span className="text-secondary text-shadow-orange">Conquer.</span>{" "}
          <span className="text-text text-shadow-orange">Build.</span> <br />
          <span className="text-text text-shadow-orange">Dominate.</span>{" "}
          <span className="text-secondary text-shadow-orange">Repeat.</span>
        </h1>

        <p className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.55rem] font-[500] mt-4 md:max-w-3xl tracking-wider">
          Stop settling. Push past limits, break through excuses, and forge
          unshakable strength. Your transformation starts here.
        </p>
        <button className="bg-secondary py-4 px-8  lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.5rem] lg:text-[1.8rem] border-2 border-transparent font-[600] uppercase tracking-wide text-text hover:bg-transparent transition-all duration-600 hover:border-secondary mt-8 mb-4 lg:mb-0">
          Start Training
        </button>
      </div>

      <div className="lg:self-end">
        <img
          src={heroImg}
          alt="Hero Image"
          width={400}
          height={400}
          className="w-[300px] sm:w-[500px] lg:w-[600px] max-w-full h-auto object-cover "
        />
      </div>
    </header>
  );
}

export default Hero;
