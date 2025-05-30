import img1 from "../../../public/card/1 (2).png";
import img2 from "../../../public/card/2 (2).png";
import img3 from "../../../public/card/3 (2).png";
import img4 from "../../../public/card/4 (2).png";
import img5 from "../../../public/card/5.png";
import img6 from "../../../public/card/6.png";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-[#323738] text-[#FFFFFF] p-6  rounded-lg shadow-lg flex flex-col items-center relative min-h-[220px] mt-8">
      <img
        src={imageSrc}
        alt={`${title} Icon`}
        className="w-[100px] h-[100px] absolute top-[-40px] left-1/2 transform -translate-x-1/2"
      />
      <div className="mt-12 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <p className="text-sm text-[#B3BEC1] mt-2">{description}</p>
      </div>
    </div>
  );
};

function PassPros() {
  const cardsData = [
    {
      title: "No-Fee Withdrawal",
      description: "Reach VIP 38 for no-fee cryptocurrency withdrawals.",
      imageSrc: img1,
    },
    {
      title: "Rewarding Lucky Spin",
      description: "Spin the wheel & receive bigger prizes as you level up.",
      imageSrc: img2,
    },
    {
      title: "Dedicated VIP Host",
      description: "Selected VIPs get personalized attention from a dedicated host.",
      imageSrc: img3,
    },
    {
      title: "Amazing Level Up Bonus",
      description: "Unlock multiple surprise rewards as you level up.",
      imageSrc: img4,
    },
    {
      title: "Fun Tips & Raining",
      description: "Tip to show appreciation or try Coin Drops to win rewards.",
      imageSrc: img5,
    },
    {
      title: "Exclusive Cashback",
      description: "Earn incredible cashback rewards every week & month.",
      imageSrc: img6,
    },
  ];

  return (
    <div className="p-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default PassPros;