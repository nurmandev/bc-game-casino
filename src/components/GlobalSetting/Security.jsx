import {
  FaAndroid,
  FaEnvelope,
  FaKey,
  FaLock,
  FaPhone,
  FaShieldAlt,
  FaWindows,
} from "react-icons/fa";
import {
  IoInformationCircleSharp,
  IoShieldCheckmarkSharp,
} from "react-icons/io5";

const Security = () => {
  const securitySettings = [
    {
      id: 1,
      title: "Change Password",
      description:
        "Change your password regularly to keep it unique and secure.",
      buttonText: "Change Password",
      icon: <FaLock className="fill-secondary" />,
      ndicon: <IoShieldCheckmarkSharp className="text-green-500 text-2xl" />,
    },
    {
      id: 2,
      title: "Email Verification",
      description:
        "Verify your email address is valid and accessible by you.Make sure it is functional.",
      buttonText: "Verify Email",
      icon: <FaEnvelope className="fill-secondary" />,
      ndicon: <IoInformationCircleSharp className="text-yellow-700 text-2xl" />,
    },
    {
      id: 3,
      title: "Phone Number Verification",
      description:
        "If you want to change your phone number, please contact our support.",
      buttonText: "Verify Phone",
      icon: <FaPhone className="fill-secondary" />,
      ndicon: <IoShieldCheckmarkSharp className="text-green-500 text-2xl" />,
    },
    {
      id: 4,
      title: "Two-factor authentication",
      description:
        "Enable Two-factor to protect your account from unauthorized access.",
      buttonText: "Enable 2FA",
      icon: <FaShieldAlt className="fill-secondary" />,
      ndicon: <IoInformationCircleSharp className="text-yellow-700 text-2xl" />,
    },
    {
      id: 5,
      title: "Passkey",
      description:
        "Using passkey to protect your account from unauthorized access.",
      buttonText: "Enable Passkey",
      icon: <FaKey className="fill-secondary" />,
      ndicon: <IoInformationCircleSharp className="text-yellow-700 text-2xl" />,
    },
  ];

  const sessions = [
    {
      device: "Android 6.x (Chrome Mobile)",
      location: "IN",
      ip: "122.161.52.147",
      lastUsed: "12:34:55 PM",
    },
    {
      device: "Windows 10 (Chrome 13)",
      location: "IN",
      ip: "122.161.52.147",
      lastUsed: "12:30:11 PM",
    },
    {
      device: "Windows 10 (Chrome 13)",
      location: "IN",
      ip: "122.161.52.147",
      lastUsed: "11:59:33 AM",
    },
    {
      device: "Windows 10 (Chrome 13)",
      location: "IN",
      ip: "122.161.52.147",
      lastUsed: "11:40:35 AM",
    },
    {
      device: "Windows 10 (Chrome 13)",
      location: "IN",
      ip: "122.161.52.147",
      lastUsed: "11:34:53 AM",
    },
    {
      device: "Windows 10 (Chrome 13)",
      location: "IN",
      ip: "106.219.230.23",
      lastUsed: "10:31:14 AM",
    },
    {
      device: "Android 1.x (Chrome Mobile)",
      location: "IN",
      ip: "106.219.231.193",
      lastUsed: "3/8/2025",
    },
  ];

  return (
    <div>
      <div>
        <div className="w-full rounded-lg bg-[#323738] p-3 sm:py-4 sm:px-6">
          <div className="flex items-center h-11 border-b border-[#3f4546] pb-3">
            <span className="text-base font-extrabold">Security Setup</span>
            <div className="ml-auto rounded-lg flex items-center font-semibold text-alw_dark p-2 py-1 bg-yellow-700">
              Medium
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {securitySettings.map((setting) => (
              <div
                key={setting.id}
                className="mt-3 w-[48%] border-b bg-[#3f4546] p-4 relative pb-6 sm:rounded-lg sm:bg-layer5 sm:border-none"
              >
                <div className="flex items-center">
                  {setting.icon}
                  <div className="ml-auto text-brand">{setting.ndicon}</div>
                </div>
                <p className="mt-3 text-lg font-extrabold">{setting.title}</p>
                <p className="mt-2 text-secondary">{setting.description}</p>
                <div className="h-10 w-full mt-3"></div>
                <div className="mt-3 sm:absolute sm:bottom-4 sm:left-0 sm:px-4 w-full">
                  <button
                    className="button button-brand button-m w-full"
                    type="button"
                  >
                    <span className="bg-gradient-to-r from-green-dark to-yellow-dark p-2 w-full px-10 rounded-lg">
                      {setting.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full rounded-lg bg-[#323738] p-3 mt-3 sm:py-4 sm:px-6 sm:mt-4">
          <div className="flex items-center h-11 border-b border-[#3f4546] pb-3">
            <span className="text-base font-extrabold">Sessions</span>
          </div>
          <div className="mt-3">
            <table className="w-full mt-4 text-secondary setting-table">
              <thead>
                <tr
                  className="h-12"
                  style={{ background: "rgba(0, 0, 0, 0.05)" }}
                >
                  <th className="text-left pl-2 left">Device</th>
                  <th>Location</th>
                  <th>IP Address</th>
                  <th>Last Used</th>
                  <th className="text-right pr-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session, index) => (
                  <tr
                    key={index}
                    className={`h-12 text-center ${
                      index % 2 === 0 ? "bg-transparent" : "bg-opacity-5"
                    }`}
                  >
                    <td className="text-left pl-2 flex items-center h-12 left">
                      {session.device.includes("Android") ? (
                        <FaAndroid className="text-green-500 text-2xl" />
                      ) : (
                        <FaWindows className="text-green-500 text-2xl" />
                      )}
                      <span className="font-semibold whitespace-nowrap text-primary ml-2">
                        {session.device}
                      </span>
                    </td>
                    <td className="text-primary">{session.location}</td>
                    <td className="text-primary">{session.ip}</td>
                    <td className="text-primary">{session.lastUsed}</td>
                    <td className="text-right pr-2">
                      <button className="ml-auto text-error">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
