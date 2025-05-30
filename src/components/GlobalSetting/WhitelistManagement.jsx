import { useState } from "react";
import { FaChevronLeft, FaPlus } from "react-icons/fa";

const WhitelistManagement = () => {
  const [management, setManagement] = useState("");

  const handleToggle3 = () => {
    setManagement((prev) => ({
      ...prev,
      checked: !prev.checked,
    }));
  };
  return (
    <div>
      <div className="w-full p-4 bg-[#323738] rounded-xl">
        <div className="flex items-center justify-between border-b border-solid border-[#3f4546]">
          <div className="">
            <strong className="">Whitelist Management</strong>
            <div className="flex items-center gap-3 mt-3 pb-5 ">
              <h3 className="text-[#afb5b0] text-sm">Whitelist Disabled</h3>
              <div
                className={`switch switch-xs cursor-pointer rounded-full w-12 h-6 flex items-center ${
                  management.checked ? "bg-green-500" : "bg-[#373e3f]"
                }`}
                onClick={handleToggle3}
              >
                <div
                  className={`thumb w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
                    management.checked
                      ? "translate-x-6 bg-white"
                      : "bg-[#6e7576]"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div>
            <button
              className="flex items-center gap-2 bg-[#3a4142] text-green-500 w-auto px-3 rounded-lg py-2"
              type="button"
            >
              <FaPlus />
              <span className="ml-1 font-bold text-sm">Add Address</span>
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-3 my-4">
          <button
            className="w-[48%] bg-[#1e2121] bg-input_darken flex-1 h-10 flex items-center px-3 rounded-md"
            type="button"
          >
            <span className="sm:text-secondary">All Type</span>
            <div className="p-1 w-6 h-6 ml-auto bg-layerx flex items-center justify-center rounded-md">
              <FaChevronLeft className="icon w-3 h-3 transition-all -rotate-90" />
            </div>
          </button>

          <button
            className="w-[48%] bg-[#1e2121] bg-input_darken flex-1 h-10 flex items-center px-3 rounded-md"
            type="button"
          >
            <span className="sm:text-secondary">All Type</span>
            <div className="p-1 w-6 h-6 ml-auto bg-layerx flex items-center justify-center rounded-md">
              <FaChevronLeft className="icon w-3 h-3 transition-all -rotate-90" />
            </div>
          </button>
        </div>

        <div className="w-full p-3 bg-[#323738] rounded-lg mt-3 sm:py-4 sm:px-6 sm:mt-4">
          <div className="py-3 sm:py-4">
            <div className="w-full h-60 flex items-center justify-center">
              <div className="py-10 text-center flex flex-col items-center justify-center w-full">
                <img
                  className="w-48 h-48"
                  src="../../../public/Wallet_images/flate-img/empty.webp"
                  alt="No Data"
                />
                <div className="leading-5 mt-4">
                  Oops! There is no data yet!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitelistManagement;
