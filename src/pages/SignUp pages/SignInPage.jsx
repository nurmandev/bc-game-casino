import { BsFillSendFill } from "react-icons/bs";
import { FaGoogle, FaLine, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiAnimalSkull, GiInsectJaws } from "react-icons/gi";
import { SlSocialSteam } from "react-icons/sl";

const SignInPage = () => {
  return (
    <div>
      <div className="bg-layer2 w-full h-full flex absolute inset-0">
        <div className="relative w-1/2 h-full flex-none">
          <img
            alt="top-img"
            className="w-full h-full rounded-s-xl"
            src="../../../public/signIn_Images/sign-in-bg-image.webp "
          />
          <img
            alt="logo"
            className="w-auto h-8 absolute top-4 left-6"
            src="../../../public/logo.webp"
          />
          <div className="absolute bottom-0 left-0 w-full text-center">
            <p className="text-4xl font-extrabold whitespace-nowrap overflow-hidden">
              Stay Untamed
            </p>
            <p className="mt-1 mb-[104px] font-semibold text-base whitespace-nowrap overflow-hidden">
              Sign Up &amp; Get Welcome Bonus
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex-none px-6 py-5 relative">
          <div className="w-full h-8 ">
            <p className="text-lg font-extrabold">Sign In</p>
          </div>
          <form>
            <div className="input mt-4 bg-[#1e2121] rounded-lg border border-gray-400 hover:border-green-500">
              <input
                required
                placeholder="Email / Phone Number"
                className="w-full p-2 bg-transparent outline-none"
              />
            </div>
            <div className="input pr-2 bg-[#1e2121] rounded-lg border border-gray-400 hover:border-green-500 mt-3 flex items-center">
              <input
                required
                type="password"
                placeholder="Password"
                className="w-full p-2 bg-transparent outline-none"
              />
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer ">
                <svg
                  className="icon w-6 h-6 text-secondary "
                  viewBox="0 0 32 32"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.667 16.003c0-2.522 5.968-8.08 13.333-8.08s13.333 5.453 13.333 8.08S23.365 24.077 16 24.077 2.667 18.525 2.667 16.003Zm13.326 5.942H16a5.94 5.94 0 0 0 5.941-5.94v-.008a5.948 5.948 0 1 0-5.948 5.948Zm.63-9.133a1.765 1.765 0 0 0-.274.94v.012A1.768 1.768 0 0 0 19.376 15l-.007-.023a3.195 3.195 0 1 1-3.021-2.159h.27l.005-.007Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <a
              href="/login/forgot"
              className="mt-4 font-bold flex justify-end text-secondary"
            >
              Forgot your password?
            </a>
            <button
              className="bg-gradient-to-r from-green-dark to-yellow-dark p-1 rounded-lg w-full mt-6"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center mt-6 h-6">
            <span>New to BC.CO?</span>
            <a className="ml-2 font-extrabold text-brand">Create account</a>
          </div>
          <div className="w-full px-6 absolute bottom-5 left-0">
            <div className="w-full h-4 flex items-center">
              <div className="flex-1 h-[1px] bg-third"></div>
              <div className="flex items-center">
                <div className="w-24 h-[0.5px] bg-secondary "></div>
                <p className="mx-3 flex-none text-secondary">
                  Log in directly with
                </p>
                <div className="w-24 h-[0.5px] bg-secondary "></div>
              </div>
            </div>
            <button
              className="button button-m w-full mt-3 -mb-3 h-10 border border-secondary rounded-xl"
              type="button"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="icon size-5 text-secondary"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.94889 9.61874C10.8395 9.61774 11.6934 9.26349 12.3232 8.6337C12.953 8.00391 13.3073 7.15002 13.3083 6.25937V6.15906C13.3083 5.2681 12.9543 4.41363 12.3243 3.78362C11.6943 3.15362 10.8399 2.79968 9.94889 2.79968C9.05793 2.79968 8.20346 3.15362 7.57345 3.78362C6.94345 4.41363 6.58951 5.2681 6.58951 6.15906V6.25937C6.59052 7.15002 6.94477 8.00391 7.57456 8.6337C8.20435 9.26349 9.05823 9.61774 9.94889 9.61874ZM13.6497 17.3455C13.6754 17.4077 13.7063 17.4674 13.742 17.5241H3.40037C3.309 17.5241 3.21889 17.5028 3.13725 17.4617C3.0556 17.4207 2.98469 17.3611 2.93017 17.2878C2.87565 17.2145 2.83904 17.1294 2.82326 17.0394C2.80748 16.9494 2.81296 16.857 2.83928 16.7694L3.27846 15.3091C3.70969 13.8754 4.5914 12.6188 5.79289 11.7255C6.99438 10.8322 8.45171 10.3498 9.94889 10.3498C10.6103 10.3498 11.2639 10.444 11.8911 10.6261C11.8928 10.7443 11.9001 10.8627 11.913 10.9808C11.987 11.6559 12.2435 12.2982 12.6551 12.8384C12.9082 13.1706 13.214 13.4566 13.5587 13.6858V16.8885C13.5587 17.0453 13.5896 17.2006 13.6497 17.3455ZM18.1837 9.21199C18.4312 9.62371 18.5618 10.0951 18.5615 10.5755C18.5613 11.1904 18.3467 11.786 17.9546 12.2598C17.5625 12.7335 17.0175 13.0557 16.4135 13.1708V13.9537C16.4135 13.9757 16.4207 13.9971 16.434 14.0145L17.2632 15.1009C17.2787 15.1214 17.2859 15.147 17.2831 15.1725C17.2803 15.1981 17.2679 15.2216 17.2483 15.2382L16.4932 15.878C16.4828 15.8867 16.4744 15.8975 16.4684 15.9095C16.4623 15.9216 16.4587 15.9348 16.4579 15.9483C16.4571 15.9618 16.459 15.9753 16.4635 15.988C16.468 16.0007 16.4751 16.0124 16.4843 16.0224L17.2557 16.8593C17.2732 16.8783 17.2827 16.9033 17.2822 16.9292C17.2817 16.9551 17.2712 16.9797 17.2529 16.998L16.2028 18.0481C16.184 18.0669 16.1585 18.0775 16.1319 18.0775C16.1054 18.0775 16.0799 18.0669 16.0611 18.0481L14.9723 16.9593C14.963 16.95 14.9556 16.939 14.9506 16.9268C14.9455 16.9147 14.9429 16.9016 14.9429 16.8885V13.0306C14.4964 12.8534 14.1067 12.5578 13.8156 12.1756C13.5245 11.7935 13.343 11.3392 13.2907 10.8617C13.2384 10.3842 13.3172 9.90141 13.5187 9.46531C13.7201 9.0292 14.0367 8.65625 14.4342 8.38654C14.8317 8.11682 15.2952 7.96054 15.7749 7.93449C16.2546 7.90844 16.7323 8.01361 17.1567 8.2387C17.5811 8.46378 17.9362 8.80027 18.1837 9.21199ZM15.4777 10.4419C15.6081 10.529 15.7614 10.5755 15.9183 10.5755C16.0224 10.5755 16.1255 10.555 16.2217 10.5151C16.3179 10.4753 16.4053 10.4169 16.479 10.3432C16.5526 10.2696 16.611 10.1822 16.6509 10.086C16.6907 9.98975 16.7112 9.88663 16.7112 9.78249C16.7112 9.62565 16.6647 9.47233 16.5776 9.34193C16.4904 9.21152 16.3666 9.10988 16.2217 9.04986C16.0768 8.98985 15.9173 8.97414 15.7635 9.00474C15.6097 9.03534 15.4684 9.11087 15.3575 9.22178C15.2466 9.33268 15.1711 9.47398 15.1405 9.62781C15.1099 9.78163 15.1256 9.94108 15.1856 10.086C15.2456 10.2309 15.3473 10.3547 15.4777 10.4419Z"
                  />
                </svg>
                <span className="text-primary ml-2 font-bold">
                  Sign In with passkey
                </span>
              </div>
            </button>
            <div className="mt-6 flex items-center justify-between">
              <FaGoogle className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
              <FaXTwitter className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
              <BsFillSendFill className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
              <GiAnimalSkull className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
              <GiInsectJaws className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
              <FaWhatsapp className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
              <FaLine  className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
              <SlSocialSteam className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
