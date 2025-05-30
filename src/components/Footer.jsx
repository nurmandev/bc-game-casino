
import {
  FaTelegramPlane,
  FaGithub,
  FaFacebookF,
  FaDiscord,
  FaBitcoin,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import logo from "../../public/FooterImg/logo_festival.webp";

// Importing images
import awardImg1 from "../../public/FooterImg/d-92-DCx7K2V3.png";
import awardImg2 from "../../public/FooterImg/d-93-0pkDEp9Z.png";
import awardImg3 from "../../public/FooterImg/d-94-BjjhhHHh.png";
import awardImg4 from "../../public/FooterImg/d-95-CMQSGT4N.png";
import awardImg5 from "../../public/FooterImg/d-96-pZM7QuMr.png";
import awardImg6 from "../../public/FooterImg/d-97-qal8av7f.png";
import awardImg7 from "../../public/FooterImg/d-98-DA42CT6W.png";
import awardImg8 from "../../public/FooterImg/d-99-NFJF9gM_.png";

import logoImg1 from "../../public/FooterImg/sigma-DzhjGPHa.png";
import logoImg2 from "../../public/FooterImg/responsible-gambling--34MNE2A.png";
import logoImg3 from "../../public/FooterImg/gamcare-ocLkkk6e.png";
import logoImg4 from "../../public/FooterImg/betblocker-DBd5sP60.webp";
import logoImg5 from "../../public/FooterImg/18-plus-DeAQLka0.png";
import logoImg6 from "../../public/FooterImg/c9-CnE9qdtZ.png";
import logoImg7 from "../../public/FooterImg/leicester-5bY-JKgX.png";
import logoImg8 from "../../public/FooterImg/jason_derulo-fkEa4kAk.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E2121] text-white py-8 w-full">
      <hr className="border-gray-600" />
      {/* Awards Section */}
      <div className="flex flex-wrap justify-center items-center space-x-5 mb-6 mt-3">
        {[
          awardImg1,
          awardImg2,
          awardImg3,
          awardImg4,
          awardImg5,
          awardImg6,
          awardImg7,
          awardImg8,
        ].map((award, index) => (
          <img
            key={index}
            src={award}
            alt={`Award ${index + 1}`}
            className="h-32 w-[140px] object-contain"
          />
        ))}
      </div>

      <hr className="border-gray-600" />

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center space-x-8 mb-8 mt-6">
        {[
          logoImg1,
          logoImg2,
          logoImg3,
          logoImg4,
          logoImg5,
          logoImg6,
          logoImg7,
          logoImg8,
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-12 w-32 object-contain cursor-pointer"
          />
        ))}
      </div>

      <hr className="border-gray-600" />

      {/* Navigation Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-8 mt-6">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3 text-[#FFFFFF]">Casino</h3>
          <ul className="space-y-1  ">
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Casino Home
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              BC Poker
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Slots
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Live Casino
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              New Releases
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Recommended
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Table Game
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              BlackJack
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Roulette
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Baccarat
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3 text-[#FFFFFF]">Sports</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Sports Home
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Live
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Rules
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Sport Betting Insights
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3 text-[#FFFFFF]">Promo</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              VIP Club
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Affiliate
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Promotions
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Lottery
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Refer a Friend
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3 text-[#FFFFFF]">Support/Legal</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Help Center
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Important Announcement
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              FAQ
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Privacy Policy
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Terms of Service
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              {" "}
              Law Enforcement
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Self-exclusion{" "}
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              {" "}
              AML
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              {" "}
              Design Resources
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              {" "}
              APP
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Live Support{" "}
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold mb-3 text-[#FFFFFF]">About Us</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              News
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Work With Us
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Business Contacts
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Help Desk
            </li>
            <li className="hover:text-[#24EE89] cursor-pointer text-[#B3BEC1]">
              Verify Representative
            </li>
          </ul>
        </div>

        {/* Column 6: Social Media Section */}
        <div className="flex flex-col items-center">
          <h3 className=" font-bold mb-3 text-[#FFFFFF]">Join Our Community</h3>
          <ul className="grid grid-cols-4 gap-4 cursor-pointer">
            {/* Telegram */}
            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <FaTelegramPlane className="text-xl text-[#BCC7CB]" />
              </a>
            </li>

            {/* GitHub */}
            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <FaGithub className="text-xl text-[#BCC7CB]" />
              </a>
            </li>

            {/* X Twitter */}

            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <BsTwitter className="text-xl text-[#BCC7CB]" />
              </a>
            </li>

            {/* Facebook */}
            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <FaFacebookF className="text-xl text-[#BCC7CB]" />
              </a>
            </li>

            {/* Discord */}
            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <FaDiscord className="text-xl text-[#BCC7CB]" />
              </a>
            </li>

            {/* Bitcoin */}
            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <FaBitcoin className="text-xl text-[#BCC7CB]" />
              </a>
            </li>

            {/* Instagram */}
            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <FaInstagram className="text-xl text-[#BCC7CB]" />
              </a>
            </li>

            {/* Duplicate Telegram (Remove if unnecessary) */}
            <li className="p-2 bg-[#2B2F30] rounded w-10 h-10">
              <a
                href="#"
                className="flex justify-center items-center hover:text-gray-400"
              >
                <FaTelegramPlane className="text-xl text-[#BCC7CB]" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-600 mt-8" />

      {/* Footer Bottom */}
      <div className="bg-[#1E2121] text-gray-400 text-sm py-6 px-4">
        <div className="container mx-auto flex justify-between items-center mb-4">
          {/* Logo */}
          <img src={logo} alt="bc.game" className="h-8" />
        </div>

        {/* Content Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <p>
              A multi-award-winning crypto casino. With a player-centric
              approach, BC.CO is able to satisfy millions of gamblers across the
              globe. BC.CO has its priority set on its community, ensuring an
              everlasting and endlessly entertaining gambling experience.
            </p>
            <p className="mt-4">
              Your use of and access to BC.CO signifies that you fully
              understand and agree to be legally bound by the contents of our{" "}
              <span className="">Terms of Service</span> and{" "}
              <span className="">Responsible Gaming Policy</span>.
            </p>
            <p className="mt-4">
              Crypto trading is not gambling by definition, therefore it is not
              covered by our gaming license.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <p>
              BC.CO is operated by Twocent Technology Limited, a limited
              liability company registered in Belize with company registration
              number 000041939, with registered address at Sea Urchin Street,
              San Pedro, Ambergris Caye, Belize. BC.CO is licensed and regulated
              by the Government of the Autonomous Island of Anjouan, Union of
              Comoros and operates under License No. ALSI-202410011-F1. BC.CO
              has passed all regulatory compliance and is legally authorized to
              conduct gaming operations for any and all games of chance and
              wagering.
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">
            Copyright ©2024 Twocent Technology Limited ALL RIGHTS RESERVED.
            1BTC=₹82,61,887.75
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
