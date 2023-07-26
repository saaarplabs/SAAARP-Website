import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
// import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const experiences = [
  {
    title: "LiveLoud.io",
    // company_name: "Saaarp Metaverse",
    icon: "/creator.png",
    iconBg: "#E6DEDD",
    date: "JAN 2023 - Now",
    points: [
      "Get a Web3 wallet and come experiment with LIVELOUD the whole new social world that's springing up. As a content creator, you can share your digital content; anything digital e.g., live stream, video, movie trailers, web series, audio, music, music launch, images, podcasts, ebooks and or any digital assets etc. Content creators can set a price streaming their content or they can provide it for free and get tipped by the viewers.As a content user you can use platform for watching live stream, videos, listening to music, podcast, reading ebooks and downloading digital assets etc. The user activities are not tracked to serve ads.",
    ],
  },
  {
    title: "SAAARP GO",
    // company_name: "WEU EcoSystem",
    icon: "/mobile.png",
    iconBg: "#E6DEDD",
    date: "TBA",
    points: [
      "We are building the decentralized search engine as the world's leading cryptography based search engine. Decentralized search engine is the mission in action and progress. The emerging world of Web3 is changing the underlying technology landscape. In the Web3 world all the users generated contents are NFTs of respective users. We are leading to disrupt the search technology market through its independent, scalable, and truly decentralized approach.",
    ],
  },
  {
    title: "CryptoMillionaire",
    // company_name: "Indivisual",
    icon: "/web.png",
    iconBg: "#383E56",
    date: "TBA",
    points: [
      "Answer trivia questions to win what could be a very big cryptocurrency. Safety nets along the way guarantee sums that can't be lost once a contestant reaches certain thresholds; and players can quit any time, but going for the 1 million cryptocurrency carries the risk of losing hundreds of thousands with one wrong answer. Participants get 'community lifelines' to help reach the top.",
      "Correctly answering 21 multiple-choice questions could net contestants one million cryptocurrency on a 5 minutes quiz.",
      // "Demonstrated strong communication skills by regularly meeting with stakeholders to gather requirements, provide updates, and ensure the LMS met their needs.",
    ],
  },
  { 
    title: "SAAARP Learn",
    // company_name: "Indivisual",
    icon: "/web.png",
    iconBg: "#383E56",
    date: "TBA",
    points: [
      "We create partnerships with different cryptocurrencies/digital products/ product showcasing / services information with dedicated modules where users will learn about a specific product/services/topics/lessons or new coin or token and earn a small amount as a reward. The users just need to do to take part is sign up for account, and then you can start learning by watching videos and answering quiz questions.",
      "To earn, you'll watch a short video (or videos) on your chosen crypto then take a quick quiz or assignment to test your knowledge. Once you've passed the quiz, you could be rewarded with token for your computer engineering course.",
    ],
  },
  {
    title: "SAAARP Drive",
    // company_name: "WEU EcoSystem",
    icon: "/mobile.png",
    iconBg: "#E6DEDD",
    date: "TBA",
    points: [
      "Driving data, such as distance and speed and driving behavior such as non use of phone while driving, is uploaded to the system and automatically converted into token, using an algorithm devised by SAAARP community. The result is downloaded directly to the user's smartphone and the drive to earn token can then be used to purchase products and insurance services in the SAAARP LABS. We want to motivate drivers to stop using their phones while driving and thus drastically reduce the number of road accidents, injuries, and deaths. Motorists will be incentivized for road friendly behavior, and they'll receive drive to earn token for driving safely and possibly could be rewarded insurance companies as well.",
    ],
  },
  {
    title: "SAAARP Games",
    // company_name: "Indivisual",
    icon: "/web.png",
    iconBg: "#383E56",
    date: "TBA",
    points: [
      "Tokens for in-game purchases and trading between players. Community will derive value through the use of the tokens and trading. We should have the ability to continue growing the game economy as we intend to build around token. The only way a play-to-earn model can be sustainable is having the game's users be of high quality games. Continuous trading of in-game assets in token creates the need for a constant inflow of new players and trading to maintain the business model and develop revenue streams.",
    ],
  },
  {
    title: "SAAARP Walk",
    // company_name: "Indivisual",
    icon: "/web.png",
    iconBg: "#383E56",
    date: "TBA",
    points: [
      "Physical Activities token is a new breed of activity counting tracker that converts your activities into a currency you can spend on gadgets, sports and fitness kit, services, knowledge and experiences.",
      "Physical Activities token is an achievement tracker for a new generation. Spend physical Activities token earned on goods, services and experiences with our partner brands in the marketplace. Or, if you’re feeling generous, you can exchange them with your friends and family and even trade or donate to amazing causes. Users earn physical Activities token whether you exercise at home or outside. Physical Activities token activity tracker will let you keep track of your progress: counting steps and monitoring user activities.",
      // "Demonstrated strong communication skills by regularly meeting with stakeholders to gather requirements, provide updates, and ensure the LMS met their needs.",
    ],
  },
  { 
    title: "SAAARP COFI",
    // company_name: "Indivisual",
    icon: "/web.png",
    iconBg: "#383E56",
    date: "TBA",
    points: [
      "Community Defi is the platform where community finances the various project of entertainment industries by providing directors, artists, songwriters, producers and others related professionals with funding sourced directly from the community on a global basis. This is built on blockchain technology, driven by NTFs and managed by DAO.",
      "Community Defi allows entertainment industry professionals such as directors, artists, songwriters, producers, and others to submit project proposals to the community for funding. Community members can then use cryptocurrency to fund the projects and receive NFTs as a reward for their contributions. The platform also has a governance system managed by the DAO, which allows community members to vote on proposals and decisions related to the platform. This ensures that the community has a say in how the platform is managed and developed.",
    ],
  },
  {
    title: "SAAARP Sleep",
    // company_name: "WEU EcoSystem",
    icon: "/mobile.png",
    iconBg: "#E6DEDD",
    date: "TBA",
    points: [
      "BUY A BED, MATTRESS, BED SHEET, PILLOW to SLEEP as YOU SLEEP, EARN.", 
      "TRADE or DONATE BED, MATTRESS, PILLOW etc. once you don't need them anymore.",
      
      "The sleep to earn has been designed as a reward system to cater for the non-activities market. It has unique functionalities, introduces a financial incentive that wholly accommodates an essential component of human non-physical activities and mental well-being. The sleep to earn ecosystem will offer a wide range of services linking Web3, DeFi, Metaverse, and NFTs all of which will be powered by the SAAARP LABS sleep to earn token. Earn income even while sleeping.",
    ],
  },
  {
    title: "SAAARP Booking",
    // company_name: "Indivisual",
    icon: "/web.png",
    iconBg: "#383E56",
    date: "TBA",
    points: [
      "TWe are building decentralized booking system platform for airlines, hotels and travel industry. It will be a frictionless travel booking experience that incorporates next generation blockchain technology and tokenised incentives for the community.", 
      "This will allow community for a true peer-to-peer economy to fire up true price discovery and innovation in the booking system ecosystem. Smoother payment processes with the help of Blockchain, Web3 and DeFi; many repetitive processes can be automated such as purchasing travel insurance and loyalty settlements. Payment process will be more secure and efficient than ever with no intermediaries.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: "/saaarp.jpg",
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex text-justify justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <section className={`relative w-full text-white h-auto mx-auto mb-32 text-justify`}>
        <motion.div variants={textVariant()}>
          <p
            className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider `}
          >
            What we have done so far
          </p>
          <h2
            className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] `}
          >
            Products
          </h2>
        </motion.div>
        

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Experience, "work");
