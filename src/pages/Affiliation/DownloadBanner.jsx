import { IoMdDownload } from "react-icons/io";

const DownloadBanner = () => {
  return (
    <div>
      <div className="gap-4 bg-layer2 md:flex mt-5">
        {/* Banner Pack Section */}
        <div className="mb-4 flex-1 overflow-hidden rounded-lg bg-layer4 bg-[#323738]">
          <div className="flex flex-wrap">
            <img
              alt="Banner 1"
              className="w-3/5 object-cover"
              src="../../../public/AffiliateImage/downloadImage/banner_d1-048a9859.webp"
            />
            <img
              alt="Banner 2"
              className="w-2/5 object-cover"
              src="../../../public/AffiliateImage/downloadImage/banner_d2-ee0b8b9d.gif"
            />
            <img
              alt="Banner 3"
              className="w-full object-cover "
              src="../../../public/AffiliateImage/downloadImage/banner_d3-858a2e8c.webp"
            />
          </div>
          <div className="p-4">
            <div className="text-base font-extrabold">Banner Pack</div>
            <div className="text-secondary">
              Multilingual package including events, animated banners, and
              more...
            </div>
            <button className=" flex items-center justify-center w-full bg-gradient-to-r from-green-dark to-yellow-dark rounded-xl mt-4 ">
              <span className="text-black font-bold">Download (200MB)</span>
              <IoMdDownload className="text-[30px] text-black   mt-2" />
            </button>
          </div>
        </div>

        {/* Graphics Pack Section */}
        <div className="mb-4 flex-1 overflow-hidden rounded-lg bg-layer4 bg-[#323738]">
          <div className="img-list">
            <img
              alt="graphics_pack"
              className="w-full"
              src="../../../public/AffiliateImage/downloadImage/graphics_pack-f8779108.webp"
            />
          </div>
          <div className="p-4">
            <div className="text-base font-extrabold">Graphics Pack</div>
            <div className="text-secondary">
              Web design components including Coco, logo, gaming elements, and
              UI Assets
            </div>
            <button className=" flex items-center justify-center w-full bg-gradient-to-r from-green-dark to-yellow-dark rounded-xl mt-4 ">
              <span className="text-black font-bold">Download (22.2MB)</span>
              <IoMdDownload className="text-[30px] text-black   mt-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
