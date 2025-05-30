import bgimage from "../../../public/SponcershipImage/LCFC-IMAGES/bg-img.png";
import logo from "../../../public/SponcershipImage/LCFC-IMAGES/icon.webp";
import VideoPlayer from "../Sponcership/VideoPlayer";
import video from "../../../public/SponcershipImage/card-img-video/11978946_2160_3840_60fps.mp4";
import videoThumbnail from "../../../public/SponcershipImage/card-img-video/card-img.jpg";
import bclogo from "../../../public/SponcershipImage/card-img-video/108244930_60x60.jpg";

const ColbyCovington = () => {
  return (
    <div>
      <div className="w-full ">
        <div
          className="relative w-[90%] m-auto  "
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "261px",
          }}
        >
          <div className="w-[80%] m-auto flex items-center justify-between lg:pt-0 md:pt-0  sm:pt-9">
            <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] m-auto ">
              <div className="text-white flex items-center justify-start gap-4">
                <div>
                  <img
                    src={logo}
                    alt=""
                    className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[38px] sm:h-[38px] "
                  />
                </div>
                <h1 className="font-bold lg:text-[30px] md:text-[30px] sm:text-[20px] lg:leading-9 md:leading-9 sm:leading-6 mb-5 ">
                  <span className="whitespace-nowrap"> Colby</span> <br />{" "}
                  <span className="whitespace-nowrap"> Covington</span>
                </h1>
              </div>
              <div className="flex items-center justify-start gap-2">
                <a
                  href="#"
                  className="font-semibold underline text-white lg:ml-20 text-[14px] whitespace-nowrap "
                >
                  Official website
                </a>
                <img
                  src="../../../public/SponcershipImage/LCFC-IMAGES/download (1).png"
                  alt=""
                  className="w-[13px] h-[13px] "
                />
              </div>
            </div>
            <div className="lg:w-[50%] md:w-[50%] sm:w-[50%]">
              <img
                src="../../../public/SponcershipImage/call-imag/person-p-90d66729.webp"
                alt=""
                className="lg:w-[1114px] lg:h-[305px] md:w-[1114px] sm:w-[1114px]   "
              />
            </div>
          </div>
          {/* line image */}
          <div>
            <img
              src="../../../public/SponcershipImage/LCFC-IMAGES/line-img.webp"
              alt=""
              className="absolute top-28 -z-[4] "
            />
          </div>

          {/* main content */}

          <div className="lg:mt-8 md:mt-12 sm:mt-20 bg-[#323738] rounded-xl pb-10">
            <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col sm:items-start gap-10 pt-20 px-10">
              <div className="lg:w-[50%] md:w-[50%]">
                <h1 className="text-white text-[16px] font-bold mb-4 ">
                  BC.CO Welcomes UFC Star Colby Covington as Our New Brand
                  Ambassador
                </h1>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  We’re thrilled to welcome UFC star Colby Covington to the
                  BC.CO family as our new brand ambassador! This exciting
                  partnership marks a major milestone for us in the world of
                  sports entertainment and perfectly embodies our ethos—‘Stay
                  Untamed.
                </p>
                <h2 className="text-white text-[16px] font-bold mb-4 ">
                  Colby Covington: A Fighter Who Knows No Limits
                </h2>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  Colby Covington is one of the fiercest competitors in the UFC,
                  renowned for his dominant wrestling skills and fearless
                  approach to every fight. His career exemplifies breaking
                  boundaries, challenging oneself, and pushing past
                  limits—values that align perfectly with our philosophy at
                  BC.CO. We’re all about staying untamed and embracing the
                  thrill of the fight, and Colby embodies that spirit every time
                  he steps into the octagon.
                </p>
              </div>
              <div className="lg:w-[50%] md:w-[50%] ">
                <img src="../../../public/SponcershipImage/call-imag/game1-cb06f4b7.webp" alt="" />
              </div>
            </div>

            <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col-reverse sm:items-start gap-10 pt-10 px-10">
              <div className="lg:w-[50%] md:w-[50%] ">
                <img src="../../../public/SponcershipImage/call-imag/game2-a99c6237.webp" alt="" />
              </div>
              <div className="lg:w-[50%] md:w-[50%]">
                <h1 className="text-white text-[16px] font-bold mb-4 ">
                  A Wild Ride Ahead
                </h1>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  With Colby on board, we’re stepping into an exciting new
                  chapter. This partnership isn’t just about incredible content;
                  it’s about creating a truly untamed experience. From exclusive
                  UFC events to thrilling BC.CO activities, get ready for
                  surprises, action, and new ways to engage like never before.
                </p>
                <h2 className="text-white text-[16px] font-bold mb-4 ">
                  Pushing Boundaries Together
                </h2>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  “Stay Untamed” isn’t just a slogan; it’s a way of life. It’s
                  about being bold, fearless, and ready for whatever comes next.
                  Colby Covington’s journey in the UFC embodies this spirit
                  perfectly. By partnering with him, we’re reinforcing our
                  mission to empower users to break free from the ordinary and
                  embrace the extraordinary.
                </p>
              </div>
            </div>

            <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col sm:items-start gap-10 pt-10 px-10">
              <div className="lg:w-[50%] md:w-[50%]">
                <h1 className="text-white text-[16px] font-bold mb-4 ">
                  Looking Ahead: Limitless Opportunities
                </h1>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  The future’s looking bright, and we’re just getting started.
                  With Colby Covington by our side, we’re expanding our reach,
                  pushing the boundaries of entertainment, and giving you even
                  more ways to have fun with BC.CO. Stay tuned for exciting
                  updates, exclusive content, and amazing opportunities as we
                  continue to embrace the untamed journey together.
                </p>
              </div>
              <div className="lg:w-[50%] md:w-[50%] ">
                <img src="../../../public/SponcershipImage/call-imag/game3-d25ac9c5.webp" alt="" />
              </div>
            </div>

            {/* cards   */}
            <div className=" ">
              <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">
                <VideoPlayer
                  video={video}
                  img={videoThumbnail}
                  text="jason Derulo Backs Our Foxes Against Chelsea!"
                  logo={bclogo}
                />
                <VideoPlayer
                  video={video}
                  img={videoThumbnail}
                  text="jason Derulo Backs Our Foxes Against Chelsea!"
                  logo={bclogo}
                />
                <VideoPlayer
                  video={video}
                  img={videoThumbnail}
                  text="jason Derulo Backs Our Foxes Against Chelsea!"
                  logo={bclogo}
                />
                <VideoPlayer
                  video={video}
                  img={videoThumbnail}
                  text="jason Derulo Backs Our Foxes Against Chelsea!"
                  logo={bclogo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColbyCovington;
