import { FaCheckCircle, FaIdCard, FaVideo, FaHome } from "react-icons/fa";

const PersonalVerification = () => {
  return (
    <div>
      <div className="page-container lg:w-full sm:w-96 min-h-96 flex-1 rounded-xl">
        <div className="py-4 bg-[#323738] sm:px-6 sm:rounded-lg sm:py-6">
          <div className="w-full">
            <div className="flex items-center h-12 border-b border-[#3f4546] pb-4">
              <span className="font-extrabold text-base">
                Personal Verification
              </span>
            </div>

            {/* Basic Verification Section */}
            <div className="sm:flex w-full sm:gap-2">
              <div className="p-4 bg-[#3a4142] rounded-lg flex-1 sm:mt-4 sm:bg-layer5">
                <p className="text-center font-extrabold text-base">
                  Basic Verification
                </p>
                <div className="flex items-center px-5 h-6 mt-4">
                  <FaCheckCircle className="w-6 h-6 fill-secondary" />
                  <p className="ml-2 text-base font-semibold">
                    Personal Information
                  </p>
                </div>

                <div className="flex items-center px-5 h-6 mt-3">
                  <FaCheckCircle className="w-6 h-6 fill-secondary" />
                  <p className="ml-2 text-base font-semibold">
                    Facial Verification
                  </p>
                </div>

                <div className="flex items-center px-5 h-6 mt-3">
                  <FaIdCard className="w-6 h-6 fill-secondary" />
                  <p className="ml-2 text-base font-semibold">Government ID</p>
                </div>

                <button
                  className="bg-gradient-to-r from-green-dark to-yellow-dark rounded-lg text-black font-bold w-full mt-6 h-12"
                  type="button"
                >
                  Verify Now
                </button>
                <div className="flex mt-2 items-center justify-center">
                  <span className="ml-2">Review time: Few mins</span>
                </div>
              </div>

              {/* Advanced Verification Section */}
              <div className="py-5 px-4 bg-[#3a4142] rounded-lg mt-3 flex-1 sm:mt-4 sm:bg-layer5">
                <p className="text-center font-extrabold text-base">
                  Advanced Verification
                </p>

                <div className="flex items-center px-5 h-6 mt-4">
                  <svg
                    className="icon w-6 h-6 fill-secondary"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.193 11.84c0-0.718 0.582-1.3 1.3-1.3h7c0.718 0 1.3 0.582 1.3 1.3s-0.582 1.3-1.3 1.3h-7c-0.718 0-1.3-0.582-1.3-1.3z"></path>
                    <path d="M13.426 8.921c0.508 0.508 0.508 1.331 0 1.838l-3 3c-0.508 0.508-1.331 0.508-1.838 0l-1-1c-0.508-0.508-0.508-1.331 0-1.838s1.331-0.508 1.838 0l0.081 0.081 2.081-2.081c0.508-0.508 1.331-0.508 1.838 0z"></path>
                    <path d="M15.193 21.173c0-0.718 0.582-1.3 1.3-1.3h7c0.718 0 1.3 0.582 1.3 1.3s-0.582 1.3-1.3 1.3h-7c-0.718 0-1.3-0.582-1.3-1.3z"></path>
                    <path d="M13.426 18.254c0.508 0.508 0.508 1.331 0 1.838l-3 3c-0.508 0.508-1.331 0.508-1.838 0l-1-1c-0.508-0.508-0.508-1.331 0-1.838s1.331-0.508 1.838 0l0.081 0.081 2.081-2.081c0.508-0.508 1.331-0.508 1.838 0z"></path>
                    <path d="M3.914 3.914c1.863-1.863 4.624-2.547 8.086-2.547h8c3.462 0 6.223 0.684 8.086 2.547s2.547 4.624 2.547 8.086v8c0 3.462-0.684 6.223-2.547 8.086s-4.624 2.547-8.086 2.547h-8c-3.462 0-6.223-0.684-8.086-2.547s-2.547-4.624-2.547-8.086v-8c0-3.462 0.684-6.223 2.547-8.086zM5.753 5.753c-1.137 1.137-1.786 3.042-1.786 6.247v8c0 3.205 0.649 5.111 1.786 6.247s3.042 1.786 6.247 1.786h8c3.205 0 5.111-0.649 6.247-1.786s1.786-3.042 1.786-6.247v-8c0-3.205-0.649-5.11-1.786-6.247s-3.042-1.786-6.247-1.786h-8c-3.205 0-5.11 0.649-6.247 1.786z"></path>
                  </svg>
                  <p className="ml-2 text-base font-semibold">
                    Basic Verification
                  </p>
                </div>

                <div className="flex items-center px-5 h-6 mt-3">
                  <FaHome className="w-6 h-6 fill-secondary" />
                  <p className="ml-2 text-base font-semibold">
                    Proof of Address
                  </p>
                </div>

                <div className="flex items-center px-5 h-6 mt-4">
                  <FaVideo className="w-6 h-6 fill-secondary" />
                  <p className="ml-2 text-base font-semibold">
                    Video Verification
                  </p>
                </div>

                <button
                  className="bg-gradient-to-r from-green-dark to-yellow-dark rounded-lg text-black font-bold w-full mt-6 h-12"
                  type="button"
                >
                  Verify Now
                </button>
                <div className="flex mt-2 items-center justify-center">
                  <span className="ml-2">Review time: 10 D</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caution Message */}
          <div
            className="mt-4 p-2 rounded-lg flex"
            style={{ backgroundColor: "rgba(255, 152, 32, 0.15)" }}
          >
            <img
              className="w-6 h-6 flex-none"
              alt="caution"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZnPcRMxFMY/LQwcMR0oHSQdbDowFcQ5AaeQCrJUEDgA4WRTAekg6QCoAHWAOSW5RHmSNZNkV+vVk56THPY347GtlXb19Emf/iwwMjIy8pgobAD7Tc/oznv0sw5J5/R/od6aHxBGPAB7ouf0Neu5vFDvzD4EqSCI/a6P0F95x4wCPIYgYgpQt9F0t79pmbGl3hsDASQVaJJzKswhhIgC9queUlP85BXCLqlwjkJkFKjA79cKRxCgOABvmYAGn5oG/QcUUtSFwsA9Q14A7ulLvKABvW+WyKRMgcpPVhq5WExwiSIVshVIsE1Dn09UyddhVtaI12CJa+zk2upz5NOsuWaCyxj3h4Jd0Ncvquykk9OpoLwJvEEGWV3IftHboVV7MuDP3Rb1vytaD/UzpSBrZJA3Bp4NeL7Cv07aNf4PlMmyVXYABbY5hLPVPW4hvgJCE1AUi8bO9YRThBVAWG1qbA7NtdXkALxtWsaCLZcKBxwVOAo0eAicrV6lr62SAgiTFnuAFTBLtdU0BQTX78kkmsVgAME2azw8dYoKwwpI2WaFV+CSoPzaAGgDfoAc21SY3ruPcxWLbfDRpEKDtY/qoXitD5xSpT+HpzgVa+QwsGdYtxptUDZpTdtKZLGyVdcAh7HLUQVYRyT9GKTsB1LpOYrpU6BBGen7gVRWA3q3ndwZxN66Sict/n4ghaitdl1Iot+qiGXagta/vW+nbtVGHtQ6Mgl2XKOcTsN0x4CzLQksjv0GZdUgGjJ0dnUxBU4hxWry0pDjrJ0Qt9ET7TLWeFoYerew1U6MLyUs3EsIg6eDt+XYhWgA3vYusEMnCYdU8DceD1fxj3iZf/A1MjIyslluAAOryVK6dTrKAAAAAElFTkSuQmCC"
            />
            <p className="ml-1.5 text-secondary">
              To serve you better we ask that you provide original identifying
              documents. This will secure your account in cases of account
              recovery. It also helps to ensure that the gifts or actual rewards
              you receive are sent to the correct location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalVerification;
