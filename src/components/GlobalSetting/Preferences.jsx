import { FaEdit, FaEye, FaEyeSlash, FaHandPaper, FaUser } from "react-icons/fa";
import { useState } from "react";

const Preferences = () => {
  // State for privacy preferences
  const [privacyPreferences, setPrivacyPreferences] = useState([
    {
      id: 1,
      title: "Hide my gaming data on profile",
      icon: <FaEyeSlash className="text-secondary" />,
      checked: false,
    },
    {
      id: 2,
      title: "Hide my username from public lists",
      icon: <FaUser className="text-secondary" />,
      checked: false,
    },
    {
      id: 3,
      title: "Refuse tip from strangers",
      icon: <FaHandPaper className="text-secondary" />,
      checked: false,
    },
    {
      id: 4,
      title: "Max bet alert",
      icon: <FaEye className="text-secondary" />,
      checked: true,
    },
  ]);

  // State for general preferences
  const [preferences, setPreferences] = useState([
    {
      label: "View in currency",
      value: "INR",
      icon: "/coin/INR.rect.png",
    },
    {
      label: "Change Language",
      value: "English",
    },
    {
      label: "Show full name of currency in Crypto list",
      isSwitch: true, // This will be rendered as a checkbox
      checked: false, // The initial state of the checkbox
    },
  ]);

  // Handle toggle for privacy preferences (switches)
  const handleToggle = (id) => {
    setPrivacyPreferences((prevPreferences) =>
      prevPreferences.map((preference) =>
        preference.id === id
          ? { ...preference, checked: !preference.checked }
          : preference
      )
    );
  };

  // Handle toggle for general preferences (checkbox)
  const handleCheckboxToggle = (index) => {
    const updatedPreferences = [...preferences];
    updatedPreferences[index].checked = !updatedPreferences[index].checked;
    setPreferences(updatedPreferences);
  };

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Receive deposit successful email",
      checked: true,
    },
    {
      id: 2,
      title: "Receive withdraw successful email",
      checked: true,
    },
  ]);

  const handleToggle2 = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, checked: !notification.checked }
          : notification
      )
    );
  };

  const [marketingPreference, setMarketingPreference] = useState({
    id: 1,
    title: 'Receive marketing promotions by Email',
    checked: true,
  });

  const handleToggle3 = () => {
    setMarketingPreference((prev) => ({
      ...prev,
      checked: !prev.checked,
    }));
  };

  return (
    <div>
      {/* Account Preferences */}
      <div className="w-full bg-[#323738] rounded-lg p-3 sm:py-4 sm:px-6">
        <div className="flex items-center h-11 border-b border-[#3f4546] pb-3">
          <span className="font-extrabold">Account Preferences</span>
        </div>

        {preferences.map((pref, index) => (
          <div key={index} className="w-full flex items-center h-12 mt-3">
            <span className="font-semibold">{pref.label}</span>
            <div className="ml-auto flex items-center flex-none">
              {pref.isSwitch ? (
                // Show switch for 'Show full name of currency in Crypto list'
                <div
                  className={`switch switch-xs cursor-pointer rounded-full w-12 h-6 flex items-center ${
                    pref.checked ? "bg-green-500" : "bg-[#373e3f]"
                  }`}
                  onClick={() => handleCheckboxToggle(index)}
                >
                  <div
                    className={`thumb w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
                      pref.checked ? "translate-x-6 bg-white" : "bg-[#6e7576]"
                    }`}
                  ></div>
                </div>
              ) : (
                <>
                  <button
                    className="flex items-center gap-2 bg-[#464f50] px-3 rounded-lg h-8 py-0 pb-0.5 setting-button"
                    type="button"
                  >
                    {pref.icon && (
                      <img alt="coin" className="size-4" src={pref.icon} />
                    )}
                    <span className="text-sm ml-1 font-semibold">
                      {pref.value}
                    </span>
                  </button>
                  <FaEdit className="w-5 h-5 text-secondary ml-2 cursor-pointer" />
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Privacy Preferences */}
      <div className="w-full bg-[#323738] rounded-lg p-3 mt-3 sm:py-4 sm:px-6 sm:mt-4">
        <div className="flex items-center h-11 border-b border-[#3f4546] pb-3">
          <span className="font-extrabold">Privacy Preferences</span>
        </div>
        {privacyPreferences.map((preference) => (
          <div
            key={preference.id}
            className="w-full flex items-center h-12 mt-3"
          >
            <span className="font-semibold">{preference.title}</span>
            <div className="ml-auto flex items-center flex-none">
              <div
                className={`switch switch-xs cursor-pointer rounded-full w-12 h-6 flex items-center ${
                  preference.checked ? "bg-green-500" : "bg-[#373e3f]"
                }`}
                onClick={() => handleToggle(preference.id)}
              >
                <div
                  className={`thumb w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
                    preference.checked
                      ? "translate-x-6 bg-white"
                      : "bg-[#6e7576]"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#323738] rounded-lg p-3 mt-3 sm:py-4 sm:px-6 sm:mt-4">
        <div className="flex items-center h-11 border-b border-[#3f4546] pb-3">
          <span className="font-extrabold">Email Notifications</span>
        </div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="w-full flex items-center h-12 mt-3"
          >
            <span className="font-semibold">{notification.title}</span>
            <div className="ml-auto flex items-center flex-none">
              <div
                className={`switch switch-xs cursor-pointer rounded-full w-12 h-6 flex items-center ${
                  notification.checked ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => handleToggle2(notification.id)}
              >
                <div
                  className={`thumb w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
                    notification.checked
                      ? "translate-x-6 bg-white"
                      : "bg-gray-600"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#323738] rounded-lg p-3 mt-3 sm:py-4 sm:px-6 sm:mt-4">
        <div className="flex items-center h-11 border-b border-[#3f4546] pb-3">
          <span className="font-extrabold">Marketing</span>
        </div>
        <div className="w-full flex items-center h-12 mt-3">
          <span className="font-semibold">{marketingPreference.title}</span>
          <div className="ml-auto flex items-center flex-none">
            <div
              className={`switch switch-xs cursor-pointer rounded-full w-12 h-6 flex items-center ${
                marketingPreference.checked ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={handleToggle3}
            >
              <div
                className={`thumb w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
                  marketingPreference.checked
                    ? "translate-x-6 bg-white"
                    : "bg-gray-600"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
