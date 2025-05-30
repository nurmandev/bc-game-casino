import { IoPersonSharp } from "react-icons/io5";
import Footer from "../../components/Footer";
import { MdLockPerson } from "react-icons/md";
import { BsMenuButtonFill } from "react-icons/bs";
import { LuNotepadText } from "react-icons/lu";
import { RiBankCardFill } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { useState } from "react";
import AccountInfo from "../../components/GlobalSetting/AccountInfo";
import Security from "../../components/GlobalSetting/Security";
import Preferences from "../../components/GlobalSetting/Preferences";
import PersonalVerification from "../../components/GlobalSetting/PersonalVerification";
import PaymentMethods from "../../components/GlobalSetting/PaymentMethods";
import WhitelistManagement from "../../components/GlobalSetting/WhitelistManagement";


const GlobalSetting = () => {
  const [active, SetActive] = useState("Account Info");

  const GlobalSettings = [
    {
      title: "Account Info",
      icon: <IoPersonSharp />,
      component: <AccountInfo />,
    },
    {
      title: "Security",
      icon: <MdLockPerson />,
      component: <Security />,
    },
    {
      title: "Preferences",
      icon: <BsMenuButtonFill />,
      component: <Preferences />,
    },
    {
      title: "Personal Verification",
      icon: <LuNotepadText />,
      component: <PersonalVerification />,
    },
    {
      title: "Payment Methods",
      icon: <RiBankCardFill />,
      component: <PaymentMethods />,
    },
    {
      title: "Whitelist Management",
      icon: <SlNotebook />,
      component: <WhitelistManagement />,
    },
  ];

  return (
    <div className="w-full mt-16 ">
      <div className="left-0 h-auto">
        <h1 className="w-[100%] m-auto text-white font-bold text-[24px] my-5">
          Global Settings
        </h1>
        <div className="lg:w-[100%] m-auto lg:flex lg:items-start lg:justify-between md:w-[90%] md:flex md:items-start md:justify-start gap-5 ">
          {/* Sidebar */}
          <div className="lg:w-[20%] lg:h-[350px] bg-[#323738] rounded-2xl lg:p-4 md:w-[30%] md:h-[550px] sm:w-[90%] sm:h-auto sm:mx-auto sm:snap-x sm:overflow-x-auto sticky top-0 left-0">
            <div className="lg:flex lg:flex-col lg:items-start lg:justify-center md:flex md:flex-col md:items-start sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:w-[100%] sm:m-auto">
              {GlobalSettings.map((item, index) => (
                <div
                  key={index}
                  className={`lg:flex lg:flex-row lg:items-center lg:justify-center md:flex md:flex-row md:items-center md:justify-start sm:flex sm:flex-col sm:items-center sm:justify-center gap-3 cursor-pointer p-3 rounded-lg sm:snap-start ${
                    active === item.title
                      ? "bg-[#3a4142] text-white font-bold"
                      : "text-gray-400"
                  }`}
                  onClick={() => SetActive(item.title)}
                >
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:w-[80%] lg:mt-0 sm:w-[90%] sm:m-auto sm:mt-5 md:mt-0 md:block">
            <div className="rounded-2xl  ">
              {/* Render active component */}
              {GlobalSettings.map(
                (item, index) =>
                  active === item.title && (
                    <div key={index}>{item.component}</div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default GlobalSetting;
