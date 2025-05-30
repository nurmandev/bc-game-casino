import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import india from "../../../public/Wallet_images/balance-img/flag.webp";
import { IoIosAlert } from "react-icons/io";

const Buy = () => {
  const [open, setOpen] = useState("");
  const [dropOpen, setDropOpern] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert("You have agreed to the disclaimer!");
    } else {
      alert("Please agree to the disclaimer.");
    }
  };

  return (
    <div className="bg-[#3a4142] rounded-2xl py-7 ">
      <div className="w-[95%] m-auto  ">
        <h1 className="mb-3  text-[#b3bec1] text-[14px] font-bold tracking-wider ">
          You pay with
        </h1>
        <div className=" h-[50px] bg-[#292d2e] rounded-lg  ">
          <div className=" flex items-center justify-between px-2 ">
            <div className="flex items-center text ">
              <h1 className="text-white font-bold">₹30.00</h1>
            </div>

            <div onClick={() => setOpen((prev) => !prev)} className="relative cursor-pointer w-[250px] bg-[#383f40] border border-[#656565] rounded-md flex items-center justify-between p-1 text-[16px] my-2 font-semibold">
              <div className="flex items-center justify-start gap-2 text-white">
                <img src={india} alt="" className="w-[30px] h-[20px]" />
                INR
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                <button
                  className="relative"
                  
                >
                  <IoChevronDownSharp className="text-white" />
                </button>
                {open && (
                  <div className="absolute lg:w-[450px] sm:w-[350px] h-[350px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl z-20 ">
                    <form className="max-w-[100%] mx-auto mt-3">
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <IoSearch className="text-[#b3bec1] text-[20px] ml-3" />
                        </div>
                        <input
                          type="search"
                          className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium bg-[#292d2e] hover:border-[#24ee89] text-white"
                          placeholder="Search"
                        />
                      </div>
                    </form>

                    <div className="w-[95%] m-auto  h-[50px] hover:bg-[#3a4142] rounded-lg mt-3  ">
                      <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                        <h1 className="text-white font-extrabold text-[16px] ">
                          ERC20
                        </h1>
                        <div className="w-[20px] h-[20px] rounded-full border-[#292d2e] border-[3px] cursor-pointer hover:border-[#24ee89] hover:border-[5px] "></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] m-auto  ">
        <h1 className="mb-3 pt-3 text-[#b3bec1] text-[14px] font-bold tracking-wider ">
          You get
        </h1>
        <div className=" h-[50px] bg-[#292d2e] rounded-lg  ">
          <div className=" flex items-center justify-between px-2 ">
            <div className="flex items-center text ">
              <h1 className="text-white font-bold">₹29.7</h1>
            </div>

            <div  onClick={() => setDropOpern((prev) => !prev)} className="relative cursor-pointer w-[250px] bg-[#383f40] border border-[#656565] rounded-md flex items-center justify-between p-1 text-[16px] my-2 font-semibold">
              <div className="flex items-center justify-start gap-2 text-white">
                <img src={india} alt="" className="w-[30px] h-[20px]" />
                INR
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                <button
                  className="relative"
                 
                >
                  <IoChevronDownSharp className="text-white" />
                </button>
                {dropOpen && (
                  <div className="absolute lg:w-[450px] sm:w-[350px] h-[350px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl z-20 ">
                    <form className="max-w-[100%] mx-auto mt-3">
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <IoSearch className="text-[#b3bec1] text-[20px] ml-3" />
                        </div>
                        <input
                          type="search"
                          className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium bg-[#292d2e] hover:border-[#24ee89] text-white"
                          placeholder="Search"
                        />
                      </div>
                    </form>

                    <div className="w-[95%] m-auto  h-[50px] hover:bg-[#3a4142] rounded-lg mt-3  ">
                      <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                        <h1 className="text-white font-extrabold text-[16px] ">
                          ERC20
                        </h1>
                        <div className="w-[20px] h-[20px] rounded-full border-[#292d2e] border-[3px] cursor-pointer hover:border-[#24ee89] hover:border-[5px] "></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-[#616161] my-7   " />
        <div className="flex items-center justify-between">
          <h2 className="text-[#bcbec1] font-medium ">Total (including fee)</h2>
          <h3 className="text-white font-semibold"> 30 USD</h3>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[#bcbec1] font-medium ">You will get</h2>
          <h3 className="text-[#24ee89] font-semibold">29.57 USDT</h3>
        </div>

        <form onSubmit={handleSubmit} className="disclaimer-form my-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="disclaimer"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <label htmlFor="disclaimer" className="text-white">
              I have read and agree to the disclaimer.
            </label>
          </div>
        </form>

        <div>
          <div className="bg-[#314940] rounded-lg">
            <div className="w-[100%] p-3  rounded-lg mt-3  ">
              <div className=" flex items-center justify-start gap-5  ">
                <IoIosAlert className="text-[#24ee89] text-[30px] " />
                <div className="text-white font-bold">
                  Send only BCD to this deposit address. Transfers below 1 BCD
                  will not be credited.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-r from-[#3cec84] to-[#8ae975] rounded-lg">
            <div className="w-[100%] p-3  rounded-lg mt-3  ">
             <h1 className="text-black font-bold text-center">Buy with moonPay</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
