import { FaCopy } from "react-icons/fa";

const RefflesCodeFriends = () => {
  return (
    <div>
      <div className="bg-layer2 font-semibold">
        {/* Referral Info */}
        <div className="items-center justify-between rounded-lg bg-layer4 p-4 sm:flex  bg-[#323738] mt-5">
          <div className="mb-4 flex flex-1 items-center">
            <div className="flex-1 text-secondary">
              <div>Referral Code Created</div>
              <div className="text-2xl font-extrabold">
                <span className="text-primary">1</span>/20
              </div>
            </div>
            <div className="flex-1 text-secondary">
              <div>Friends</div>
              <div className="text-2xl font-extrabold text-primary">0</div>
            </div>
          </div>
          <div className="flex w-full items-center border-third sm:h-20 sm:w-60 sm:border-l sm:pl-10">
            <button className="button button-brand button-m h-10 w-full bg-gradient-to-r from-green-dark to-yellow-dark text-black rounded-lg ">
              Create Code
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <section className="relative mt-4 rounded-xl bg-layer4 pt-2 px-2  bg-[#323738]">
          <div
            data-type="indicator"
            className="scroll-x tabs-title hide-scroll sm:w-96"
          >
            <button className="tabs-btn btn-like" aria-selected="true">
              Referral Code
            </button>
            <button className="tabs-btn btn-like">Friends</button>
            <div className="tabs-indicator"></div>
          </div>

          {/* Table Content */}
          <div className="tabs-content">
            <div className="sm:p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-solid border-b-third">
                    {[
                      "Name",
                      "Code",
                      "Link",
                      "Commission Rate",
                      "Date Created",
                      "Referrals",
                    ].map((header, index) => (
                      <th
                        key={index}
                        className="px-3 py-2 align-middle text-xs font-semibold  text-secondary text-center"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-solid border-b-third">
                    <td className="px-3 py-2 align-middle  text-left font-semibold text-secondary">
                      --
                    </td>
                    <td className="px-3 py-2 align-middle  text-center">
                      <div className="flex items-center gap-3 font-semibold">
                        <span>2wuv64xig</span>
                        <button className="button button-m" type="button">
                          <FaCopy />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-2 align-middle  text-center">
                      <div className="flex items-center gap-3 font-semibold">
                        <span className="font-semibold leading-6 text-primary">
                          https://bc.co/i-2wuv64xig-n/
                        </span>
                        <button className="button button-m" type="button">
                          <FaCopy />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-2 align-middle  text-center font-semibold leading-6 text-primary">
                      25%
                    </td>
                    <td className="px-3 py-2 align-middle  text-center font-semibold leading-6 text-secondary">
                      2025-01-02 09:51:35
                    </td>
                    <td className="px-3 py-2 align-middle  text-right">
                      <div className="flex cursor-pointer items-center justify-end gap-2">
                        <span className="font-semibold text-primary">0</span>
                        <svg
                          className="icon w-4 rotate-180 text-secondary"
                          viewBox="0 0 32 32"
                        >
                          <path d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Separator Line */}
          <div className="absolute top-12 h-[1px] w-full bg-third"></div>
        </section>
      </div>
    </div>
  );
};

export default RefflesCodeFriends;
