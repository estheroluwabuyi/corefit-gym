import { useState } from "react";

function AboutStory() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div>
      {/* Our Story */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 shadow-2xl p-7 py-10 bg-muted/50 rounded-3xl items-center">
        {/* Image */}

        {!imgLoaded && (
          <div className="w-full h-[200px] ss:h-[250px] sm:h-[300px] md:h-[400px] bg-gray-700 animate-pulse rounded-3xl lg:w-1/2 " />
        )}

        <div className="lg:w-1/2">
          <img
            src="/images/about/community.jpg"
            alt="Gym community story"
            width="300"
            height="250"
            // className="w-full h-auto rounded-lg"
            className={`w-full h-auto rounded-lg ${
              imgLoaded ? "block" : "hidden"
            }`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 ">
          <div className="flex flex-col items-center">
            <h2 className="text-[1.5rem] md:text-[1.7rem]  text-center  max-w-2xl mx-auto font-semibold font-montserrat mb-2">
              Our Story
            </h2>
            <div className="h-1.5 w-18 bg-secondary  rounded-full mb-7"></div>
          </div>

          <div className="text-[1.4rem] lg:text-[1.7rem] tracking-wider leading-relaxed sm:max-w-5xl lg:max-w-5xl mb-8 ">
            Founded in 2018, CoreFit began with a simple idea — to create a
            space where everyone feels welcome, regardless of where they are in
            their fitness journey.
            <p className="my-3">
              What started as a small community gym quickly grew into a place of
              transformation — not just of bodies, but of confidence, mindset,
              and lifestyle.
            </p>
            At CoreFit, we believe in energy, encouragement, and growth. We’re
            more than just a gym — we’re a family that pushes, supports, and
            celebrates every milestone with you.
          </div>

          {/*  Story Quote*/}
          <div className="flex justify-center items-center mt-5">
            <div className="w-1.5 h-12 sm:h-7.5 mr-2 bg-text/40 rounded-full "></div>
            <p
              className=" italic text-secondary  font-medium 
                lg:text-1.4rem tracking-wider font-mono "
            >
              “Stronger together — one rep, one goal, one family.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
