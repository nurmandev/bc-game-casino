import { BiLogoTelegram } from "react-icons/bi";
import { FaSteam, FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";

const AccountInfo = () => {
  const profiles = [
    {
      id: 1,
      username: "Krcdnemqmuac",
      userId: "64812696",
      avatarUrl: "//img2.distributedresourcestorage.com/avatar/64812696/s?t=0",
    },
  ];

  const contactInfoData = [
    {
      id: 1,
      email: "user1@example.com",
      phoneNumber: "(+91) 9719212742",
      isVerified: true,
    },
  ];

  const accountData = [
    {
      name: "Google",
      icon: <IoLogoGoogle className="text-secondary" />,
      status: "Not Connected",
    },
    {
      name: "Telegram",
      icon: <BiLogoTelegram className="text-secondary" />,
      status: "Not Connected",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-secondary" />,
      status: "Not Connected",
    },
    {
      name: "Steam",
      icon: <FaSteam className="text-secondary" />,
      status: "Not Connected",
    },
  ];
  return (
    <div>
      <div>
        <div>
          {profiles.map((profile) => (
            <div
              key={profile.id} // Unique key for each profile
              className="w-full mt-4 p-3 bg-[#323738] rounded-lg sm:mt-0 sm:py-4 sm:px-6"
            >
              {/* Header */}
              <div className="h-11 flex items-center pb-3 border-b border-solid border-[#3f4546]">
                <span className="text-base font-extrabold">Profile Info</span>
              </div>

              {/* Profile Content */}
              <div className="flex items-center mt-3">
                {/* Avatar */}
                <div className="size-16 rounded-full bg-layer5 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      alt="avatar"
                      className="w-full h-full"
                      src={profile.avatarUrl}
                    />
                  </div>
                </div>

                {/* User Info */}
                <div className="ml-2.5">
                  <p className="text-base">{profile.username}</p>
                  <p className="mt-1 text-secondary">
                    <span>User ID:</span>
                    <span className="ml-0.5">{profile.userId}</span>
                  </p>
                </div>

                {/* Edit Button */}
                <button
                  className="bg-gradient-to-r from-green-dark to-yellow-dark rounded-lg min-w-24 h-8 ml-auto overflow-hidden sm:min-w-24 sm:h-10"
                  type="button"
                >
                  <span className="ml-0.5 whitespace-nowrap">Edit</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div>
            {contactInfoData.map((contact) => (
              <div
                key={contact.id} // Unique key for each contact info
                className="w-full p-3 bg-[#323738] rounded-lg mt-3 sm:py-4 sm:px-6 sm:mt-4"
              >
                {/* Header */}
                <div className="h-11 flex items-center pb-3 border-b border-solid border-[#3f4546]">
                  <span className="text-base font-extrabold">Contact Info</span>
                </div>

                {/* Content */}
                <div className="mt-3">
                  {/* Email Verification Section */}
                  <p className="h-4.5 flex items-center text-secondary">
                    E-mail Verification
                  </p>
                  <div className="sm:flex sm:items-center">
                    <p className="mt-1.5 text-secondary sm:flex-1">
                      Verify your email address is valid and accessible by you.
                    </p>
                    <button
                      className="bg-gradient-to-r from-green-dark to-yellow-dark rounded-lg p-2 w-full mt-3 sm:w-auto sm:ml-2 flex-none sm:min-w-24 sm:mt-1.5"
                      type="button"
                    >
                      <span className="text-primary_brand ml-1">Add</span>
                    </button>
                  </div>

                  {/* Phone Number Section */}
                  <p className="h-4.5 mt-4 flex items-center text-secondary">
                    Phone Number
                  </p>
                  <div className="sm:flex sm:items-center">
                    <div className="flex rounded-lg items-center px-4 bg-input_bright mt-3 border border-solid border-[#3f4546] h-12 w-full sm:h-10">
                      <span className="text-base text-secondary">
                        {contact.phoneNumber}
                      </span>
                      <div className="flex ml-auto items-center">
                        <img
                          alt="tips"
                          className="w-6 h-6"
                          src="../../../public/signIn_Images/verified.webp"
                        />
                        {contact.isVerified && (
                          <span className="ml-1 text-xs font-extrabold text-brand">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="w-full mt-4 p-3 mb-4 bg-[#323738] rounded-lg sm:py-4 sm:px-6">
            <div className="h-11 flex items-center pb-3 border-b border-solid border-[#3f4546]">
              <span className="text-base font-extrabold">
                Account Connections
              </span>
            </div>
            {accountData.map((account, index) => (
              <div
                key={index}
                className="flex items-center border-b border-solid border-[#3f4546]"
              >
                <div className="w-full flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <div className="size-6 flex center">{account.icon}</div>
                    <div className="ml-3">
                      <p className="font-semibold text-base capitalize">
                        {account.name}
                      </p>
                      <p className="text-secondary mt-2">{account.status}</p>
                    </div>
                  </div>
                  <button
                    className="bg-gradient-to-r from-green-dark to-yellow-dark rounded-lg p-2 min-w-[110px] relative"
                    type="button"
                  >
                    Connect
                    <div className="size-full absolute overflow-hidden rounded-lg top-0 left-0">
                      {/* Add iframe if necessary for Telegram */}
                      {account.name === "Telegram" && (
                        <iframe
                          className="size-full"
                          scrolling="no"
                          src="https://auth.bcauth.com/api/account/open/telegram/login-iframe"
                          style={{ colorScheme: "light", opacity: 0.01 }}
                        ></iframe>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
