import { motion } from "framer-motion";

import { styles } from "../styles";
import { useEffect, useState } from "react";
// import { ComputersCanvas } from "./canvas";
import TextTransition, { presets } from "react-text-transition";
import ComputersCanvas from "./model";
// import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  let [count, setCount] = useState(0);
  const textList = [
    " create modern UI based on your design,",
    " build interactive UI using React,",
    " develop responsive websites using Next.js.",
  ];
  const [text, setText] = useState("...");

  useEffect(() => {
    setText(textList[count]);
    let interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute text-justify inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3182ce]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#3182ce] " />
        </div>

        <div>
          <h1
            className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-transparent bg-gradient-to-b from-sky-400 to-sky-200 bg-clip-text`}
          >
            SAAARP
          </h1>
          <p
            className={`text-[#dfd9ff] text-justify font-medium lg:text-[18px] sm:text-[16px] text-[16px] lg:leading-[32px] mt-2 text-white-100`}
          >
            SAAARP LABS team is a group of dedicated professionals who are
            committed to making a difference in the world of blockchain
            technology and decentralized systems. With our expertise,
            experience, and passion for innovation, we are well-positioned to
            drive the company&apos;s success and push the boundaries of what is
            possible in this exciting field.
          </p>
         

          {/* <span className="flex">
            <h1 className="text-[#3182ce] mr-1">I</h1>
            <TextTransition springConfig={presets.wobbly}>
              {textList[count % textList.length]}
            </TextTransition>
          </span> */}
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
