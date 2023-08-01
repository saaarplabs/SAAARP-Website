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
    "name": "Prof. (Dr.) C.P. Katti (Retd.)",
    "experience": "40+ years of research in Numerical Analysis and Scientific Computing",
    "qualifications": ["Ph.D - IIT Delhi (Mathematics)", "MS - Computer Science (University of Missouri, Columbia) Research & Development"]
  },
  {
    "name": "Satyendra",
    "experience": "18+ years in Enterprise Architect, Business Analytics and Optimization",
    "qualifications": ["Fellow - IIM, Ahmedabad", "Post Doctoral Fellow, University of New Brunswick, Canada Advisory & Research"]
  },
  {
    "name": "Prof. (Dr.) D. K. Lobiyal",
    "experience": "30+ years in Mobile ad-hoc Network and Natural Language Processing",
    "qualifications": ["Ph.D - Computer Science JNU New Delhi Advisory & Research"]
  },
  {
    "name": "Asst. Prof. (Dr.) Karan Singh",
    "experience": "14+ years in Cyber Security, IoT and Network Security",
    "qualifications": ["Ph.D - Computer Science (MNNIT, Allahabad) Advisory & Research"]
  },
  {
    "name": "Dr. Anand",
    "experience": "20+ years in Mathematical Modelling, Cryptography",
    "qualifications": ["Gold Medalist (Mathematics) Ph.D - Computer Science JNU New Delhi Research & Development"]
  },
  {
    "name": "A. P. Sinha",
    "experience": "30+ years in Marketing, Strategic Market Development",
    "qualifications": ["PGP-IIM, Ahmedabad Marketing & Sales", "Ex-Bayer"]
  },
  {
    "name": "Asst. Prof. (Dr.) Abhay",
    "experience": "5+ years in Artificial Intelligence",
    "qualifications": ["Ph.D - Dynamical Science IISER, Thiruvananthapuram Research & Development"]
  },
  {
    "name": "Narayanji",
    "experience": "Specialization in Cryptography",
    "qualifications": ["Ph.D Scholar - IIT Delhi", "M.Tech - IIT Kharagpur Research & Development"]
  },
  {
    "name": "Naren",
    "experience": "18+ years in Design and Development of IT Infra Solutions",
    "qualifications": ["M.Sc (Computer Science) Enterprise Architect", "Ex-CDAC"]
  },
  {
    "name": "Pradeep",
    "experience": "21+ years in Design and Development of IT Infra Solutions",
    "qualifications": ["MCA Enterprise Architect", "Ex-EDS"]
  },
  {
    "name": "Ashok",
    "experience": "21+ years of Product Design",
    "qualifications": ["Product Development Ex-BlackBerrys"]
  },
  {
    "name": "Ranjit",
    "experience": "25+ years in Product Development, Influencer Marketing",
    "qualifications": ["Social Media Communications"]
  },
  {
    "name": "Dr. Nandan",
    "experience": "22+ years in Research & Journalism",
    "qualifications": ["Ph.D JNU New Delhi", "Ex-NewsX"]
  },
  {
    "name": "Shailendra",
    "experience": "10+ years in Missile Systems 20+ years in Business Management",
    "qualifications": ["Ph.D dropout JNU New Delhi", "Business & Projects", "Ex-Indian Air Force"]
  },
  {
    "name": "Alok",
    "experience": "25+ years in Design and Development of IT Infra Solutions",
    "qualifications": ["MBA - Information Technology Enterprise Architect", "Ex-EDS"]
  },
  {
    "name": "Shreyansh",
    "experience": "20+ years in Accounting, Financial and Legal Advisory",
    "qualifications": ["Chartered Accountant"]
  },
  {
    "name": "Satish",
    "experience": "30+ years in Software Testing. Training & Development",
    "qualifications": ["Software Testing Ex-India Testing Board"]
  },
  {
    "name": "Saurya",
    "experience": "Blockchain & Backend Developer",
    "qualifications": ["B. Tech - Computer Science"]
  }
];

const ProjectCard = ({
  index,
  name,
  experience,
  qualifications,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  const handleHover = (e) => {
    e.preventDefault();
    setIsFlipped(true);
  };
  const handleHoverOut = (e) => {
    e.preventDefault();
    setIsFlipped(false);
  };
  return (
    <div className="h-fit overflow-hidden" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div> 
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
                  src="/avatar.avif"
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
                <p className="mt-2 text-secondary text-[14px]">{experience}{ qualifications}</p>
              </div>

              {/*   */}
            </Tilt>
          </motion.div>
        </div>
      </ReactCardFlip>
    </div>
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
