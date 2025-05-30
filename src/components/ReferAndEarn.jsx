import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ReferAndEarn = () => {
  const [information, setInformation] = useState(true);
  const referralLink = "https://bc.co/i-2wuv64xig-n/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <>
      {information && (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30"></div>
          <div
            className="sm:w-[350px] md:w-[500px] lg:w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl snap-y overflow-y-auto scroll-smooth"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-full h-[70px] bg-[#232626] rounded-t-3xl">
              <button
                className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg"
                onClick={() => setInformation(false)}
              >
                <IoMdClose className="text-[#a4aeb1]" />
              </button>
            </div>

            {/* Popup Content */}
            <div className="px-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 rounded-lg bg-[#1e2121] px-2 py-4">
                  <img
                    className="h-auto w-32 object-contain"
                    src="/handshake.webp"
                    alt="Refer a Friend"
                  />
                  <div className="text-xl font-extrabold">
                    <p className="mb-4">
                      REFER A FRIEND AND GET
                      <br />
                      <span className="text-3xl text-[#ff9820]">
                        ₹86,784.52
                      </span>
                      <span className="mx-1">+</span>
                      <span className="text-3xl text-[#25bb71]">15%</span>
                      <br />
                      COMMISSION
                    </p>
                    <p className="text-sm font-normal text-[#25bb71]">
                      Invite friends, earn money.
                    </p>
                  </div>
                </div>

                {/* Referral Link */}
                <div>
                  <p className="text-secondary">Referral link</p>
                  <div className="mt-2 flex w-full items-center justify-between rounded-xl border border-input bg-layer3 px-3 py-2">
                    <p className="text-[#25bb71]">{referralLink}</p>
                    <button
                      className="button button-second button-m h-10 p-2"
                      type="button"
                      onClick={copyToClipboard}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Copy Link Button */}
                <button
                  className="bg-gradient-to-r from-green-dark to-yellow-dark button-m w-full p-3 rounded-lg"
                  type="button"
                  onClick={copyToClipboard}
                >
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferAndEarn;
