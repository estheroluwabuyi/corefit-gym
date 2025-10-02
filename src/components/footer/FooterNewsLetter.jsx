import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function FooterNewsLetter() {
  const [input, setInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!", {
      id: "newsletter",
    });

    setInput("");
  };

  return (
    <form
      className="flex flex-col text-[1.25rem] lg:text-[1.45rem] justify-center items-center"
      onSubmit={handleForm}
    >
      <h1 className="font-bold uppercase text-[1.8rem] md:text-[2.3rem] mb-5">
        NEWS<span className="text-secondary">LETTER</span>
      </h1>
      <p className="tracking-wider max-w-2xl md:max-w-full text-center  text-text/85">
        Get Fitness tips & updates straight to your inbox. Subscribe to our
        newsletter and get
        <span className="font-montserrat font-bold text-text"> 5% off</span>!
      </p>

      <div className="mt-7 flex gap-3 border-text h-[5rem]  outline-none border rounded-[0.5rem] ">
        <input
          type="email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="outline-none px-[1rem] py-[0.5rem]"
          placeholder="Your Email"
        />
        <button className="bg-secondary px-5 py-1 font-semibold rounded-br-[0.5rem] rounded-tr-[0.5rem] uppercase text-[1.2rem] hover:bg-secondary/70 transition-bg duration-600">
          Subscribe
        </button>
      </div>

      <Toaster position="top-right" />
    </form>
  );
}

export default FooterNewsLetter;
