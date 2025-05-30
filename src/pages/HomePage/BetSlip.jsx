

import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

const BetSlip = ( data ) => {
  if (!data) return null;
  const getCurrentDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  };
  const currentDateTime = getCurrentDateTime();
  return (
    <div className="w-full">
      <h2 className="text-base py-3 font-bold bg-gray-light text-center  rounded-t-lg">
        Bet Slip
      </h2>
      <div className="w-full p-3 ">
        <div className="bg-gray-light rounded-md pb-3">
          <div className="rounded-t-md p-3  bg-[url('/assets/game_detail.png')] w-full bg-cover bg-center">
            <div className="flex flex-col justify-center text-center">
              <p className="text-sm ">Profit</p>
              <h2 className="text-green-dark text-2xl font-bold justify-center flex items-center">
                <img
                  className="w-[30px] rounded-lg"
                  src={data.icons}
                  alt={data.name}
                  width={100}
                  height={30}
                 
                />
                2345677800 USDC
              </h2>
              <h3 className="text-lg font-bold text-center">986787</h3>
            </div>
            <div className="bg-gray-trans rounded-md flex justify-between items-center p-2 mt-2">
              <div className="flex flex-col items-center justify-center">
                <p className="text-xs text-secondary">Bet Amount</p>
                <p className="text-xs ">9504</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-xs text-secondary">Bet Amount</p>
                <p className="text-xs ">9504</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-6 h-6 -ms-2 rounded-full bg-gray-dark"></div>
            <div className="border-dashed border-secondary w-full border-b h-0 mt-3"></div>
            <div className="w-6 h-6 -mr-2 rounded-full bg-gray-dark"></div>
          </div>

          <div className="flex items-center">
            <img
              className="w-[50px] h-[60px] rounded-lg"
              src="/assets/icons/diamond.webp"
              alt="img"
              width={100}
              height={20}
              
            />
            <div className="ms-2">
              <p className="text-xs">
                BrZy_671{" "}
                <span className="text-secondary">on {currentDateTime} </span>
              </p>
              <p className="text-xs">bet Id: {data?.id}</p>
            </div>
          </div>

          <div className="bg-gray-light-2 m-3 p-2 mb-3 flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="w-[50px] h-[60px] rounded-lg"
                src={data.img}
                alt={data.name}
                width={100}
                height={20}
                
              />
              <div className="ms-2">
                <p className="text-sm">{data?.name}</p>
                <p className="text-sm">PG Soft</p>
              </div>
            </div>
            <Link to={""} className="flex items-center text-sm">
              <p>Play Now </p>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
