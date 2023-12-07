import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socials } from "../constants";

const Contact = () => {
  const form_ref = useRef();
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
    if (form.name && form.email && form.message) {
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
            alert("Thank you ! I will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong.");
          }
        );
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 py-8 px-4 sm:px-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={form_ref}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name ?</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email ?</span>
            <input
              type="email"
              name="email"
              placeholder="What's your email ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message ?</span>
            <textarea
              rows="7"
              name="message"
              placeholder="What do you want to say ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="py-3 px-8 outlined-none w-fit bg-tertiary text-white font-bold shadow-md shadow-primary rounded-md"
            >
              {loading ? "Sending ..." : "Send"}
            </button>
            <div className="flex justify-evenly w-[150px] h-auto">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  key={index}
                >
                  <img
                    alt={social.title}
                    className=" object-contain"
                    src={social.image}
                  />
                </a>
              ))}
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
