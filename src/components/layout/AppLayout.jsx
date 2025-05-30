import { data, Link, Outlet } from "react-router-dom";
import Header from "./Header";
import HomeSide from "../layout/HomeSide";
import bottommenu from "../../../public/Poker_Image/menu.9c523979.svg";
import { TbPlayCardStarFilled } from "react-icons/tb";
import { GiBasketballBall } from "react-icons/gi";
import { IoChatboxEllipses, IoSend } from "react-icons/io5";
import { GrHomeRounded, GrSearchAdvanced } from "react-icons/gr";
import { useState } from "react";
import PhoneNavigation from "../PhoneNavigation";
import { MdHeadset } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaBullhorn } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";

const AppLayout = () => {
  const [menuButton, SetMenuButtton] = useState("");
  const [callCenter, SetCallCenter] = useState("");
  const [menuCallCenter, SetmenuCallCenter] = useState("Home");
  return (
    <div>
      <div className="w-full ">
        <Header />
        <div className="flex items-start justify-between gap-60 w-full min-h-screen relative">
          <HomeSide className="w-[20%] sx:hidden md:block " />
          <Outlet className="w-[80%] overflow-ellipsis" />
        </div>
      </div>
      {/* callHelpCenter */}
      <div className="cursor-pointer">
        <div
          onClick={() => SetCallCenter((prev) => !prev)}
          className="right-3 bottom-5 fixed bg-green-500 p-2 rounded-xl"
        >
          <MdHeadset className="text-white text-3xl" />
        </div>
        {callCenter && (
          <>
            {/* <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div> */}
            <div className="">
              <div
                className="sm:w-[350px] lg:w-[27%] md:w-[500px] h-[680px] bg-gradient-to-t from-slate-200 from-10%  to-green-500 rounded-xl  z-50 fixed overflow-y-scroll custom-scrollbar whitespace-nowrap hide-scrollbar "
                style={{
                  top: "50%",
                  right: "-9.5%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative px-7">
                  {menuCallCenter === "Home" && (
                    <div className="">
                      <div className=" ">
                        <div className="px-3 py-2 ">
                          <div className="flex items-center justify-between">
                            <div className="intercom-143t8ht e2j9h0w4">
                              <img
                                src="https://downloads.intercomcdn.com/i/o/409939/729d904d3f308eb287661a33/ef06bceeba80b2aa3a17700530e2b1ab.jpg"
                                alt="logo"
                                className="w-[32px] h-[32px]"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="">
                                <div size="40" shape="circle" className="">
                                  <img
                                    src="https://static.intercomassets.com/avatars/7978262/square_128/Screenshot_2025-01-02_at_2.04.12_PM-1735812317.png"
                                    alt="Profile image for Celestine"
                                    className="w-[40px] h-[40px] rounded-full"
                                  />
                                </div>
                              </div>
                              <div className="intercom-1lcqd7m e85jzrc0">
                                <div size="40" shape="circle" className="">
                                  <img
                                    src="https://static.intercomassets.com/avatars/7959701/square_128/wmremove-transformed-1734644047.jpeg"
                                    alt="Profile image for Yana"
                                    className="w-[40px] h-[40px] rounded-full"
                                  />
                                </div>
                              </div>
                              <div className="intercom-1lcqd7m e85jzrc0">
                                <div size="40" shape="circle" className="">
                                  <img
                                    src="https://static.intercomassets.com/avatars/6662848/square_128/20240530-113521-1717040160.png"
                                    alt="Profile image for COCO."
                                    className="w-[40px] h-[40px] rounded-full bg-slate-900"
                                  />
                                </div>
                              </div>
                              <div className="flex items-end">
                                <button
                                  className=" text-white w-[35px] h-[35px] hover:bg-[#464f50] rounded-lg flex items-center justify-center  "
                                  onClick={() => SetCallCenter(false)}
                                >
                                  <IoMdClose className="text-white text-3xl" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-12">
                            <h1 className=" text-3xl font-semibold">Hi👋</h1>
                            <h2 className=" text-3xl font-bold mt-3">
                              How can we help?
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* send button */}
                      <div
                        role="button"
                        tabIndex="0"
                        className="mx-3 bg-white rounded-xl mb-3"
                      >
                        <div className=" flex items-center justify-between p-4 ">
                          <div className="intercom-yetwdb e1xqkdfq6">
                            <div className="text-black font-semibold">
                              Send us a message
                            </div>
                            <div className="intercom-1ehwmn e15cg9300"></div>
                          </div>
                          <div className="text-green-500">
                            <IoSend />
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="mx-3 bg-white shadow-md rounded-xl">
                        <div
                          data-testid="news-item-card"
                          role="button"
                          tabIndex="0"
                          className="intercom-17f20kp etajtt46"
                        >
                          <div className="intercom-kimquz etajtt45">
                            <img
                              src="https://downloads.intercomcdn.com/i/o/t87ss9s4/1335634447/0ec1a7ecfa6c53f3b1ed4ddf4676/iScreen+Shoter+-+Google+Chrome+-+250115105053.jpg?expires=1741324500&signature=d36c6eb9602c6c4303bf866df661ea482e44c21754a8422eb49f9c4172a525c9&req=dSMkE899mYVbXvMW1HO4zZ1m3YAUmJHDQyC0EPQyXHR7xsC2CYVt1GCOHs7S%0AGJjt40s%3D%0A"
                              alt="New feature"
                              className="w-full h-40 rounded-t-xl"
                            />
                          </div>
                          <div className="p-3">
                            <div className="w-28 bg-[#e5f5ea]  p-1 rounded-lg text-green-500 ">
                              New feature
                            </div>

                            <div className="intercom-pbqhtn etajtt43">
                              <div className="">
                                <div className="text-black font-semibold py-2">
                                  Your BC.GAME Annual Review is Here! 🎉
                                </div>
                                <div className="">
                                  <div className="whitespace-pre-wrap text-sm text-black">
                                    As the year comes to a close, it’s time to
                                    reflect on your journey with BC.GAME! We’re
                                    excited to bring you a personalized Annual
                                    Review that highlights your most memorable
                                    moments, achievements, and
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {menuCallCenter === "News" && (
                    <div>
                      <div className="flex items-center justify-between mt-3 bg-green-500 border-b border-b-gray-500 sticky top-0 z-20 ">
                        <div className="w-10 "></div>
                        <strong className="text-black ">News</strong>
                        <div className="">
                          <button
                            className=" text-white w-[35px] h-[35px] hover:bg-[#464f50] rounded-lg flex items-center justify-center  "
                            onClick={() => SetCallCenter(false)}
                          >
                            <IoMdClose className="text-white text-3xl" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 ">
                        <div className="flex items-center justify-between">
                          <div className="">
                            <h2 className="text-xl font-semibold">Latest</h2>
                            <sub className="text-sm text-gray-900">
                              From Team BC Game
                            </sub>
                          </div>

                          <div
                            data-testid="avatar-stack"
                            className="intercom-1jh6fth e85jzrc1 flex space-x-2"
                          >
                            <div className="intercom-1igyx7e e85jzrc0">
                              <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img
                                  src="https://static.intercomassets.com/avatars/7932780/square_128/Screenshot_2024-12-05_at_10.38.48%E2%80%AFAM-1733380775.png"
                                  alt="Profile image for Safra"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>

                            <div className="intercom-1igyx7e e85jzrc0">
                              <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img
                                  src="https://static.intercomassets.com/avatars/7998265/square_128/Screenshot_2025-01-13_at_13.08.41-1736770243.png"
                                  alt="Profile image for Marko"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>

                            <div className="intercom-1igyx7e e85jzrc0">
                              <div className="w-9 h-9 rounded-full bg-black overflow-hidden">
                                <img
                                  src="https://static.intercomassets.com/avatars/6662848/square_128/20240530-113521-1717040160.png"
                                  alt="Profile image for COCO"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-5">
                          <div className="mx-3 bg-white shadow-md rounded-xl">
                            <div
                              data-testid="news-item-card"
                              role="button"
                              tabIndex="0"
                              className="intercom-17f20kp etajtt46"
                            >
                              <div className="intercom-kimquz etajtt45">
                                <img
                                  src="https://downloads.intercomcdn.com/i/o/t87ss9s4/1335634447/0ec1a7ecfa6c53f3b1ed4ddf4676/iScreen+Shoter+-+Google+Chrome+-+250115105053.jpg?expires=1741324500&signature=d36c6eb9602c6c4303bf866df661ea482e44c21754a8422eb49f9c4172a525c9&req=dSMkE899mYVbXvMW1HO4zZ1m3YAUmJHDQyC0EPQyXHR7xsC2CYVt1GCOHs7S%0AGJjt40s%3D%0A"
                                  alt="New feature"
                                  className="w-full h-40 rounded-t-xl"
                                />
                              </div>
                              <div className="p-3">
                                <div className="w-28 bg-[#e5f5ea]  p-1 rounded-lg text-green-500 ">
                                  New feature
                                </div>

                                <div className="intercom-pbqhtn etajtt43">
                                  <div className="">
                                    <div className="text-black font-semibold py-2">
                                      Your BC.GAME Annual Review is Here! 🎉
                                    </div>
                                    <div className="">
                                      <div className="whitespace-pre-wrap text-sm text-black">
                                        As the year comes to a close, it’s time
                                        to reflect on your journey with BC.GAME!
                                        We’re excited to bring you a
                                        personalized Annual Review that
                                        highlights your most memorable moments,
                                        achievements, and
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mx-3 bg-white shadow-md rounded-xl mt-5">
                            <div
                              data-testid="news-item-card"
                              role="button"
                              tabIndex="0"
                              className="intercom-17f20kp etajtt46"
                            >
                              <div className="intercom-kimquz etajtt45">
                                <img
                                  src="https://downloads.intercomcdn.com/i/o/t87ss9s4/1335634447/0ec1a7ecfa6c53f3b1ed4ddf4676/iScreen+Shoter+-+Google+Chrome+-+250115105053.jpg?expires=1741324500&signature=d36c6eb9602c6c4303bf866df661ea482e44c21754a8422eb49f9c4172a525c9&req=dSMkE899mYVbXvMW1HO4zZ1m3YAUmJHDQyC0EPQyXHR7xsC2CYVt1GCOHs7S%0AGJjt40s%3D%0A"
                                  alt="New feature"
                                  className="w-full h-40 rounded-t-xl"
                                />
                              </div>
                              <div className="p-3">
                                <div className="w-28 bg-[#e5f5ea]  p-1 rounded-lg text-green-500 ">
                                  New feature
                                </div>

                                <div className="intercom-pbqhtn etajtt43">
                                  <div className="">
                                    <div className="text-black font-semibold py-2">
                                      Your BC.GAME Annual Review is Here! 🎉
                                    </div>
                                    <div className="">
                                      <div className="whitespace-pre-wrap text-sm text-black">
                                        As the year comes to a close, it’s time
                                        to reflect on your journey with BC.GAME!
                                        We’re excited to bring you a
                                        personalized Annual Review that
                                        highlights your most memorable moments,
                                        achievements, and
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center justify-center my-5">
                            <div className="">
                              <svg
                                focusable="false"
                                aria-hidden="true"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                className="intercom-0 el7q6ip0"
                              >
                                <path d="M13.933 3.09a.35.35 0 0 0-.495.026l-7.236 8.012-3.757-3.393a.35.35 0 0 0-.495.025l-.86.951a.35.35 0 0 0 .026.495l4.96 4.48a.34.34 0 0 0 .17.082.346.346 0 0 0 .34-.107l8.324-9.217a.35.35 0 0 0-.026-.494l-.951-.86z"></path>
                              </svg>
                            </div>
                            <div className="intercom-6md6j2 e2tswn70 text-gray-700 font-semibold">
                              You re all caught up!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {menuCallCenter === "Message" && (
                    <div>
                      <div className="flex items-center justify-between mt-3 border-b border-b-gray-500  ">
                        <div className="w-10 "></div>
                        <strong className="text-black ">Message</strong>
                        <div className="">
                          <button
                            className=" text-white w-[35px] h-[35px] hover:bg-[#464f50] rounded-lg flex items-center justify-center  "
                            onClick={() => SetCallCenter(false)}
                          >
                            <IoMdClose className="text-white text-3xl" />
                          </button>
                        </div>
                      </div>

                      <div className="overflow-y-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
                        <div className="flex flex-col items-center ">
                          <div className="flex flex-col items-center justify-center mt-20">
                            <div>
                              <LuMessageSquareText className="text-black text-2xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">
                              No messages
                            </h2>
                            <span className="text-sm text-gray-500 mb-4">
                              Messages from the team will be shown here
                            </span>
                          </div>
                          <button
                            tabIndex="0"
                            className="intercom-sgelnn etxngei0 px-6 py-2 bg-green-500 text-white rounded-md flex items-center justify-center hover:bg-green-600 focus:outline-none mt-20"
                          >
                            Send us a message
                            <i className="ml-2">
                              <IoSend />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full fixed bottom-0 left-0 right-0 rounded-b-xl bg-white drop-shadow-md ">
                  <div className="p-3 flex items-center justify-between text-black text-2xl">
                    {[
                      { id: "Home", icon: <GrHomeRounded />, label: "Home" },
                      { id: "News", icon: <FaBullhorn />, label: "News" },
                      {
                        id: "Message",
                        icon: <LuMessageSquareText />,
                        label: "Message",
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => SetmenuCallCenter(item.id)}
                        className={`flex flex-col items-center gap-1 ${
                          menuCallCenter === item.id
                            ? "text-green-600"
                            : "text-black"
                        }`}
                      >
                        {item.icon}
                        <strong className="text-sm">{item.label}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Small device Responsive design */}
      <div className="w-full p-3 bg-[#3a4142] fixed -bottom-1 md:hidden rounded-t-2xl z-50">
        <div className="flex items-center justify-between ">
          {" "}
          <div className="relative left-0">
            <div onClick={() => SetMenuButtton((prev) => !prev)} className="">
              <img src={bottommenu} alt="" />{" "}
              <strong className="text-sm text-gray-400">Menu</strong>
            </div>
            {menuButton && (
              <div className="absolute w-screen py-5 bg-[#232626] bottom-[81px] h-[auto] -left-3 overflow-y-scroll custom-scrollbar hide-scrollbar">
                <div>
                  <PhoneNavigation />
                </div>
              </div>
            )}
          </div>
          <Link to={`detaile/${data.path}`}>
            <div className="text-[35px] text-gray-400 flex flex-col items-center justify-center gap-2">
              <GrSearchAdvanced className="text-green-500" />
              <strong className="text-sm">Explore</strong>
            </div>
          </Link>
          <Link to={`detaile/${data.path}`}>
            <div className="text-[35px] text-gray-400 flex flex-col items-center justify-center gap-2">
              <TbPlayCardStarFilled className="text-green-500" />
              <strong className="text-sm">Cashino</strong>
            </div>
          </Link>
          <Link to={"/Soccer?Soccer=ImHome"}>
            <div className="text-[35px] text-gray-400 flex flex-col items-center justify-center gap-2">
              <GiBasketballBall className="text-green-500" />
              <strong className="text-sm">Sports</strong>
            </div>
          </Link>
          <Link to={""}>
            <div className="text-[35px] text-gray-400 flex flex-col items-center justify-center gap-2">
              <IoChatboxEllipses className="text-green-500" />
              <strong className="text-sm">Chat</strong>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
