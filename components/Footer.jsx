import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Link from "next/link";

const Footer = () => {
  return (
    <footer class="w-full  flex items-center justify-center ">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div class="flex flex-col">
          <div class="flex mt-24 mb-12 flex-row justify-between">
            <div class="">
              <img src="logo.png" alt="logo" class="w-40 object-contain" />
            </div>
           <Link href="#about" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              About
           </Link>
           <Link href="#work" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Products
           </Link>
           <Link href="#contact" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Tokenomics
           </Link>
           <Link href="#team" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Team
           </Link>
            <div class="flex flex-row space-x-8 items-center justify-between">
              <TwitterIcon />
              <LinkedInIcon />
              <GitHubIcon />
              <TelegramIcon />
              <YouTubeIcon />
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
