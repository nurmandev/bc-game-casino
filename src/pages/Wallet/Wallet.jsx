import { useState, useEffect } from "react";
import { FaWallet, FaPiggyBank } from "react-icons/fa";
import { GrAtm } from "react-icons/gr";
import { RiCurrencyFill, RiNftLine } from "react-icons/ri";
import { MdSwipe } from "react-icons/md";
import { TbCoinEuroFilled, TbTransactionDollar } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";
import Balance from "./Balance";
import Deposite from "./Deposite";
import Withdraw from "./Withdraw";
import Buy from "./Buy";
import Swap from "./Swap";
import VaultPro from "./VaultPro";
import Nft from "./Nft";
import Transaction from "./Transaction";
import Rollover from "./Rollover";
import BetHistory from "./BetHistory";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Wallet = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const wallet = queryParams.get("wallet");

  const [active, setActive] = useState(wallet || "Balance");

  const walletData = [
    {
      title: "Balance",
      icon: <FaWallet />,
      component: <Balance />,
    },
    {
      title: "Deposit",
      icon: <FaPiggyBank />,
      component: <Deposite />,
    },
    
    {
      title: "Withdraw",
      icon: <GrAtm />,

      component: <Withdraw />,
    },
    {
      title: "Buy",
      icon: <RiCurrencyFill />,
      component: <Buy />,
    },
    {
      title: "Swap",
      icon: <MdSwipe />,
      component: <Swap />,
    },
    {
      title: "Vault Pro",
      icon: <TbCoinEuroFilled />,
      component: <VaultPro />,
    },
    {
      title: "NFT",
      icon: <RiNftLine />,
      component: <Nft />,
    },
    {
      title: "Transaction",
      icon: <TbTransactionDollar />,
      component: <Transaction />,
    },
    {
      title: "Rollover",
      icon: <GiProgression />,
      component: <Rollover />,
    },
    {
      title: "Bet History",
      icon: <IoIosTime />,
      component: <BetHistory />,
    },
  ];

  const handlePath = (itemTitle) => {
    navigate(`?wallet=${itemTitle}`);
  };

  useEffect(() => {
    if (wallet) {
      setActive(wallet);
    }
  }, [wallet]);

  return (
    <div className="w-full mt-16">
      <div className="left-0 h-auto">
        <h1 className="w-[100%] m-auto text-white font-bold text-[24px] my-5">
          WALLET
        </h1>
        <div className="lg:w-[100%] m-auto lg:flex lg:items-start lg:justify-between md:w-[90%] md:flex md:items-start md:justify-start gap-5">
          {/* Sidebar */}
          <div className="lg:w-[20%] lg:h-[550px] bg-[#323738] rounded-2xl lg:p-4 md:w-[30%] md:h-[550px] md-[#323738] sm:w-[90%] sm:h-auto sm:mx-auto sm:snap-x sm:overflow-x-auto">
            <div className="lg:flex lg:flex-col lg:items-start lg:justify-center md:flex md:flex-col md:items-start sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:w-[100%] sm:m-auto">
              {walletData.map((item, index) => (
                <div
                  key={index}
                  className={`lg:flex lg:flex-row lg:items-center lg:justify-center md:flex md:flex-row md:items-center md:justify-start sm:flex sm:flex-col sm:items-center sm:justify-center gap-3 cursor-pointer p-3 rounded-lg sm:snap-start ${
                    active === item.title
                      ? "bg-[#3a4142] text-white font-bold"
                      : "text-gray-400"
                  }`}
                  onClick={() => {
                    setActive(item.title);
                    handlePath(item.title); // Navigate to the correct section
                  }}
                >
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:w-[80%] lg:mt-0 sm:w-[90%] sm:m-auto sm:mt-5 md:mt-0 md:block">
            <div className="rounded-2xl shadow-lg">
              {walletData.map(
                (item, index) =>
                  active === item.title && (
                    <div key={index}>{item.component}</div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
