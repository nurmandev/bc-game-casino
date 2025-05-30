
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { Data } from "../DataLawEnforcement";

export const  LawEnforcement = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  

  return (
    <>
      <div className="min-h-screen bg-[#232626] flex  items-start py-10 px-4">
        <div className="w-full  bg-[#2c2f30] rounded-lg shadow-lg p-6">
          
          <div className="space-y-4">
            {Data.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-4   text-white text-left font-bold transition-colors duration-200"
                >
                  <span>{item.question}</span>
                  <div className="bg-[#464F50] rounded p-1">
                    <IoIosArrowForward
                      className={`w-5 h-5 transition-transform ease-in duration-300 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="p-4  text-[#BCC7CB] font-bold mb-1">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
