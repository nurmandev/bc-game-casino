import flage from "../../../public/Wallet_images/Transation details images/flag-7403565_640.webp";
import { IoIosCopy } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { RiLoopLeftFill } from "react-icons/ri";

const TransationDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 ">
        <img src={flage} alt="" className="w-8 h-5 rounded" />
        <a href="#" className="text-white font-bold text-[25px] ">
          +₹5,000.00
        </a>
      </div>

      <div className="bg-[#3a4142] rounded-2xl py-5 mt-5 ">
        <div>
          <div className="flex items-center justify-end mr-3 text-[#24ee89] ">
            <IoIosCopy className="mr-2" /> <h1>Copy all details</h1>
          </div>
          <div className="px-3 py-2">
            <hr className="border border-[#616161]  " />
          </div>
          <div className="flex items-center justify-between px-3">
            <div className="text-[#b3bec1] text-[14px] font-bold ">Status</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <div className=" w-2 h-2 rounded-full  bg-[#ff9820] "></div>
              </div>
              <div className="text-white font-bold tracking-wider">
                Processing
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-3 my-3">
            <div className="text-[#b3bec1] text-[14px] font-bold ">
              Order ID
            </div>
            <div className="text-white font-bold tracking-wider  flex items-center gap-2">
              F-1820318566205216669 <IoIosCopy />
            </div>
          </div>
          <div className="flex items-center justify-between px-3">
            <div className="text-[#b3bec1] text-[14px] font-bold ">Txid</div>
            <div className="text-white font-bold tracking-wider  flex items-center gap-2">
              21735...01225 <IoIosCopy />
            </div>
          </div>
          <div className="flex items-center justify-between px-3 mt-3">
            <div className="text-[#b3bec1] text-[14px] font-bold ">
              Create on
            </div>
            <div className="text-white font-bold tracking-wider">
              1/4/2025, 5:14:24 PM
            </div>
          </div>
        </div>
        <div className="mt-5 ml-40">
          <button className=" bg-[#4a5354] w-[150px] py-3 rounded-xl flex items-center justify-center gap-1 ">
            View More
            <FaChevronDown />
          </button>
        </div>
      </div>

      <h1 className="mt-4">Order Progress</h1>
      <div className="">
        <div className="bg-[#314940] rounded-lg">
          <div className="w-[100%] p-3  rounded-lg mt-3  ">
            <div className=" flex items-center justify-start gap-5  ">
              <div className="text-white font-semibold">
                Tips: INR deposit from merchant PayIn normally take 1 hour(s) to
                be processed.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-5">
          <div className="w-7 h-7 bg-[#24ee89] rounded-full flex items-center justify-center text-black ">
            <FaCheck />
          </div>
          <div>
            <h1>Deposit Order Created</h1>
            <h3 className="text-[#777f80] text-[14px] flex items-center justify-center ">
              {" "}
              <CiClock2 className="mr-2 text-[#777f80]" />
              Updated at 1/4/2025, 5:14:24 PM
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-5 my-6">
          <div className="w-7 h-7 bg-[#24ee89] rounded-full flex items-center justify-center text-black ">
            <RiLoopLeftFill className="animate-spin" />
          </div>
          <div>
            <h1>3rd Merchant Processing</h1>
            <h3 className="text-[#777f80] text-[14px] ">
              {" "}
              This process may take 1 hours. <br />{" "}
              <span className="flex items-center justify-center ">
                {" "}
                <CiClock2 className="mr-2 text-[#777f80]" /> Updated at
                1/4/2025, 5:14:24 PM
              </span>
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-7 h-7 bg-[#24ee89] rounded-full flex items-center justify-center text-black ">
            3
          </div>
          <div>
            <h1>Transaction Completed</h1>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-gradient-to-r from-[#3cec84] to-[#8ae975] rounded-lg">
          <div className="w-[100%] px-10 pb-2 pt-1 rounded-lg  ">
            <h1 className="text-black font-extrabold text-center">
              Speed up The Deposite{" "}
              <span className="font-bold text-[20px] "></span>
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-5 underline text-center text-[20px] ">
        <h1>Rate your experience</h1>
      </div>
    </div>
  );
};

export default TransationDetails;
