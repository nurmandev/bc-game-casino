import bc2 from "../../../public/Wallet_images/balance-img/BC (2).webp";
import { BsExclamationSquare } from "react-icons/bs";

const Flate1 = () => {
  return (
    <div>
      <div className=" h-[50px] bg-[#3a4142] rounded  ">
        <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
          <div className="flex items-center gap-2 ">
            <img src={bc2} alt="" className="h-[24px] w-[24px] rounded " />
            <h1 className="text-white font-extrabold text-[16px] ">BC</h1>
            <div className=" w-[16px] h-[16px]">
              <BsExclamationSquare className="text-[#25dc68] " />
            </div>
          </div>
          <div className="flex items-center gap-5 text ">
            <h1 className="text-white font-bold">₹0.00</h1>
            <h3 className="text-[#25dc68] font-bold">Deposite </h3>
            <h2 className="text-[#25dc68] font-bold">Withdraw</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flate1;
