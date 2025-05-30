import { FaAngleRight } from "react-icons/fa";
import { FaAnglesDown, FaHeadphones } from "react-icons/fa6";
import menuData, { VIPData } from "../pages/HomePage/MenuData";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

const PhoneNavigation = () => {
    const [active, setActive] = useState(null);
    const [active2, setActive2] = useState(null);
  
    const [childData, setChieldData] = useState(null);
  
    function handelTogle(index) {
      if (active === index) {
        setChieldData(null);
        return setActive(null);
      }
      setActive(index);
    }
    function handelTogle2(index) {
      if (active2 === index) {
        setChieldData(null);
        return setActive2(null);
      }
      setActive2(index);
      setChieldData(index);
    }

  return (
    <div>
      <div className="">
        <div className="ml-4 h-[77vh] ">
          <div className="flex justify-between items-center ">
            <Link
              href={"/wallet/bc"}
              className="flex bg-gray-light p-2 mr-2  w-full ps-3 bg-custom-radial rounded-lg justify-center items-center"
            >
              <img
                className=""
                src="/assets/icons/coin-logo.webp"
                alt="Next.js logo"
                width={20}
                height={20}
              />
              <div className="text-primary ms-2">
                <h3 className="flex font-bold text-sm">
                  BC Token{" "}
                  <span className="text-xs font-medium flex items-center ms-1 text-red-500">
                    <FaAnglesDown /> 5.87%
                  </span>
                </h3>
                <h4 className="flex font-bold text-sm">$0.0006054</h4>
              </div>
              <div className="flex bg-gray-light-2 p-1  rounded-md ms-2">
                <FaAngleRight className="text-primary" />
              </div>
            </Link>
          </div>
          <Link
            to="bc-pocker"
            className="flex justify-between items-center mt-3"
            href={"/game/bc-pocker"}
          >
            <div className="flex bg-gray-light p-2 cursor-pointer hover:bg-custom-hover-dark w-full mr-2 ps-3  rounded-lg justify-between items-center">
              <div className="flex items-center">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 16"
                  className="h-5 flex-none w-5"
                >
                  <g clipPath="url(#clip0_14252_35454)">
                    <path
                      d="M9.88008 8.00004C9.88008 8.00004 9.88107 8.00004 9.88206 8.00004H9.28515C10.1929 8.91704 10.2275 10.369 9.3198 11.285C8.41207 12.202 7.09552 12.244 5.97101 11.371C4.84649 10.498 2.7113 7.99904 2.7113 7.99904C0.869122 5.71304 -0.239553 2.78804 1.3116 1.19604C0.969101 1.52704 0.682033 1.91604 0.464258 2.34804C0 3.26804 0 4.47205 0 6.88004V9.12004C0 11.528 0 12.732 0.464258 13.652C0.872092 14.461 1.52344 15.119 2.32426 15.531C3.23496 16 4.42678 16 6.81043 16H7.05691C9.44057 16 10.6324 16 11.5431 15.531C12.3439 15.119 12.9992 14.546 13.4031 13.652C13.8812 12.714 14.1465 10.818 12.7983 9.38404C12.7983 9.38404 11.6599 8.00004 9.88008 8.00004Z"
                      fill="url(#paint0_linear_14252_35454)"
                    />
                    <path
                      d="M9.88008 8.00004C9.88008 8.00004 9.88107 8.00004 9.88206 8.00004H9.28515C10.1929 8.91704 10.2275 10.369 9.3198 11.285C8.41207 12.202 7.09552 12.244 5.97101 11.371C4.84649 10.498 2.7113 7.99904 2.7113 7.99904C0.869122 5.71304 -0.239553 2.78804 1.3116 1.19604C0.969101 1.52704 0.682033 1.91604 0.464258 2.34804C0 3.26804 0 4.47205 0 6.88004V9.12004C0 11.528 0 12.732 0.464258 13.652C0.872092 14.461 1.52344 15.119 2.32426 15.531C3.23496 16 4.42678 16 6.81043 16H7.05691C9.44057 16 10.6324 16 11.5431 15.531C12.3439 15.119 12.9992 14.546 13.4031 13.652C13.8812 12.714 14.1465 10.818 12.7983 9.38404C12.7983 9.38404 11.6599 8.00004 9.88008 8.00004Z"
                      fill="#B3BEC1"
                    />
                    <path
                      d="M2.71142 8C2.71142 8 4.81889 5.536 5.94242 4.663C7.06693 3.79 8.41219 3.797 9.31992 4.714C10.2276 5.631 10.193 7.083 9.28527 7.999H9.88217C11.6986 7.998 12.7984 6.641 12.7984 6.641C14.1654 5.062 13.8675 3.266 13.4032 2.347C12.9954 1.538 12.3529 0.91 11.5521 0.497C10.6424 0.03 9.44167 0 7.05703 0H6.81055C4.4269 0 3.23507 0 2.32438 0.469C1.95119 0.661 1.61067 0.907 1.31172 1.197C-0.239435 2.788 0.86924 5.713 2.71142 8.001V8Z"
                      fill="#24EE89"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_14252_35454"
                      x1="14.8293"
                      y1="12.6808"
                      x2="1.46913"
                      y2="14.7416"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E0204E" />
                      <stop offset={1} stopColor="#FF525C" />
                    </linearGradient>
                    <clipPath id="clip0_14252_35454">
                      <rect width="13.7931" height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="text-primary ms-2">
                  <h3 className="flex font-bold text-sm">BC Poker</h3>
                </div>
              </div>
              <div className="flex bg-gray-light-2 p-1 px-2 text-green-dark text-xs rounded-md ms-2">
                New
              </div>
            </div>
          </Link>
          {menuData.map((item, i) => (
            <div className="mt-2" key={i}>
              <div
                className={`flex bg-gray-light p-2 cursor-pointer hover:bg-custom-hover-dark w-[98%] mr-2 ps-3 rounded-lg justify-between items-center ${
                  active === item ? "bg-custom-hover-dark" : ""
                }`}
                onClick={() => handelTogle(item.title)}
              >
                <div
                  className={`flex items-center ${
                    active === item.title ? "text-green-dark" : "text-secondary"
                  } `}
                >
                  {item.icons}
                  <div className="text-primary ms-2">
                    <h3 className="flex font-bold text-sm">{item.title}</h3>
                  </div>
                </div>
                <div className="flex bg-gray-light-2 p-1 text-green-dark text-xs rounded-md ms-2">
                  <MdKeyboardArrowDown
                    className={`text-primary text-xl transform font-semibold transition-transform duration-300 ${
                      active === item.title ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Check for newTab and active state to render submenu */}
              {item.newTab && active === item.title && (
                <div className="bg-gray-light w-full rounded-t-lg rounded-b-lg transform transition-transform duration-300">
                  {item.submenu.map((data, index) => (
                    <div key={index}>
                      <div
                        className={`flex cursor-pointer p-2 py-3 ps-3 rounded-lg hover:bg-custom-hover-dark justify-between items-center ${
                          active2 === data ? "bg-custom-hover-dark" : ""
                        }`}
                        onClick={() => handelTogle2(data)}
                      >
                        <Link to={data.path}>
                          <div
                            className={`flex items-center ${
                              active2 === data
                                ? "text-green-dark"
                                : "text-secondary"
                            } `}
                          >
                            {data.icons}
                            <div className="text-primary ms-2">
                              <h3 className="flex font-bold text-sm">
                                {data.title}
                              </h3>
                            </div>
                          </div>
                          {data.newTab && (
                            <div className="flex bg-gray-light-2 p-1 text-green-dark text-xs rounded-md ms-2">
                              <MdKeyboardArrowDown
                                className={`text-primary text-xl transform font-semibold transition-transform duration-300 ${
                                  active2 === data ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          )}
                        </Link>
                      </div>

                      {/* Check for newTab and active state to render submenu */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {childData && childData.newTab && (
            <div className="bg-gray-light w-full fixed top-0 left-[240px] min-h-full max-h-screen overflow-y-auto rounded-t-lg rounded-b-lg transform transition-transform duration-300">
              {childData?.childmenu?.map((childData, index) => (
                <div key={index}>
                  <div
                    className={`flex cursor-pointer p-2 py-3 ps-3 rounded-lg hover:bg-custom-hover-dark justify-between items-center ${
                      active2 === childData ? "bg-custom-hover-dark" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center ${
                        active2 === childData
                          ? "text-green-dark"
                          : "text-secondary"
                      } `}
                    >
                      {childData.icons}
                      <div className="text-primary ms-2">
                        <h3 className="flex font-bold text-sm">
                          {childData.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-gray-light w-[98%] rounded-t-lg rounded-b-lg mt-3 transform transition-transform duration-300">
            {VIPData.map((data, index) => (
              <div key={index}>
                <div
                  className={`flex cursor-pointer p-2 py-3 ps-3 rounded-lg hover:bg-custom-hover-dark justify-between items-center ${
                    active2 === data ? "bg-custom-hover-dark" : ""
                  }`}
                  onClick={() => handelTogle2(data)}
                  // onMouseEnter={() => handelTogle2(data)}
                  // onMouseLeave={() => handelTogle2(null)}
                >
                  <Link to={data.path}>
                    <div
                      className={`flex items-center ${
                        active2 === data ? "text-green-dark" : "text-secondary"
                      } `}
                    >
                      {data.icons}

                      <div className="text-primary ms-2">
                        <h3 className="flex font-bold text-sm items-center">
                          <p className="text-green-dark">{data.name} </p>{" "}
                          <span>{data.title}</span>
                        </h3>
                      </div>
                      <span className="text-sm ms-1 mt-1">{data.icnos2}</span>
                    </div>
                  </Link>
                  {data.newTab && (
                    <div className="flex bg-gray-light-2 p-1 text-green-dark text-xs rounded-md ms-2">
                      <MdKeyboardArrowDown
                        className={`text-primary text-xl transform font-semibold transition-transform duration-300 ${
                          active2 === data ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex bg-gray-light p-2 cursor-pointer hover:bg-custom-hover-dark w-full mr-2 ps-3  rounded-lg justify-between items-center">
              <div className="flex items-center">
                <FaHeadphones className="text-secondary" />
                <div className="text-primary ms-2">
                  <h3 className="flex font-bold text-sm">Live Support</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 pb-5">
            <div className="flex bg-gray-light p-2 cursor-pointer hover:bg-custom-hover-dark w-full mr-2 ps-3  rounded-lg justify-between items-center">
              <div className="flex items-center">
                <CiGlobe className="text-secondary" />
                <div className="text-primary ms-2">
                  <h3 className="flex font-bold text-sm">Live Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNavigation;
