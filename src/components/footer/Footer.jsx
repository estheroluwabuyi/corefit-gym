import FooterBrandAndHours from "./FooterBrandAndHours";
import FooterContactInfo from "./FooterContactInfo";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterSocialLinks from "./FooterSocialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      aria-label="Footer"
      className="p-8 py-[5rem] lg:px-[5rem] bg-dark-alt footer-bg 2xl:px-[15rem]"
    >
      <div className="flex flex-col gap-[3rem] md:flex-row ">
        <FooterBrandAndHours />
        <FooterContactInfo />
        <FooterNewsLetter />
      </div>
      <FooterSocialLinks />
      <div className="text-center mt-[5rem] text-[1.3rem] font-semibold font-montserrat tracking-wider md:text-[1.5rem]">
        © {currentYear} CoreFit. All Rights Reserved ~{" "}
        <a
          href="https://github.com/estheroluwabuyi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary!"
        >
          the_code_gal
        </a>
      </div>
    </section>
  );
}

export default Footer;
