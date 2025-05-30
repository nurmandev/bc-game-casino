import { FaAngleRight } from "react-icons/fa";
import { FaAnglesDown, FaHeadphones } from "react-icons/fa6";
import menuData, { VIPData } from "../../pages/HomePage/MenuData";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";


const HomeSide = () => {
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
  // const [popupShow, setPopupShow] = useState("");

  return (
    <div className="sx:hidden md:block ">
      <div className="w-[20%] bg-[#232626] sx:w-[100%] md:w-[240px] pt-5 mt-14 fixed left-0">
        <div className="ml-4 w-[85%] h-[100vh] overflow-auto">
          <div className="flex justify-between items-center ">
            <Link
              href={"/wallet/bc"}
              className="flex bg-gray-light p-2 mr-2  w-[200px] ps-3 bg-custom-radial rounded-lg justify-center items-center"
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
          {/* Bc Poker Game Section */}
          {menuData.map((item, i) => (
            <div className="mt-2" key={i}>
              <div
                className={`flex bg-gray-light p-2 cursor-pointer hover:bg-custom-hover-dark lg:w-[200px] mr-2 ps-3 rounded-lg justify-between items-center ${
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
                <div className="bg-gray-light lg:w-[200px] rounded-t-lg rounded-b-lg transform transition-transform duration-300">
                  {item.submenu.map((data, index) => (
                    <div key={index}  className="relative"  onClick={() => {
                      // if (i === "title") {
                      //   setPopupShow;
                      // }
                    }}
                  >
                    {/* <ReferAndEarn isOpen={popupShow} onClose={() => setPopupShow(false)} className="absolute left-40"/> */}
                      <div
                        className={`flex cursor-pointer p-2 py-3 ps-3 rounded-lg hover:bg-custom-hover-dark justify-between items-center ${
                          active2 === data ? "bg-custom-hover-dark" : ""
                        }`}
                        onClick={() => handelTogle2(data)}
                      >
                        <Link to={i === 0 ? `detaile/${data.path}` : `/${data.path}` }>
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
            <div className="bg-gray-light w-[200px] fixed top-0 left-[240px] min-h-full max-h-screen overflow-y-auto rounded-t-lg rounded-b-lg transform transition-transform duration-300">
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

          <div className="bg-gray-light w-[200px]  rounded-t-lg rounded-b-lg mt-3 transform transition-transform duration-300">
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
            <div className="flex bg-gray-light p-2 cursor-pointer hover:bg-custom-hover-dark w-[200px] mr-2 ps-3  rounded-lg justify-between items-center">
              <div className="flex items-center">
                <FaHeadphones className="text-secondary" />
                <div className="text-primary ms-2">
                  <h3 className="flex font-bold text-sm">Live Support</h3>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between items-center mt-3 pb-5">
            <div className="flex bg-gray-light p-2 cursor-pointer hover:bg-custom-hover-dark w-[200px] mr-2 ps-3  rounded-lg justify-between items-center">
              <div className="flex items-center">
                <CiGlobe className="text-secondary" />
                <div className="text-primary ms-2">
                  <h3 className="flex font-bold text-sm">Live Support</h3>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeSide;
