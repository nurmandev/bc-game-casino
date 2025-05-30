import Sidebar from "../Help Center/Sidebar";
import ContentArea from "../Help Center/allPages/ContentArea";

import PrivacyPolicy from "./allPages/PrivacyPolicy";
import { TermsOfService } from "./allPages/TermsOfService";
import { TermsOfSports } from "./allPages/TermsOfSports";
import { BonusTerms } from "./allPages/BonusTerms";
import { LawEnforcement } from "./allPages/LawEnforcement";
import { CoinAccuracyLimit } from "./allPages/CoinAccuracyLimit";
import { Support } from "./allPages/Support";
import { Fee } from "./allPages/Fee";
import { GoogleAuthenticator } from "./allPages/GoogleAuthenticator";
import { FAQs } from "./allPages/FAQs";
import { Currency } from "./allPages/Currency";
import { RegistrationAndLogin } from "./allPages/RegistrationAndLogin";
import { SwapPolicy } from "./allPages/SwapPolicy";
import { GambleAware } from "./allPages/GambleAware";
import { ProtectingMinors } from "./allPages/ProtectingMinors";
import { Providers } from "./allPages/Providers";
import { AML } from "./allPages/AML";
import { SelfExclusion } from "./allPages/SelfExclusion";
import { ResponsibleGambling } from "./allPages/ResponsibleGambling";
import { ImportantAnnouncement } from "../Help Center/allPages/ImportantAnnouncement";
import { useState } from "react";

const ProvablyFair = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);

  // Static content for each section
  const sections = [
    {},
    // { id: '', title: 'Privacy Policy', content: 'Details about our privacy policy and data usage.' },
    { id: "privacy-policy", title: "", content: <PrivacyPolicy /> },
    {
      id: "terms-of-service",
      title: "Terms Of Service",
      content: <TermsOfService />,
    },
    {
      id: "terms-of-sports",
      title: "Terms Of Sports",
      content: <TermsOfSports />,
    },
    { id: "bonus-terms", title: "Bonus Terms", content: <BonusTerms /> },
    {
      id: "law-enforcement",
      title: "Law Enforcement",
      content: <LawEnforcement />,
    },
    {
      id: "coin-accuracy-limit",
      title: "Coin Accuracy Limit",
      content: <CoinAccuracyLimit />,
    },
    { id: "support", title: "Support", content: <Support /> },
    { id: "fee", title: "Fee", content: <Fee /> },
    {
      id: "google-authenticator",
      title: "Google Authenticator",
      content: <GoogleAuthenticator />,
    },
    { id: "faqs", title: "FAQs", content: <FAQs /> },
    { id: "currency", title: "Currency", content: <Currency /> },
    {
      id: "registration-and-login",
      title: "Registration and Login",
      content: <RegistrationAndLogin />,
    },
    { id: "swap-policy", title: "Swap Policy", content: <SwapPolicy /> },
    { id: "gamble-aware", title: "18+ Gamble Aware", content: <GambleAware /> },
    {
      id: "protecting-minors",
      title: "Protecting Minors",
      content: <ProtectingMinors />,
    },
    { id: "providers", title: "Providers", content: <Providers /> },
    { id: "aml", title: "AML", content: <AML /> },
    {
      id: "self-exclusion",
      title: "Self-exclusion",
      content: <SelfExclusion />,
    },
    {
      id: "responsible-gambling",
      title: "Responsible Gambling",
      content: <ResponsibleGambling />,
    },
    {
      id: "important-announcement",
      title: "Important Announcement",
      content: <ImportantAnnouncement />,
    },
  ];
  return (
    <div className="w-[100%] left-0 ">
      <h1 className="text-white font-bold ml-2 mt-20 text-[24px] ">
        Help Center
      </h1>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#232626] ">
        {/* Sidebar */}
        <Sidebar sections={sections} setActiveSection={setActiveSection} />
        {/* Content Area */}
        <ContentArea activeSection={activeSection} sections={sections} />
      </div>
    </div>
  );
};

export default ProvablyFair;
