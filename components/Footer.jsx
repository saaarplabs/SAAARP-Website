import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord, BsTelegram } from "react-icons/bs";

import Link from "next/link";

const Footer = () => {
  return (
    <footer class="w-full  flex items-center justify-center ">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div class="flex flex-col">
          <div class="flex mt-24 mb-12 flex-row items-center justify-center xl:justify-between">
            <div class="">
              <img src="logo.png" alt="logo" class="w-40 object-contain hidden xl:block" />
            </div>
            <Link
              href="#about"
              class="hidden xl:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              About
            </Link>
            <Link
              href="#work"
              class="hidden xl:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              Products
            </Link>
            <Link
              href="#contact"
              class="hidden xl:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              Tokenomics
            </Link>
            <Link
              href="#team"
              class="hidden xl:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              Team
            </Link>
            <div class="flex flex-row space-x-8 items-center justify-between w-full mx-10 xl:w-auto">
              <Link href="https://twitter.com/saaarplabs" target="1">
                <AiOutlineTwitter />
              </Link>
              <Link href="https://github.com/saaarplabs" target="1" >
                <AiFillGithub />
              </Link>
              <Link href="https://www.linkedin.com/company/saaarp" target="1">
                <AiFillLinkedin />
              </Link>
              <Link href="https://medium.com/@saaarplabs" target="1">
                <AiFillMediumSquare />
              </Link>
              <Link href="https://www.youtube.com/@saaarp" target="1">
                <AiFillYoutube />
              </Link>
              <Link href="https://discord.com/invite/ZZxXEX9xWG" target="1">
                <BsDiscord />
              </Link>
              <Link href="https://t.me/saaarplabs" target="1">
                <BsTelegram />
              </Link>
            </div>
          </div>
          <hr class="border-white" />
          <p class="w-full text-center my-12 hover:text-white text-gray-600">
            Copyright © 2023 — SAAARP LABS - dApps for community, Powered by
            DeFi, NFTs and Web3.0. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
