


import React, { useState, useEffect } from 'react';
import { BiSupport } from "react-icons/bi"; //support
import { HiCurrencyDollar } from "react-icons/hi2"; //currency
import { FaCoins } from "react-icons/fa6"; //free
import { MdOutlinePolicy } from "react-icons/md"; //privacy policy
import { IoIosGift } from "react-icons/io"; //<IoIosGift />
import { GoLaw } from "react-icons/go"; //provably fair
import { ImLibrary } from "react-icons/im"; //terms of services
import { FaGoogle } from "react-icons/fa"; //google authenticator
import { FaQuestionCircle } from "react-icons/fa"; //faqs
import { GoPersonFill } from "react-icons/go"; //registration and login
import { AiFillThunderbolt } from "react-icons/ai"; //swap policy
import { TbRating18Plus } from "react-icons/tb"; //gamble aware
import { FaRedhat } from "react-icons/fa"; //protecting minors
import { BsFillSignNoParkingFill } from "react-icons/bs"; //aml
import { GiSoccerBall } from "react-icons/gi";
import { TbHexagonNumber4Filled } from "react-icons/tb";
import { GoBellFill } from "react-icons/go"; //important announcement
import { FaUserPlus } from "react-icons/fa6"; //responsible gambling
import { FaBitcoin } from "react-icons/fa";
import { FaPersonCircleExclamation } from "react-icons/fa6";

const Sidebar = ({ setActiveSection }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const sections = [
    { id: 'provably-fair', title: 'Provably Fair', icon: <GoLaw /> },
    { id: 'privacy-policy', title: 'Privacy Policy', icon: <MdOutlinePolicy /> },
    { id: 'terms-of-service', title: 'Terms Of Service', icon: <ImLibrary /> },
    { id: 'terms-of-sports', title: 'Terms Of Sports', icon: <GiSoccerBall /> },
    { id: 'bonus-terms', title: 'Bonus Terms', icon: <IoIosGift /> },
    { id: 'law-enforcement', title: 'Law Enforcement', icon: <FaBitcoin /> },
    { id: 'coin-accuracy-limit', title: 'Coin Accuracy Limit', icon: <FaBitcoin /> },
    { id: 'support', title: 'Support', icon: <BiSupport /> },
    { id: 'fee', title: 'Fee', icon: <FaCoins /> },
    { id: 'google-authenticator', title: 'Google Authenticator', icon: <FaGoogle /> },
    { id: 'faqs', title: 'FAQs', icon: <FaQuestionCircle /> },
    { id: 'currency', title: 'Currency', icon: <HiCurrencyDollar /> },
    { id: 'registration-and-login', title: 'Registration and Login', icon: <GoPersonFill /> },
    { id: 'swap-policy', title: 'Swap Policy', icon: <AiFillThunderbolt /> },
    { id: 'gamble-aware', title: '18+ Gamble Aware', icon: <TbRating18Plus /> },
    { id: 'protecting-minors', title: 'Protecting Minors', icon: <FaRedhat /> },
    { id: 'providers', title: 'Providers', icon: <TbHexagonNumber4Filled /> },
    { id: 'aml', title: 'AML', icon: <BsFillSignNoParkingFill /> },
    { id: 'self-exclusion', title: 'Self-exclusion', icon: <FaPersonCircleExclamation /> },
    { id: 'responsible-gambling', title: 'Responsible Gambling', icon: <FaUserPlus /> },
    { id: 'important-announcement', title: 'Important Announcement', icon: <GoBellFill /> },
  ];

  const handleSectionClick = (id) => {
    setSelectedSection(id);
    setActiveSection(id);
  };

 
  

  return (
    <div className="w-full lg:w-1/4 bg-[#323738] text-[#BCC7CB] p-0 rounded-lg m-0 mt-10 ml-5 mb-5">
    
    {windowWidth <= 480 ? ( 
      <div className="overflow-x-auto lg:overflow-x-hidden whitespace-nowrap px-2 py-2 scrollbar-hide">
       
        <ul className="flex space-x-4 lg:space-x-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`inline-block w-[360px] cursor-pointer p-2 m-2 rounded-lg text-sm whitespace-nowrap   ${
                selectedSection === section.id ? 'bg-[#3A4142] text-white' : 'bg-[#232626]'
              }`}
              onClick={() => {
                handleSectionClick(section.id);
                
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center', 
                  inline: 'center', 
                  
                });
              }}
              id={section.id}  
            ><div className='flex items-center  justify-center'>
          <span className="mr-3 font-bold text-[15px]">{section.icon}</span>
            <span className="font-bold">{section.title}</span>
          </div>
            </li>
          ))}
        </ul>
      </div>
    ) : windowWidth <= 768 ? ( 
      <div className="overflow-x-auto lg:overflow-x-hidden whitespace-nowrap px-2 py-2 scrollbar-hide">
        
        <ul className="flex space-x-4 lg:space-x-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`inline-block w-[280px] cursor-pointer p-2 m-2 rounded-lg text-sm whitespace-nowrap ${
                selectedSection === section.id ? 'bg-[#3A4142] text-white' : 'bg-[#323738]'
              }`}
              onClick={() => {
                handleSectionClick(section.id);
                
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'center',
                });
              }}
              id={section.id} 
            >
             <div className='flex items-center  justify-center'>
          <span className="mr-3 font-bold text-[15px]">{section.icon}</span>
            <span className="font-bold">{section.title}</span>
          </div>
            </li>
          ))}
        </ul>
      </div>
    ) : (  
      <ul className="space-y-2 mb-2">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`flex items-center cursor-pointer p-2 m-2 rounded-lg text-sm ${
              selectedSection === section.id ? 'bg-[#3A4142] text-white' : ''
            }`}
            onClick={() => handleSectionClick(section.id)}
          >
          <div className='flex items-center  justify-center'>
          <span className="mr-3 font-bold text-[18px]">{section.icon}</span>
            <span className="font-bold">{section.title}</span>
          </div>
            
          </li>
        ))}
      </ul>
    )}
  </div>
  
  
  

  );
};

export default Sidebar;





