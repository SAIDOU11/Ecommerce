import { TbBackground } from "react-icons/tb";
import Banner from "../../assets/banner.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-center",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscription = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container blackdrop-blur_sm py-10 ">
        <div className="space-y-6max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
