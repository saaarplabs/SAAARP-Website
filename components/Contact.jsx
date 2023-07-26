import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_h11v92z",
        "template_fpmevvk",
        {
          from_name: form.name,
          to_name: "Akash Gandhar",
          from_email: form.email,
          to_email: "akashgandhar007@gmail.com",
          message: form.message,
        },
        "Kz8FjSu5FV6uEPhxp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className={`relative w-full h-auto mx-auto mb-32`}>
      <div
        className={`xl:mt-12  flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl"
        >
          <h3 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] uppercase">
            Tokenomics
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-8"
          >
            <span className="text-white font-medium mb-4">
              Tokenomics refers to the economic model of a cryptocurrency or
              token and its distribution. The specifics of tokenomics can vary
              depending on the project, but here are some common components and
              allocation percentages: Token supply: The total number of tokens
              that will be created. This can vary depending on the project, but
              is usually predetermined and fixed. Initial distribution: The
              allocation of tokens when the project launches. This can be done
              through an initial coin offering (ICO), airdrops, or other
              methods.
            </span>

            <h3 className="text-white font-black md:text-[30px] sm:text-[20px] xs:text-[10px] text-[20px] uppercase">
              Token allocation:
            </h3>
            <span className="text-white font-medium mb-4">
              <ul className="list-disc">
                <li>
                  Community: 40-50%. This percentage is usually set aside for
                  the community that will use the token. This can include
                  incentives for early adopters, rewards for participation in
                  the network, or other community-building initiatives.
                </li>
                <li>
                  Team: 20-25%. This percentage is usually set aside for the
                  founders and developers of the project. The team’s tokens are
                  often vested over a period of time to ensure they have a
                  long-term interest in the project.
                </li>
                <li>
                  Investors: 10-20%. This percentage is usually set aside for
                  early investors in the project, such as venture capitalists or
                  angel investors.
                </li>
                <li>
                  Advisors: 2-5%. This percentage is usually set aside for
                  advisors who provide expertise to the project, such as legal
                  or marketing advice.
                </li>
                <li>
                  Reserve: 10-15%. This percentage is usually set aside for
                  future development or other expenses related to the project.
                </li>
              </ul>
            </span>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 hidden xl:block xl:h-auto z-50 md:h-[550px] h-[350px] "
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
