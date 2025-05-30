import { useState } from "react";
import { BsExclamationSquare } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import Footer from "../../../components/Footer";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Favorites = ({ onSearch }) => {
  const [isopen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };
  return (
    <div>
      <div className="w-[100%] mt-20 ">
        <div className="text-[14px] text-[#bcb3c1] font-semibold tracking-wider mt-5  ">
          <strong className="text-white ">My Favorites</strong>
          <div className="flex items-center gap-5 border border-gray-500 hover:border-green-500 rounded-lg p-2 bg-[#1e2121] my-3">
            <button onClick={handleSearch} className="">
              <FaMagnifyingGlass />
            </button>
            <input
              type="text"
              placeholder="Search name"
              className="flex-1 p- outline-none text-white bg-[#1e2121] "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex items center gap-3">
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-[50%]  "
            >
              <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                  All Regions
                </div>
                <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                  <button className="relative">
                    <IoChevronDownSharp />
                  </button>
                  {isopen && (
                    <div className="absolute lg:w-[615px] lg:h-[350px] sm:w-[350px] sm:h-[350px] bg-[#292d2e] lg:top-[155px] sm:bottom-0 sm:left-4  lg:left-[260px]  rounded-xl ">
                      <form className="max-w-[100%] mx-auto mt-3">
                        <div className="relative ">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoSearch className="text-[#b3bec1] text-[20px] ml-3 " />
                          </div>
                          <input
                            type="search"
                            className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium  bg-[#292d2e] hover:border-[#24ee89]  text-white  "
                            placeholder="Search "
                          />
                        </div>
                      </form>
                      <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                        <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                          <div className="flex items-center gap-2 ">
                            <img
                              src="/public/Lottery_Image/BCD.webp"
                              alt=""
                              className="h-[24px] w-[24px] rounded "
                            />
                            <h1 className="text-white font-extrabold text-[16px] ">
                              BCD
                            </h1>
                            <div className=" w-[16px] h-[16px]">
                              <BsExclamationSquare className="text-[#25dc68] " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div onClick={() => setOpen((prev) => !prev)} className="w-[50%]  ">
              <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                  SortBy: Popular
                </div>
                <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                  <button className="relative">
                    <IoChevronDownSharp />
                  </button>
                  {open && (
                    <div className="absolute lg:w-[615px] lg:h-[200px] bg-[#292d2e] lg:top-[155px] lg:left-[900px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl ">
                      <form className="max-w-[100%] mx-auto mt-3"></form>
                      <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                        <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                          <h1 className="text-white font-bold text-[16px] ">
                            A-z
                          </h1>
                          <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                        </div>
                      </div>
                      <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                        <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                          <h1 className="text-white font-bold text-[16px] ">
                            Z-A
                          </h1>
                          <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                        </div>
                      </div>
                      <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                        <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                          <h1 className="text-white font-bold text-[16px] ">
                            Picks For You
                          </h1>
                          <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                        </div>
                      </div>
                      <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                        <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                          <h1 className="text-white font-bold text-[16px] ">
                            Popular
                          </h1>
                          <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 w-full">
          <img
            className="w-12 h-12"
            src="/public/Lottery_Image/like-icon-db435da6.webp"
            alt="Like Icon"
          />
          <p className="mt-6 text-base font-extrabold text-primary">
            No favourites yet
          </p>
          <p className="text-secondary text-sm font-semibold flex items-center mt-2 gap-1">
            <span>Click the</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              className="fill-primary"
            >
              <path d="M6.85675 1.24027C7.12738 0.722864 7.86865 0.724927 8.1364 1.24383L9.79739 4.46283C9.90066 4.66297 10.0915 4.80336 10.3133 4.84235L13.9346 5.47884C14.5235 5.58234 14.7378 6.31632 14.2971 6.7204L11.6324 9.1639C11.4493 9.33185 11.3655 9.58228 11.4108 9.82662L12.0905 13.4968C12.2012 14.0943 11.5684 14.5524 11.0353 14.2605L7.84625 12.5146C7.63053 12.3965 7.36948 12.3965 7.15375 12.5146L4.01341 14.2339C3.4722 14.5302 2.83305 14.054 2.96207 13.4506L3.73283 9.84629C3.7873 9.59153 3.70011 9.32719 3.50475 9.15484L0.747213 6.72206C0.294327 6.32251 0.503934 5.57655 1.09865 5.47137L4.65598 4.84221C4.87609 4.80328 5.0657 4.66446 5.1693 4.46638L6.85675 1.24027Z"></path>
            </svg>
            <span>to favourite games.</span>
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Favorites;
