import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CharacterAnimation } from ".";
import { socials } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideInHidden, slideInVisible } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const button_ref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name &&
      form.email &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(form.email) &&
      form.message
    ) {
      const alert_box = document.querySelector(".alert");
      setLoading(true);
      emailjs
        .send(
          "service_qtevhe2",
          "template_bf0py78",
          {
            from_name: form.name,
            to_name: "Abolfazl",
            from_email: form.email,
            to_email: "abolfazl2007fx@gmail.com",
            message: form.message,
          },
          "w-gKHjzOwZVn67NV-"
        )
        .then(
          () => {
            setLoading(false);
            alert_box.innerHTML =
              "Thank you ! I will get back to you as soon as possible.";
            alert_box.classList.add("alert_box_animation");
            button_ref.current.setAttribute('disabled', true)
            setTimeout(() => {
              alert_box.classList.remove("alert_box_animation");
              button_ref.current.removeAttribute('disabled')
            }, 8000);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            alert_box.innerHTML = "Something went wrong.";
            alert_box.classList.add("alert_box_animation");
            button_ref.current.setAttribute('disabled', true)
            setTimeout(() => {
              alert_box.classList.remove("alert_box_animation");
              button_ref.current.removeAttribute('disabled')
            }, 8000);
            console.log(error);
          }
        );
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden">
      <motion.div
        initial={slideInHidden("left")}
        whileInView={slideInVisible("tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 py-8 px-4 sm:px-8 rounded-2xl"
      >
        <CharacterAnimation text="Get in touch" textStyle="sectionSubText" />
        <CharacterAnimation text="Contact." textStyle="sectionHeadText" />
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8" autoComplete="off">
          <label className="flex flex-col relative contact-form__label">
            <span className="text-white font-medium mb-4">Your Name ?</span>
            <div aria-hidden className="green-pink-gradient rounded-lg -z-10 focus-within:scale-105 w-full h-[calc(100%-2.5rem)] absolute left-0 bottom-0 duration-300" />
            <input
              type="text"
              name="name"
              placeholder="What's your name ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col relative contact-form__label">
            <span className="text-white font-medium mb-4">Your Email ?</span>
            <div aria-hidden className="green-pink-gradient rounded-lg -z-10 focus-within:scale-105 w-full h-[calc(100%-2.5rem)] absolute left-0 bottom-0 duration-300" />
            <input
              type="email"
              name="email"
              placeholder="What's your email ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col relative contact-form__label">
            <span className="text-white font-medium mb-4">Your Message ?</span>
            <div aria-hidden className="green-pink-gradient rounded-lg -z-10 focus-within:scale-105 w-full h-[calc(100%-2.5rem)] absolute left-0 bottom-0 duration-300" />
            <textarea
              rows="7"
              name="message"
              placeholder="What do you want to say ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="py-3 px-8 outlined-none w-fit bg-tertiary text-white font-bold shadow-md shadow-primary rounded-md disabled:opacity-50 focus:scale-95"
              ref={button_ref}
            >
              {loading ? "Sending ..." : "Send"}
            </button>
            <div className="flex justify-evenly w-[150px] h-auto">
              {socials.map((social) => (
                <a
                  href={social.link}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full relative focus:-translate-y-1 ${social.title === "Git hub" && "after:bg-white after:w-[78%] after:h-[78%] after:absolute after:rounded-full after:top-1/2 after:-translate-x-1/2 after:left-1/2 after:-translate-y-1/2 after:-z-[1]"}`}
                  key={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={social.title}
                    className="object-contain"
                    src={social.image}
                  />
                </a>
              ))}
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={slideInHidden("right")}
        whileInView={slideInVisible("tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] cursor-grab"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
