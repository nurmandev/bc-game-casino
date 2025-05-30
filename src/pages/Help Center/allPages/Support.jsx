import { Data } from "../DataSupport";

export const Support = () => {
  return (
    <>
      <div className="min-h-screen bg-[#232626] flex  items-start py-10 px-4">
        <div className="w-full  bg-[#2c2f30] rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {Data.map((item, index) => (
              <div key={index} className="p-4  rounded-md">
                <p className="p-4  text-[#BCC7CB] font-bold mb-1">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
