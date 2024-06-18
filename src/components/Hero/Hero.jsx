import { ImInfinite } from "react-icons/im";
import Image1 from "../../assets/Blue.png";
import Image2 from "../../assets/Gray.png";
import Image3 from "../../assets/Sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 30% off on all Men's Suit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi temporibus praesentium provident culpa. Recusandae tenetur accusantium libero?",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Men's Suit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi temporibus praesentium provident culpa. Recusandae tenetur accusantium libero?",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 70% off on all Men's Suit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi temporibus praesentium provident culpa. Recusandae tenetur accusantium libero?",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-white flex justify-center items-center dark:bg-gray-300  dark:text-white duration-200 ">
      {/* bg */}
      <div className="h-[700px] w-[700px] dark:bg-gray-500 bg-gray-400/40 absolute  -top-[110%] -left-[150px] rounded-3xl rotate-45 -z-9 "></div>
      {/* hero */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* 1 */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary">
                    {data.title}
                  </h1>
                  <p className="text-primary">{data.description}</p>
                  <div>
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-red-800 to-red-500 font-bold hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* 2 */}
                <div className="order-1 sm:order-2 ">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
