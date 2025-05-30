import bgimage from "../../../public/SponcershipImage/LCFC-IMAGES/bg-img.png";
import logo from "../../../public/SponcershipImage/LCFC-IMAGES/icon.webp";
import VideoPlayer from "../Sponcership/VideoPlayer";
import video from "../../../public/SponcershipImage/card-img-video/11978946_2160_3840_60fps.mp4";
import videoThumbnail from "../../../public/SponcershipImage/card-img-video/card-img.jpg";
import bclogo from "../../../public/SponcershipImage/card-img-video/108244930_60x60.jpg";
import Footer from "../../components/Footer";

const JasonDerulo = () => {
  return (
    <div>
      <div className="w-full ">
        <div
          className="relative w-[100%] m-auto mt-20  "
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "261px",
          }}
        >
          <div className="w-[80%] m-auto flex items-center justify-between">
            <div className="lg:w-[50%] md:w-[50%] sm:w-[50%]m-auto ">
              <div className="text-white flex items-center justify-start gap-4">
                <div>
                  <img
                    src={logo}
                    alt=""
                    className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[38px] sm:h-[38px] "
                  />
                </div>
                <h1 className="font-bold lg:text-[30px] md:text-[30px] sm:text-[20px] lg:leading-9 md:leading-9 sm:leading-6 mb-5 ">
                  <span className="whitespace-nowrap"> Jason</span> <br />{" "}
                  <span className="whitespace-nowrap"> Derulo</span>
                </h1>
              </div>
              <div className="flex items-center justify-start gap-2">
                <a
                  href="#"
                  className="font-semibold underline text-white ml-20 text-[14px] whitespace-nowrap "
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
                src="../../../public/SponcershipImage/jasonDerulo-img/person.webp"
                alt=""
                className="lg:w-[1114px] lg:h-[305px] md:w-[1114px] "
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
          <div className="mt-8 bg-[#323738] rounded-xl pb-10 ">
            <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col sm:items-start gap-10 pt-20 px-10">
              <div className="lg:w-[50%] md:w-[50%]">
                <h1 className="text-white text-[16px] font-bold mb-4 ">
                  Jason Derulo Officially Becomes BC.CO s Brand Ambassador
                </h1>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  BC.CO is excited to announce that Jason Derulo has officially
                  joined us as our brand ambassador! This new partnership brings
                  thrilling opportunities for the BC.CO community to engage with
                  one of the world’s top music artists. With his chart-topping
                  hits and dynamic stage presence, Jason Derulo embodies the
                  energy and excitement that BC.CO brings to the iGaming world.
                </p>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  Jason Derulo, a renowned American singer, songwriter, and
                  dancer, first captured the spotlight with his debut single
                  Whatcha Say in 2009. Since then, he has become a global
                  sensation with hit tracks like In My Head Talk Dirty and
                  Savage Love His albums, including Future History and
                  Everything Is 4 showcase his talent for crafting catchy
                  melodies and modern beats, solidifying his reputation and
                  earning him a dedicated fanbase worldwide.
                </p>
              </div>
              <div className="lg:w-[50%] md:w-[50%] ">
                <img src="../../../public/SponcershipImage/jasonDerulo-img/game-1.webp" alt="" />
              </div>
            </div>

            <div className="w-full lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start sm:flex sm:flex-col-reverse sm:items-start gap-10 pt-10 px-10">
              <div className="lg:w-[50%] md:w-[50%] ">
                <img src="../../../public/SponcershipImage/jasonDerulo-img/game-2.webp" alt="" />
              </div>
              <div className="lg:w-[50%] md:w-[50%]">
                <h1 className="text-white text-[16px] font-bold mb-4 ">
                  The Future of iGaming and Entertainment
                </h1>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  Imagine a world where iGaming and entertainment collide,
                  creating a massive platform for both communities to interact
                  and thrive together.
                </p>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  At BC.CO , we value our connections with music and the arts,
                  striving to blend these creative realms with the excitement of
                  iGaming. By working closely with Jason Derulo, we aim to
                  deliver innovative experiences and exclusive content to our
                  users. This collaboration not only enhances our brand but also
                  bridges the worlds of entertainment and gaming in a unique and
                  dynamic way.
                </p>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  Welcome to the new era of iGaming and entertainment, where
                  BC.CO meets the vibrant world of music with Jason Derulo! This
                  partnership is just the beginning of a new digital gaming
                  revolution. As technology evolves, so does BC.CO , continuing
                  to lead the way in iGaming innovation.
                </p>
                <p className="text-[#b3bec7] text-[14px] font-semibold mb-4 ">
                  Stay tuned for exciting events, promotions, and exclusive
                  content featuring Jason Derulo, as we take the BC.CO
                  experience to new heights!
                </p>
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
      {/* <div className="mt-10">
        <Footer />
      </div> */}
    </div>
  );
};

export default JasonDerulo;
