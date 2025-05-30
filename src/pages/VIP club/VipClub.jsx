import bannerImg from "../../../public/banner/vip-benefit-hero-0ac174b8.webp";
import rightImg from "../../../public/banner/badge-none.webp";
import banner from "../../../public/banner/bg-none-38f488cb.png";
//bonus type icons
import img1 from "../../../public/icons/1.png";
import img2 from "../../../public/icons/2.png";
import img3 from "../../../public/icons/3.png";
import img4 from "../../../public/icons/4.png";
import img5 from "../../../public/icons/5.png";
import img6 from "../../../public/icons/6.png";
import img7 from "../../../public/icons/7.png";
import img8 from "../../../public/icons/8.png";
import img9 from "../../../public/icons/9.png";
import img10 from "../../../public/icons/10.png";
import img11 from "../../../public/icons/11.png";
import img12 from "../../../public/icons/12.png";

// medal icons
import imgs1 from "../../../public/icons/badge-bronze (1).png";
import imgs2 from "../../../public/icons/badge-silver (1).png";
import imgs3 from "../../../public/icons/badge-gold (1).png";
import imgs4 from "../../../public/icons/badge-diamond (1).png";
import imgs5 from "../../../public/icons/badge-platinum (1).png";
import Card from "./Card";

//FAQ
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Footer from "../../components/Footer";

const Vip = () => {
  const tiers = [
    {
      name: "Bronze",
      icon: imgs1,
      color: "bg-[linear-gradient(to_bottom,_#805536,_#3A4142)]",
      textColor: "text-amber-700",
    },
    {
      name: "Silver",
      icon: imgs2,
      color: "",
      textColor: "text-gray-300",
    },
    {
      name: "Gold",
      icon: imgs3,
      color: "",
      textColor: "text-yellow-400",
    },
    {
      name: "Platinum I-II",
      icon: imgs4,
      color: "",
      textColor: "text-purple-400",
    },
    {
      name: "Diamond I-III",
      icon: imgs5,
      color: "",
      textColor: "text-pink-400",
    },
  ];

  const features = [
    { name: "Raining", icon: img1 },
    { name: "Coin Drops", icon: img2 },
    { name: "Private Chat", icon: img3 },
    { name: "Tips", icon: img4 },
    { name: "VIP Spin", icon: img5 },
    { name: "Level-up Bonus", icon: img6 },
    { name: "Recharge", icon: img7 },
    { name: "Weekly Cashback", icon: img8 },
    { name: "Monthly Cashback", icon: img9 },
    { name: "Sports Weekly Cashback", icon: img10 },
    { name: "No-fee Withdrawal", icon: img11 },
    { name: "Exclusive SVIP Perks", icon: img12 },
  ];

  //FAQ
  const faqData = [
    {
      question: "What is 'Level-up Bonus'?",
      answer:
        "Showcasing our appreciation for players, we reward them with a Level Up bonus upon reaching the next level. Once players reach Level 38 and higher, we have boosted the level-up bonus to be slightly higher than the regular level-up bonus available at lower levels.",
    },
    {
      question: "What is 'Raining'?",
      answer: `Engage in chat conversations throughout the day to receive free coins as part of the Constant Chat Rains bonus.
  
      Rules:
      1. Six players level higher than 4 will be randomly selected and rewarded in the chat room every 6 hours.
      2. Bonus will be different according to the currencies.
      3. Players will be randomly selected by the Rain algorithm. The players who send more messages have a higher probability of getting rewarded.
      4. Even if the user has sent only one message, there is still a chance to receive the rain bonus.
      5. Rain information will be sent to the chat room by robots.
      6. Having more than one account per user is prohibited. You will have a lower chance of receiving rain and BC will suspend withdrawals for a manual review in the fraud prevention system, which may take up to 24 hrs. We do not guarantee withdraw processing and may ban accounts with balances. If you already have more than one account, please self-surrender by contacting Live Support.`,
    },
    {
      question: "What is 'Coin Drop'?",
      answer:
        "If you haven’t reached VIP Level 7 and unlocked ‘Coin Drop’, you need to be active and quick in order to grab the coins when it happens in Public Chat. The rewards go to the fastest participants. Once you have reached VIP Level 7, you may create your own ‘Coin Drop’ and customize the amount and quantity of recipients before you share your good luck and generosity with other players in Public Chat.",
    },
    {
      question: "What are 'Tips'?",
      answer:
        "You may tip other players once you reach VIP Level 8. Tipping is how you show appreciation and share your generosity with other players in BC.CO. You can decide how much you want to send to the other players.",
    },
    {
      question: "What is 'Recharge'?",
      answer: `‘Recharge’ is a unique and exciting feature that rewards players with split bonuses (Recharges) throughout the week based on their gaming activities. Players can set different intervals to claim these bonuses, providing them with an added incentive to keep playing. This feature not only keeps players engaged but also adds an extra layer of excitement to the gaming experience.
  
      Eligibility for Recharge Activation:
      - Have a VIP level of 22 and above
      - Have wagered a minimum of $1,000 in the past 7 days (24/7)
  
      Once a player meets these requirements, they can request Recharge Activation. Upon activation, their Recharge will be redeemable for the next 7 days.`,
    },
    {
      question: "What is 'Weekly Cashback'?",
      answer:
        "The ‘Weekly Cashback’ is an exclusive perk on our platform designed for VIP 22+ players. As the name suggests, this bonus is issued once a week. It is an automatic bonus paid out every Friday to players at VIP level 22 and above. The size of the bonus depends on how much a player has wagered during the past week with a minimum wager requirement of $1000 between the period Friday-Thursday. The calculation for the weekly cashback remains the same, and the only difference is that it may not align with your Recharge renewals.",
    },
    {
      question: "What is 'Sports Weekly Bonus'?",
      answer: `In addition to our existing Weekly Bonus for VIP level 22+ players, we are now introducing the BC Sports Club weekly bonus as an additional perk for sports bettors. The new Sport bonus is specific only to Sport Wager and is calculated based on the player's wagering amount from Saturday to Friday, and distributed automatically every Saturday. With the introduction of the BC Sports Club bonuses, our VIP level 22+ players can now enjoy even more rewards and a thrilling sports betting experience!
  
      BC Sports Club offers a range of weekend bonuses based on your weekly wager amount in our Sportsbook:
      - Wager $500 or more from Saturday to Friday and receive a $5 Weekend Bonus!
      - Wager $2,500 or more and receive a $30 Weekend Bonus!
      - Wager $5,000 or more and receive a $70 Weekend Bonus!
      - Wager $10,000 or more and receive a $150 Weekend Bonus!
  
      These bonuses apply to all markets and odds in our Sportsbook, giving you more opportunities to win big!
  
      The weekly wager is calculated from the previous Saturday 00:00hrs to Friday 23:59hrs (UTC).`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-[100%] ">
      <div className="mt-20 bg-gradient-to-t to-[#805536] from-[#3A4142]  rounded flex items-center justify-between h-[300px] pl-6 m-5 overflow-hidden ">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start w-full p-2 md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            EXCLUSIVE VIP BENEFITS
          </h2>
          <p className="text-gray-400 mb-6">
            Join our VIP Club now and get ready to be showered with gifts,
            giveaways, and amazing features. Experience the thrill of higher
            cash back and exclusive rewards that are sure to leave you amazed.
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-bold py-2 px-32 rounded focus:outline-none focus:shadow-outline  ">
            Sign Up
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="  md:w-1/2 flex  justify-end  pr-0 ">
          <img
            src={bannerImg}
            alt="VIP benefits"
            className="w-[500px]  object-cover "
          />
        </div>
      </div>

      {/* Banner 2 */}
      <div
        className="relative bg-center h-[250px] flex items-center justify-between px-8 m-5 bg-[#3D4A56] rounded-lg bg-repeat bg-contain "
        style={{
          backgroundImage: `url(${banner}) 
        `,
          // boxShadow: 'inset  0px  0px  100px  rgba(0, 0, 0, 1)',
        }}
      >
        {/* Left Image Positioned Outside the Main Div */}
        <div className="absolute top-[-20px] left-[10px]">
          <img src={rightImg} alt="Badge" className="w-[200px] h-[200px]" />
        </div>

        {/* Middle Content */}
        <div className="z-10 flex-1 pl-[200px]">
          <h1 className="text-white text-2xl font-bold">VIP 0</h1>
          <div className="flex justify-between">
            <p className="text-gray-300 text-sm ml-2">0 XP</p>
            <p className="text-gray-300 text-sm mr-20">1 XP</p>
          </div>

          <div className="mt-2 w-[900px] bg-gray-700 rounded-full h-4 shadow-inner transition">
            <div
              className="h-4 bg-blue-500 rounded-full shadow"
              style={{ width: "20%", opacity: "0.8" }} // Adjust width and opacity to match progress
            ></div>
          </div>
          <p className="text-gray-400 text-xs mt-1">until VIP 1</p>
        </div>

        {/* Transparent Shadow at Bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 opacity-80"></div> */}

        {/* Transparent Button with Blur Effect */}
        <button className="absolute top-4 right-4 bg-transparent text-green-500 border border-green-500 px-4 py-1 rounded text-sm font-bold transition opacity-[100px] backdrop-blur-sm">
          View Level Up Detail
        </button>
      </div>
      {/* bonus section */}
      <div className="min-h-screen bg-[#232626] p-4 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Exclusive VIP Bonus
            </h2>
            <p className="text-gray-400">
              Discover the ultimate gaming experience
            </p>
          </div>

          <div className="overflow-x-auto bg-[#323738] rounded-lg">
            <div className="min-w-max">
              <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-0">
                {/* Header */}
                <div className="text-gray-400 font-medium p-4 border border-gray-700 ">
                  Bonus Type
                </div>
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`text-center font-bold border border-gray-700  ${tier.color} text-white`}
                  >
                    <img
                      src={tier.icon}
                      alt={tier.name}
                      className="w-6 h-6 mx-auto "
                    />
                    <span className="text-sm font-medium">{tier.name}</span>
                  </div>
                ))}

                {/* Features */}
                {features.map((feature) => (
                  <>
                    <div
                      key={feature.name}
                      className="flex items-center gap-2 p-4 text-white"
                    >
                      <img
                        src={feature.icon}
                        alt={feature.name}
                        className="w-6 h-6 object-contain"
                      />
                      <span>{feature.name}</span>
                    </div>

                    {tiers.map((tier, index) => (
                      <div
                        key={`${feature.name}-${tier.name}`}
                        className={`p-4 text-center border border-gray-700 ${tier.color}`}
                      >
                        {index <= 2 ||
                        feature.name === "Raining" ||
                        feature.name === "Coin Drops" ? (
                          <span className={`text-xl ${tier.textColor}`}>★</span>
                        ) : index === 3 &&
                          feature.name !== "Luxury Giveaway" &&
                          feature.name !== "Exclusive SVIP Perks" ? (
                          <span className={`text-xl ${tier.textColor}`}>★</span>
                        ) : index === 4 ? (
                          <span className={`text-xl ${tier.textColor}`}>★</span>
                        ) : (
                          <span className="text-gray-600">--</span>
                        )}
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
      <div className="min-h-screen p-8   ">
        <div className="w-full mx-auto ">
          <h1 className="text-[20px] font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>

          <div className="">
            {faqData.map((item, index) => (
              <div key={index} className="overflow-hidden  ">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-4 bg-[#323738] text-white text-left font-bold"
                >
                  <span>{item.question}</span>
                  <div className="bg-[#464F50] rounded">
                    <IoIosArrowForward
                      className={`w-5 h-5 transition-transform ease-in duration-300 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-[#323738] text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Vip;
