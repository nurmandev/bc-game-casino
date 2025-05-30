const Active = () => {
  return (
    <div>
      <p className="tracking-wide font-bold text-[#a09f9f] mt-3 px-4">Wager <span className="text-white">₹8,654.51to</span> get your daily raffle ticket.</p>
      <div className="flex flex-col items-center justify-center mt-5 py-12 ">
        <img
          src="../../public/Active-images/empty.webp"
          alt="No data"
          className="mb-4 w-60 h-60"
        />
        <p className="text-white text-lg">Oops! There is no data yet!</p>
      </div>
    </div>
  );
};

export default Active;
