import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const PaymentMethods = () => {
  const [activeMethod, setActiveMethod] = useState("All Cards");

  const methods = [
    { id: 1, label: "All Cards" },
    { id: 2, label: "Credit Cards" },
    { id: 3, label: "Debit Cards" },
    { id: 4, label: "Bank Account" },
  ];

  return (
    <div>
      <div className="w-full p-3 bg-[#323738] rounded-lg sm:py-4 sm:px-6 relative">
        <button
          className="flex items-center gap-2 bg-[#3a4142] text-green-500 h-10 absolute right-4 w-auto px-3 rounded-lg py-0"
          type="button"
        >
          <FaPlus />
          <span className="ml-1 font-bold text-sm">Add New Method</span>
        </button>

        <div className="w-full h-9 overflow-x-auto flex items-center hidden-scroll-bar">
          {methods.map((method) => (
            <button
              key={method.id}
              className={`p-2 h-9 mr-1 text-sm rounded-lg center sm:h-10 sm:px-4 ${
                activeMethod === method.label
                  ? "bg-[#3a4142]"
                  : "bg-transparent"
              }`}
              onClick={() => setActiveMethod(method.label)}
            >
              <span
                className={`whitespace-nowrap ${
                  activeMethod === method.label
                    ? "text-primary font-extrabold"
                    : "text-secondary"
                }`}
              >
                {method.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-3 pt-3 w-full border-t border-solid border-[#3f4546] sm:mt-4 sm:pt-4 sm:flex sm:flex-wrap sm:gap-2">
          <p className="text-center font-semibold text-secondary w-full">
            No card yet! Please add a card
          </p>
        </div>
      </div>

      <div className="w-full p-3 bg-[#323738] rounded-lg mt-3 sm:py-4 sm:px-6 sm:mt-4">
        <div className="w-full h-11 flex items-center pb-3 border-b border-[#3f4546] border-solid">
          <span className="text-base font-extrabold">History</span>
        </div>
        <div className="py-3 sm:py-4">
          <div className="w-full h-60 flex items-center justify-center">
            <div className="py-10 text-center flex flex-col items-center justify-center w-full">
              <img
                className="w-48 h-48"
                src="../../../public/Wallet_images/flate-img/empty.webp"
                alt="No Data"
              />
              <div className="leading-5 mt-4">Oops! There is no data yet!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
