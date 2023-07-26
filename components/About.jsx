import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const services = [
  {
    title: "Web Developer",
    icon: "/web.png",
  },
  {
    title: "React Native Developer",
    icon: "./mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "./backend.png",
  },
  {
    title: "Content Creator",
    icon: "./creator.png",
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full flex-1">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#100d25] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <section className={`relative w-full h-auto mx-auto mb-32`}>
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] mt-10 text-[14px] text-secondary uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-justify max-w-full leading-[30px]"
        >
          SAAARP LABS aims to revolutionize the world of technology with its
          cutting-edge blockchain and decentralized solutions. The company was
          initiated in 2021 by a team of highly skilled experts who possess a
          wealth of knowledge and experience in mathematics, cryptography,
          computer science, and software development. The company&apos;s vision is to
          harness the power of blockchain technology to create a more secure,
          transparent, and decentralized world. The team behind SAAARP LABS is
          passionate about the potential of blockchain technology and is
          committed to building innovative solutions that can bring about real
          change. SAAARP LABS operates on the principle of decentralization,
          meaning that the power is distributed among all stakeholders, rather
          than being concentrated in the hands of a few. This approach ensures
          that the platform is secure, transparent, and resistant to fraud and
          manipulation. One of the key strengths of SAAARP LABS is its team of
          experts, who possess a deep understanding of the underlying technology
          and are dedicated to building innovative solutions that can make a
          real difference in the world.
        </motion.p>

        <div className="w-full mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div> */}
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
