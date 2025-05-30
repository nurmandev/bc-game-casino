import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Footer from "../../../components/Footer";

const SoccerStar = () => {
  //last section in the page
  const [selectedFormat, setSelectedFormat] = useState("European");
  const [showDropdown, setShowDropdown] = useState(false);
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Japan",
    "India",
  ];
  return (
    <div className="lg:mt-20 md:mt-36 sm:mt-36">
      {/* Favourites */}
      <div className="w-[97%] mx-auto  ">
        <div
          className="flex items-center justify-start gap-4"
          data-editor-id="blockTitle"
        >
          <svg
            className="bt11539"
            data-cy="ic-favourites-title"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "currentcolor",
              color: "rgb(255, 190, 3)",
              width: "auto",
              height: 32,
            }}
          >
            <path d="M15.0554 4.71739C15.3667 3.82183 16.6333 3.82183 16.9446 4.71739L19.2982 11.4886C19.4356 11.8837 19.8043 12.1516 20.2224 12.1601L27.3896 12.3061C28.3375 12.3254 28.7289 13.53 27.9733 14.1028L22.2609 18.4337C21.9276 18.6864 21.7867 19.1198 21.9078 19.5201L23.9837 26.3816C24.2583 27.2891 23.2336 28.0336 22.4554 27.492L16.5712 23.3975C16.2279 23.1586 15.7721 23.1586 15.4288 23.3975L9.54463 27.492C8.76639 28.0336 7.74174 27.2891 8.01629 26.3816L10.0922 19.5201C10.2133 19.1198 10.0724 18.6864 9.73915 18.4337L4.02666 14.1028C3.27112 13.53 3.6625 12.3254 4.61043 12.3061L11.7776 12.1601C12.1957 12.1516 12.5644 11.8837 12.7018 11.4886L15.0554 4.71739Z" />
          </svg>
          Favourites
        </div>
      </div>
      {/* mid content */}
      <div className="w-[40%] mx-auto mt-20 ">
        <div className="flex flex-col items-center justify-center p-6 bg-[#292d2e] rounded-lg">
          <div className="relative flex items-center justify-center w-20 h-20">
            <svg
              width={85}
              height={85}
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.2005 35.206C42.3017 34.9313 42.6983 34.9313 42.7995 35.206L44.4725 39.7491C44.5168 39.8693 44.6314 39.9508 44.7618 39.9549L49.6913 40.1091C49.9893 40.1184 50.1118 40.4878 49.8764 40.6669L45.9809 43.6288C45.8778 43.7072 45.834 43.8392 45.8704 43.9619L47.2439 48.6002C47.327 48.8806 47.0061 49.1089 46.7594 48.945L42.6788 46.2325C42.5709 46.1607 42.4291 46.1607 42.3212 46.2325L38.2406 48.945C37.9939 49.1089 37.673 48.8806 37.7561 48.6002L39.1296 43.9619C39.166 43.8392 39.1222 43.7072 39.0191 43.6288L35.1236 40.6669C34.8882 40.4878 35.0107 40.1184 35.3087 40.1091L40.2382 39.9549C40.3686 39.9508 40.4832 39.8693 40.5275 39.7491L42.2005 35.206Z"
                fill="#FFBE03"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5 66C55.4787 66 66 55.4787 66 42.5C66 29.5213 55.4787 19 42.5 19C29.5213 19 19 29.5213 19 42.5C19 55.4787 29.5213 66 42.5 66ZM42.5 68C56.5833 68 68 56.5833 68 42.5C68 28.4167 56.5833 17 42.5 17C28.4167 17 17 28.4167 17 42.5C17 56.5833 28.4167 68 42.5 68Z"
                fill="#F5A623"
                fillOpacity="0.4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5 83C64.8675 83 83 64.8675 83 42.5C83 20.1325 64.8675 2 42.5 2C20.1325 2 2 20.1325 2 42.5C2 64.8675 20.1325 83 42.5 83ZM42.5 85C65.9721 85 85 65.9721 85 42.5C85 19.0279 65.9721 0 42.5 0C19.0279 0 0 19.0279 0 42.5C0 65.9721 19.0279 85 42.5 85Z"
                fill="#F5A623"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <span className="mt-4 text-center text-gray-700">
            You need to login in order to see your favourite events.
          </span>
          <button className="mt-4 px-6 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-700">
            Login
          </button>
        </div>
      </div>

      {/* Last section in the page */}
      <div className="w-3/5 mx-auto p-4 rounded-lg flex flex-col items-center justify-center mt-5">
        <div className="flex items-center justify-start gap-2 ml-40">
          <div className="mb-2 text-gray-500 font-semibold uppercase tracking-wider">
            Odds Format
          </div>
          <div className="w-96 flex justify-between items-start space-x-4">
            <div className="relative w-1/2">
              <div
                onClick={() => setShowDropdown((prev) => !prev)}
                className="bg-[#292d2e] p-2 rounded-md shadow-md flex justify-between items-center cursor-pointer text-white"
              >
                <span>{selectedFormat}</span>
                <FaCaretDown className="w-4 h-4 text-gray-500" />
              </div>
              {showDropdown && (
                <div className="absolute bg-[#292d2e] shadow-md rounded-md mt-1 w-full h-40 overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer text-sm"
                      onClick={() => {
                        setSelectedFormat(country);
                        setShowDropdown(false);
                      }}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="w-[60%] mt-3 text-xs text-gray-500 text-center">
          Although every effort is made to ensure data displayed on our site is
          accurate, this data is for information purposes and should be used as
          a guide only. In the event of any particular information being
          incorrect, we assume no liability for it.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default SoccerStar;
