import toast from "react-hot-toast";
import { useReducer } from "react";
import CtaBtn from "./CtaBtn";
import FadeInSection from "./FadeInSection";

const initialState = {
  email: "",
  name: "",
  textarea: "",
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };

    case "setName":
      return { ...state, name: action.payload };

    case "setTextarea":
      return { ...state, textarea: action.payload };

    case "reset":
      return initialState;

    case "setLoading":
      return { ...state, isLoading: action.payload };

    default:
      throw new Error("Unknown action");
  }
}

function ContactForm() {
  const [{ email, name, textarea, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleSubmit = (e) => {
    dispatch({ type: "setLoading", payload: true });
    e.preventDefault();

    setTimeout(() => {
      toast.success("Your Message has been sent!", {
        id: "contactForm",
      });
      dispatch({ type: "reset" });
    }, 3000);
  };

  return (
    <FadeInSection
      animation="blur"
      delay={0.3}
      className=" w-full z-5 lg:w-1/2 "
    >
      <form
        className="border border-text p-8 rounded-2xl "
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-10 max-w-3xl flex flex-col gap-5 mx-auto font-montserrat">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold text-secondary">
            Send Us a Message
          </h2>
          <p>
            Your fitness journey matters to us—reach out anytime and we’ll be in
            touch.
          </p>
        </div>

        <div className="flex flex-col text-text">
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bmi-input"
              required
              value={name}
              onChange={(e) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
              disabled={isLoading}
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bmi-input"
              required
              value={email}
              onChange={(e) =>
                dispatch({ type: "setEmail", payload: e.target.value })
              }
              disabled={isLoading}
            />
          </div>

          {/* Message */}
          <textarea
            rows="7"
            placeholder="Your Message"
            className="textarea w-full px-4 py-3 mt-10! mb-7 resize-none"
            required
            value={textarea}
            onChange={(e) =>
              dispatch({ type: "setTextarea", payload: e.target.value })
            }
            disabled={isLoading}
          ></textarea>

          {/* Submit Button */}
          <CtaBtn
            text={isLoading ? "Sending..." : "Send Message"}
            bg="bg-secondary "
            hoverBg="hover:bg-transparent"
            mobileHoverBg="bg-transparent"
            activeBg="active:bg-transparent"
            btnType="submit"
            radius="rounded-md"
            isLoading={isLoading}
          />
        </div>
      </form>
    </FadeInSection>
  );
}

export default ContactForm;
