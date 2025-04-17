import { useRef, useEffect, useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json";
import Slide from "./../Slide";
import Box from "./../Box";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqypnqa");
  const formRef = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);


      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="contact-us" id="contact">
      <Slide>
        <h1 className="title">
          <span className="icon-envelope-o"></span>
          Contact Us
        </h1>
      </Slide>
      <Slide delay={0.3}>
        <p className="sub-title">
          Contact us for more information and get notified when I publish
          something new.
        </p>
      </Slide>
      <div className="flex">
        <form ref={formRef} onSubmit={handleSubmit}>
          <Slide>
            <div className="mb-3 flex">
              <label
                style={{ width: 150 }}
                htmlFor="email"
                className="form-label me-3"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-dark text-light"
                id="email"
                placeholder='name@example.com'
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-3 flex">
              <label
                style={{ width: 150 }}
                htmlFor="message"
                className="form-label  me-3"
              >
                Your Message
              </label>
              <textarea
                className="form-control bg-dark text-light"
                id="message"
                name="message"
                style={{ height: 180 }}
                placeholder="Leave a message here"
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="mb-3 flex submit">
              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-dark fw-bold"
                style={{ width: 120 }}
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
            {state.succeeded && showSuccessMessage && (
              <p
                style={{
                  marginTop: "1rem",
                  marginBottom: "0",
                  fontSize: "17px",
                  fontWeight: "700",
                  alignItems: "baseline",
                }}
                className="flex massage"
              >
                <Lottie
                  loop={false}
                  style={{ height: 38.5 }}
                  animationData={doneAnimation}
                />
                Your message has been sent successfully
              </p>
            )}
          </Slide>
        </form>
        <Box
          num={
            <div className="animation">
              <Lottie
                className="contact-animation"
                style={{ height: 355 }}
                animationData={contactAnimation}
              />
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Contact;
