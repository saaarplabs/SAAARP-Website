import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const projects = [
  {
    name: "Deewan Cars | Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/deewancars.png",
    source_code_link: "https://github.com/akashgandhar/DeewanCars",
  },
  {
    name: "School-ERP",
    description:
      "Web application that enables schools to manage all Fields, Manage Students,Teachers,Finances etc. in One Single Platform With reliability and Secure Platform ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/mjps.png",
    source_code_link: "https://github.com/akashgandhar/schooL-LMS",
  },
  {
    name: "Saaarp Website",
    description:
      "A Metaverse company that create WEB3 Applications for the users and any kind of DAPPS the user wants with efficient design and self chain.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/saaarpweb.png",
    source_code_link: "https://github.com/akashgandhar/saaarp-website",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div onClick={handleClick}>
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-[#100d25] p-20 h-28 rounded-2xl w-[340px] flex justify-center items-center "
            >
              <div className="flex w-full justify-center items-center text-center">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <div onClick={handleClick}>
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-[#100d25] p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <div className="relative w-full h-[230px]">
                <img
                  src={image}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    // onClick={() => window.open(source_code_link, "_blank")}
                    className="bg-[#231d49] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src="/saaarp.png"
                      alt="source code"
                      className="w-3/4 h-3/4 object-contain mix-blend-plus-lighter"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        </div>
      </ReactCardFlip>
    </>
  );
};

const Works = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <section  className={`relative w-full mt-10 h-auto mx-auto mb-32`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Meet Our team</p>
          <h2 className={`${styles.sectionHeadText}`}>TEAM</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] text-justify leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex  justify-center flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              isFlipped={isFlipped}
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Works, "");
