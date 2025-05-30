const HorseRacingCard = () => {
  const raceData = {
    location: "Nagoya",
    raceNumber: "R4",
    time: "3:25",
    runners: [
      {
        number: 9,
        name: "Omega Jetman",
        jockey: "J. Takahiro Imai",
        trainer: "T. Naoto Takeshita",
        odds: [2.0, 1.34, 1.16],
      },
      {
        number: 5,
        name: "Sun Caprice",
        jockey: "J. Tsubasa Sasagawa",
        trainer: "T. Kiyoshige Arai",
        odds: [2.25, 1.45, 1.22],
      },
      {
        number: 12,
        name: "Ange Mistral",
        jockey: "J. Ryou Nobata",
        trainer: "T. Satoshi Kokubo",
        odds: [4.0, 2.1, 1.55],
      },
    ],
  };

  return (
    <div className="mt-5 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/JPN.svg"
            alt="Japan Flag"
            className="w-6 h-6 mr-2"
          />
          <span className="font-semibold">{raceData.location}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{raceData.raceNumber}</span>
          <span className="text-sm text-gray-500">{raceData.time}</span>
        </div>
      </div>

      <div className="bg-[#292d2e] p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium">Runner</div>
          <div className="flex space-x-4">
            <div className="text-sm">Win</div>
            <div className="text-sm">Top 2</div>
            <div className="text-sm">Place</div>
          </div>
        </div>

        {raceData.runners.map((runner, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-gray-600 last:border-none"
          >
            <div>
              <div className="font-semibold">
                {runner.number}. {runner.name}
              </div>
              <div className="text-sm text-gray-600">{runner.jockey}</div>
              <div className="text-sm text-gray-600">{runner.trainer}</div>
            </div>
            <div className="flex space-x-4">
              {runner.odds.map((odd, i) => (
                <div key={i} className="bg-[#3a4142] p-2 rounded">
                  <span className="font-semibold">{odd}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          className="w-full flex items-center justify-center gap-3 bg-[#3a4142] rounded-lg "
          data-editor-id="raceEventCardButton"
          style={{ fontSize: 12, padding: "9px 24px" }}
        >
          Go to all runners
          <svg
            className="bt6663"
            data-cy="arrow-filled"
            width={6}
            height={8}
            viewBox="0 0 6 8"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "currentcolor",
              color: "inherit",
              width: "auto",
              height: 8,
            }}
          >
            <path d="M5.62136 3.2458C6.12621 3.64366 6.12621 4.35634 5.62136 4.7542L1.81416 7.75455C1.10408 8.31414 1.33478e-07 7.85515 1.70842e-07 7.00036L4.33141e-07 0.999642C4.70505e-07 0.144854 1.10408 -0.314144 1.81416 0.245446L5.62136 3.2458Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HorseRacingCard;
