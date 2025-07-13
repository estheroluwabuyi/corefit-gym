function Hero() {
  return (
    <header className="bg-black min-h-screen pt-[10rem] hero-bg px-8">
      <div>
        <h1 className="font-montserrat font-[800] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[8rem] uppercase">
          <span className="text-secondary text-shadow-orange">Conquer.</span>{" "}
          <span className="text-text text-shadow-orange">Build.</span> <br />
          <span className="text-text text-shadow-orange">Dominate.</span>{" "}
          <span className="text-secondary text-shadow-orange">Repeat.</span>
        </h1>

        <p className="md:text-[1.5rem] lg:text-[1.55rem] font-[500] mt-4 max-w-3xl tracking-wide">
          Stop settling. Push past limits, break through excuses, and forge
          <span className="text-secondary"> unshakable strength.</span> Your
          transformation starts here.
        </p>
        <button className="bg-secondary py-4 px-8  lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.7rem] lg:text-[2rem] border-2 border-transparent font-[600] uppercase tracking-wide text-text hover:bg-transparent transition-all duration-600 hover:border-secondary mt-8">
          Start Training
        </button>
      </div>

      <div className=""></div>
    </header>
  );
}

export default Hero;
