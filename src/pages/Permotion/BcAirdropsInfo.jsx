const BcAirdropsInfo = ({ title, content, bgImage }) => {
  return (
    <div>
      <div
        className="rounded-md p-4 overflow-hidden sm:max-w-[730px] sm:px-10 sm:py-7"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "100%",
        }}
      >
        <div className="font-semibold text-primary text-2xl sm:text-3xl">
          {title}
        </div>
        <div
          className="text-sm mt-4 text-secondary sm:text-base"
          style={{ lineHeight: "24px" }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default BcAirdropsInfo;
