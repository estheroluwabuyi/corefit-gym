import Logo from "../Logo";

function FooterBrandAndHours() {
  return (
    <section
      aria-label="About our brand and opening hours"
      className="flex flex-col text-text/85 text-[1.25rem] lg:text-[1.45rem] justify-center items-center"
    >
      <Logo />
      <p className="tracking-wider max-w-2xl md:max-w-full text-center mt-5">
        At CoreFit, we don't just train—we transform. <b />
        Join a community that pushes you to be your best.
      </p>

      <div className="mt-3">
        <h2 className="tracking-wider font-montserrat text-center font-medium ">
          Opening Hours
        </h2>
        <p>
          <span className="font-bold mr-2">Mon — Fri:</span> 6am to 10pm
        </p>
        <p>
          <span className="font-bold mr-2">Sat — Sun:</span> 8am to 8pm
        </p>
      </div>
    </section>
  );
}

export default FooterBrandAndHours;
