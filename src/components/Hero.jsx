import heroImg from "/images/bg.webp";

function Hero() {
  return (
    <header className="bg-black min-h-screen pt-[15rem] hero-bg px-8 flex justify-center items-center lg:items-start flex-col lg:flex-row gap-8 ">
      <div className="text-center lg:text-left ">
        <h1 className="font-montserrat font-[800] text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[7rem] uppercase">
          <span className="text-secondary text-shadow-orange">Conquer.</span>{" "}
          <span className="text-text text-shadow-orange">Build.</span> <br />
          <span className="text-text text-shadow-orange">Dominate.</span>{" "}
          <span className="text-secondary text-shadow-orange">Repeat.</span>
        </h1>

        <p className="md:text-[1.5rem] lg:text-[1.55rem] font-[500] mt-4 md:max-w-3xl tracking-wider">
          Stop settling. Push past limits, break through excuses, and forge
          unshakable strength. Your transformation starts here.
        </p>
        <button className="bg-secondary py-4 px-8  lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.5rem] lg:text-[1.8rem] border-2 border-transparent font-[600] uppercase tracking-wide text-text hover:bg-transparent transition-all duration-600 hover:border-secondary mt-8">
          Start Training
        </button>
      </div>

      <div>
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
