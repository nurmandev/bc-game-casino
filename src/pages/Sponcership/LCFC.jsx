import bgimage from "../../../public/SponcershipImage/LCFC-IMAGES/bg-img.png";
import logo from "../../../public/SponcershipImage/LCFC-IMAGES/icon.webp";
import Footer from "../../components/Footer";
//import Footer from "../../components/Footer";

const LCFC = () => {
  return (
    <div>
      <div>
        <div className="w-full mt-20 ">
          <div
            className="relative w-[100%] "
            style={{
              backgroundImage: `url(${bgimage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "261px",
            }}
          >
            <div className="w-[80%] m-auto flex items-center justify-between">
              <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] m-auto ">
                <div className="text-white flex items-center justify-start gap-4">
                  <div>
                    <img
                      src={logo}
                      alt=""
                      className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] "
                    />
                  </div>
                  <h1 className="font-bold lg:text-[30px] md:text-[30px] sm:text-[20px] lg:leading-9 md:leading-9 sm:leading-6 mb-5 ">
                    <span className="whitespace-nowrap"> Leicester City</span>{" "}
                    <br />
                    <span className="whitespace-nowrap">Football Club</span>
                  </h1>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <a
                    href="#"
                    className="font-semibold underline text-white lg:ml-20 text-[14px] whitespace-nowrap "
                  >
                    Official website LCFC
                  </a>
                  <img
                    src="../../../public/SponcershipImage/LCFC-IMAGES/download (1).png"
                    alt=""
                    className="w-[13px] h-[13px] "
                  />
                </div>
              </div>
              <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] ">
                <img
                  src="../../../public/SponcershipImage/LCFC-IMAGES/persons-img.webp"
                  alt=""
                  className="lg:w-[1114px] lg:h-[305px] md:w-[1114px]  "
                />
              </div>
            </div>
            {/* line image */}
            <div>
              <img
                src="../../../public/SponcershipImage/LCFC-IMAGES/line-img.webp"
                alt=""
                className="absolute lg:top-28 -z-[4] "
              />
            </div>

            {/* main content */}

            <div className="lg:mt-8 md:mt-20 sm:mt-20 bg-[#323738] rounded-xl pb-10 ">
              <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col sm:items-start gap-10 pt-20  px-10">
                <div className="lg:w-[50%] md:w-[50%]">
                  <h1 className="text-white text-[16px] font-bold mb-4 ">
                    Uniting for a Thrilling Future
                  </h1>
                  <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                    BC.CO is thrilled to announce a groundbreaking partnership
                    with Leicester City Football Club (LCFC), a celebrated name
                    in English football. This collaboration marks a significant
                    step forward for both BC.CO and LCFC, bringing together the
                    world of online gaming and Premier League football.
                  </p>
                  <h2 className="text-white text-[16px] font-bold mb-4 ">
                    A New Chapter in Sports and Gaming
                  </h2>
                  <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                    marks the beginning of an exciting iGaming partnership
                    between BC.CO and Leicester City Football Club (LCFC). This
                    collaboration blends the thrilling worlds of sports and
                    gaming, offering players unparalleled experiences and
                    opportunities to connect with both their favourite team and
                    the gaming community. As BC.CO and LCFC join forces, they
                    pave the way for innovative player engagement, combining the
                    excitement of football with cutting-edge gaming technology.
                  </p>
                </div>
                <div className="lg:w-[50%] md:w-[50%] ">
                  <img
                    src="../../../public/SponcershipImage/LCFC-IMAGES/game-1.webp"
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col-reverse sm:items-start sm:  gap-10 pt-10 px-10">
                <div className="lg:w-[50%] md:w-[50%] ">
                  <img
                    src="../../../public/SponcershipImage/LCFC-IMAGES/game-2.webp"
                    alt=""
                  />
                </div>
                <div className="lg:w-[50%] md:w-[50%]">
                  <h1 className="text-white text-[16px] font-bold mb-4 ">
                    What Can Fans Expect?
                  </h1>
                  <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                    Fans of both BC.CO and LCFC can look forward to an array of
                    exciting events and opportunities. From exclusive promotions
                    to unique in-game, this partnership is set to enhance player
                    engagement and deliver memorable moments. Notably, fans will
                    have the chance to win exclusive signed merchandise,
                    amplifying the excitement of both gaming and football
                    worlds.
                  </p>
                  <h2 className="text-white text-[16px] font-bold mb-4 ">
                    Benefits of the Partnership
                  </h2>
                  <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                    The BC.CO community will enjoy a range of exclusive benefits
                    through the partnership <br /> with LCFC: <br /> 1.VIP
                    matchday hospitality experience and VIP access to all LCFC
                    home games. <br /> 2.Exclusive player interactions,
                    including open training sessions and meet-and-greets with
                    players. <br /> 3.Shirts signed by the majority of LCFC’s
                    First Team squad <br /> 4.Guided tour of King Power Stadium
                    with a Club legend, featuring personal insights into LCFC’s
                    history.
                  </p>
                </div>
              </div>

              <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col sm:items-start  gap-10 pt-10 px-10">
                <div className="lg:w-[50%] md:w-[50%]">
                  <h1 className="text-white text-[16px] font-bold mb-4 ">
                    About Leicester City Football Club
                  </h1>
                  <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                    eicester City Football Club, nicknamed The Foxes, has a
                    unique history, which includes their remarkable 2015/2016
                    season when they won the Premier League title against all
                    odds. With a strong fanbase and a commitment to excellence,
                    LCFC continues to be a powerhouse in English football.
                  </p>
                  <h2 className="text-white text-[16px] font-bold mb-4 ">
                    About BC.CO
                  </h2>
                  <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                    BC.CO is a leading online gaming platform known for its
                    innovative approach to iGaming. With a focus on providing a
                    seamless and engaging experience for players, BC.CO has
                    quickly become a favourite among gaming enthusiasts
                    worldwide
                  </p>
                  <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                    This partnership with LCFC paves the way for exciting new
                    ventures in the realms of sports and gaming. Stay tuned for
                    more updates and be part of this thrilling journey as BC.CO
                    and LCFC redefine the boundaries of player engagement and
                    entertainment.
                  </p>
                </div>
                <div className="lg:w-[50%] md:w-[50%] ">
                  <img
                    src="../../../public/SponcershipImage/LCFC-IMAGES/game-3.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="">  
            <Footer />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LCFC;
