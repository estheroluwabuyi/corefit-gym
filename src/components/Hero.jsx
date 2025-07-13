function Hero() {
  return (
    <header className="bg-black min-h-screen pt-[10rem] hero-bg px-8">
      <div>
        <h1 className="font-montserrat font-[800] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[8rem]">
          TRANSFORM <br />
          <span>YOUR BODY</span>
        </h1>
        <p className="md:text-[1.5rem] lg:text-[1.55rem] font-[500]">
          Join us to sculpt your dream physique and embrace a healthier, more
          vibrant life!
        </p>
        <button className="bg-secondary py-3 px-8 lg:py-4 lg:px-12 rounded-tl-[2rem] rounded-br-[2rem] text-[1.7rem] lg:text-[2rem] font-[500] text-white">
          Gym Now
        </button>
      </div>

      <div className=""></div>
    </header>
  );
}

export default Hero;
