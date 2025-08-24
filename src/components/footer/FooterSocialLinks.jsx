import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

function FooterSocialLinks() {
  return (
    <section className="flex flex-col justify-center items-center mt-[5rem]">
      <h1 className="font-bold uppercase text-[1.8rem] md:text-[2.3rem] ">
        <span className="text-secondary">Follow </span> us
      </h1>
      <ul className="flex gap-10 mt-5">
        <li>
          <a href="https://facebook.com">
            <FaFacebookF
              size={30}
              className="bg-secondary/80 p-2 rounded-[0.5rem]"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FaXTwitter
              size={30}
              className="bg-secondary/80 p-2 rounded-[0.5rem]"
            />
          </a>
        </li>
        <li>
          <a href="https://youtube.com">
            <FaYoutube
              size={30}
              className="bg-secondary/80 p-2 rounded-[0.5rem]"
            />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <FaInstagram
              size={30}
              className="bg-secondary/80 p-2 rounded-[0.5rem]"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default FooterSocialLinks;
