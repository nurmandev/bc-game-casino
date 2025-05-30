import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaChevronDown, FaGoogle, FaLine, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiAnimalSkull, GiInsectJaws } from "react-icons/gi";
import { SlSocialSteam } from "react-icons/sl";

const SignUpPages = () => {
  const [showReferralInput, setShowReferralInput] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    referralCode: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-layer2 w-full h-full flex absolute inset-0">
      {/* Left Section - Image and Logo */}
      <div className="relative w-1/2 h-full flex-none">
        <img
          alt="top-img"
          className="w-full h-full rounded-s-xl"
          src="../../../public/signIn_Images/sign-in-bg-image.webp"
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

      {/* Right Section - Form */}
      <div className="w-1/2 h-full flex-none px-6 py-5 relative">
        <div className="w-full h-8">
          <p className="text-lg font-extrabold">Sign In</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="input mt-4 bg-[#1e2121] rounded-lg border border-gray-400 hover:border-green-500">
            <input
              type="text"
              name="email"
              placeholder="Email / Phone Number"
              className="w-full p-2 bg-transparent outline-none"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input pr-2 bg-[#1e2121] rounded-lg border border-gray-400 hover:border-green-500 mt-3 flex items-center">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 bg-transparent outline-none"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <svg className="icon w-6 h-6 text-secondary" viewBox="0 0 32 32">
                <path
                  fillRule="evenodd"
                  d="M2.667 16.003c0-2.522 5.968-8.08 13.333-8.08s13.333 5.453 13.333 8.08S23.365 24.077 16 24.077 2.667 18.525 2.667 16.003Zm13.326 5.942H16a5.94 5.94 0 0 0 5.941-5.94v-.008a5.948 5.948 0 1 0-5.948 5.948Zm.63-9.133a1.765 1.765 0 0 0-.274.94v.012A1.768 1.768 0 0 0 19.376 15l-.007-.023a3.195 3.195 0 1 1-3.021-2.159h.27l.005-.007Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Referral Code Input */}
          <div className="mt-3">
            <div className="flex items-center h-6 text-secondary">
              <span className="font-semibold mr-1 cursor-pointer text-sm">
                Enter Referral / Promo Code
              </span>
              <div
                onClick={() => setShowReferralInput((prev) => !prev)}
                className="cursor-pointer"
              >
                <FaChevronDown />
              </div>
            </div>
            {showReferralInput && (
              <div className="mt-1 bg-[#1e2121] border border-secondary rounded-lg">
                <input
                  type="text"
                  name="referralCode"
                  placeholder="Enter code"
                  className="w-full p-2 bg-transparent outline-none"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>

          {/* Agreement Checkboxes */}
          <div className="relative flex mt-2">
            <button
              type="button"
              className="checkbox btn-like w-6 h-6 rounded-md scale-75 bg-green-500"
              onClick={() =>
                setFormData({
                  ...formData,
                  agreeToTerms: !formData.agreeToTerms,
                })
              }
            >
              <div
                className="checkbox-ico"
                aria-selected={formData.agreeToTerms}
              >
                {formData.agreeToTerms && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.7175 9.13192L11.376 16.6893C10.8875 17.1922 10.0955 17.1922 9.60694 16.6893L5.28248 12.2377C5.86696 11.5211 6.86535 10.5974 7.39746 10.1453L10.4915 13.2611C10.4915 13.2611 15.2885 8.16223 16.444 6.97272C17.0454 7.51667 18.1091 8.41399 18.7175 9.13192Z" />
                  </svg>
                )}
              </div>
            </button>
            <span className="text-secondary text-sm ">
              I agree to the User Agreement confirm I am at least 18 years old
            </span>
          </div>

          <div className="relative flex mt-1">
            <button
              type="button"
              className="checkbox btn-like w-5 h-5 rounded-md scale-75 bg-green-500"
              onClick={() =>
                setFormData({
                  ...formData,
                  agreeToMarketing: !formData.agreeToMarketing,
                })
              }
            >
              <div
                className="checkbox-ico"
                aria-selected={formData.agreeToMarketing}
              >
                {formData.agreeToMarketing && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.7175 9.13192L11.376 16.6893C10.8875 17.1922 10.0955 17.1922 9.60694 16.6893L5.28248 12.2377C5.86696 11.5211 6.86535 10.5974 7.39746 10.1453L10.4915 13.2611C10.4915 13.2611 15.2885 8.16223 16.444 6.97272C17.0454 7.51667 18.1091 8.41399 18.7175 9.13192Z" />
                  </svg>
                )}
              </div>
            </button>
            <span className="text-secondary text-sm">
              I agree to receive marketing promotions from BC.CO.
            </span>
          </div>

          {/* Submit Button */}
          <button
            className="bg-gradient-to-r from-green-dark to-yellow-dark p-1 rounded-lg w-full mt-6"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        {/* Already Have an Account */}
        <div className="flex items-center mt-6 h-6">
          <span>Already have an account?</span>
          <a className="ml-2 font-extrabold text-brand">Sign Up</a>
        </div>

        {/* Social Login Section */}
        <div className="w-full px-6 absolute bottom-5 left-0">
          <div className="w-full h-4 flex items-center">
            <div className="flex-1 h-[1px] bg-third"></div>
            <div className="flex items-center">
              <div className="w-24 h-[0.5px] bg-secondary"></div>
              <p className="mx-3 flex-none text-secondary">
                Log in directly with
              </p>
              <div className="w-24 h-[0.5px] bg-secondary"></div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <FaGoogle className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
            <FaXTwitter className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
            <BsFillSendFill className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
            <GiAnimalSkull className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
            <GiInsectJaws className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
            <FaWhatsapp className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
            <FaLine className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
            <SlSocialSteam className="border border-secondary w-8 h-8 bg-[#232626] p-2 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPages;
