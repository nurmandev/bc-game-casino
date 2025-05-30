import { RiArrowRightSLine } from "react-icons/ri";

const CryptoCasinoInfo = () => {
  return (
    <>
      <div className="bg-[#1E2121] text-white p-6 space-y-6 flex justify-center gap-10">
        {/* Title and Content */}
        <div className="space-y-4 w-[50%] mt-5">
          <h1 className="text-xl font-bold ">Crypto Online Casino</h1>
          <p className="text-[#AEB8BB] font-[14px]">
            Casinos online have not always been around, but we can safely say
            that online casinos have been used a lot since they came on the
            market. And it’s not in short demand nor options, and now in 2023,
            we have 1000s and 1000s to pick from – it’s just a matter of what
            you like and what payment options you would like to see at the
            casino.
          </p>
          <p className="text-[#AEB8BB] font-[14px]">
            Players are always looking for something new, which will help make
            the gaming experience so much better and more accessible. Allowing
            the player to focus on the absolute fun of a casino, that’s right,
            the games themselves.
          </p>
          {/* Show More Button */}
          <button className="bg-[#3A4142] hover:bg-[#3A4149] text-white px-2 py-2 rounded-lg flex items-center font-bold">
            Show more
            <span className="ml-1 mt-1 ">
              <RiArrowRightSLine className="font-bold text-bold h-6" />
            </span>
          </button>
        </div>

        {/* Feedback Section */}
        <div className="space-y-4 w-[50%] ">
          <h2 className="text-xl font-bold ">
            Help us improve your experience
          </h2>
          <p className="text-[#AEB8BB] font-[14px]">
            Get rewarded for your valuable feedback!
          </p>
          <p className="text-[#AEB8BB] font-[14px]">
            Email us:{" "}
            <a
              href="mailto:feedback@bcgame.com"
              className="text-green-400 underline"
            >
              feedback@bcgame.com
            </a>
          </p>
          <p className="text-[#AEB8BB] font-[14px]">
            If you find any vulnerabilities or leaks, please contact us at{" "}
            <a href="mailto:security@bcgame.com">security@bcgame</a>{" "}
            (security-related issues only; non-related issues will be omitted).
          </p>
          <p className="text-[#AEB8BB] font-[14px]">
            Security email:{" "}
            <a
              href="mailto:security@bcgame.com"
              className="text-green-400 underline"
            >
              security@bcgame.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CryptoCasinoInfo;
