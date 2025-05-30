import crocodile from "../../../public/Wallet_images/flate-img/empty.webp";

const Nft = () => {
  return (
    <div>
      <div className="w-[100%] bg-[#3a4142] rounded-lg  ">
        <div className=" flex items-center justify-between gap-5 px-5 m-auto py-5">
          <h1 className="text-white font-semibold text-[20px] whitespace-nowrap">
            <span className="text-[#9aa3a6] ">Total:</span> ₹0.00
            <span className="text-[#9aa3a6] pl-3 ">NFT:</span> 0
          </h1>
          <div className="">
            <div className="bg-gradient-to-r from-[#3cec84] to-[#8ae975] rounded-lg">
              <div className="w-[100%] px-10 pb-2 pt-1 rounded-lg  ">
                <h1 className="text-black font-bold text-center whitespace-nowrap">
                  <span className="font-bold text-[20px]  ">+</span> Deposit
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5 py-12 bg-[#323738] rounded-2xl  ">
        <img src={crocodile} alt="No data" className="mb-4 w-60 h-60" />
        <p className="text-white text-lg">Oops! There is no data yet!</p>
      </div>
    </div>
  );
};

export default Nft;
