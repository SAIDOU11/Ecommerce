import Img1 from "../../assets/Black-Tuxedo.png";
import Img2 from "../../assets/White-Tuxedo.png";
import Img3 from "../../assets/Navy-Tuxedo.png";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Black Tuxedo",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque doloribus expedita iste maxime non sed sapiente blanditiis pariatur dignissimos hic?",
  },
  {
    id: 2,
    img: Img2,
    title: "White Tuxedo",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque doloribus expedita iste maxime non sed sapiente blanditiis pariatur dignissimos hic?",
  },
  {
    id: 3,
    img: Img3,
    title: "Navy Tuxedo",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque doloribus expedita iste maxime non sed sapiente blanditiis pariatur dignissimos hic?",
  },
];

const BestProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header */}
        <div className="text-left mb-24   ">
          <p data-aos="fade-up" className="text-sm text-blue-900 ">
            Top Rated Tuxedo
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mb-24">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            perferendis voluptatum laborum?
          </p>
        </div>
        {/* Body  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-gray-200 hover:bg-gray-400 dark:bg-gray-300 dark:hover:bg-primary/40 hover:text-white relative shadow-xl duration-200 group-high group max-w-[300px] "
            >
              <div className="h-[100px] ">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] max-h-[300px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-200 drop-shhadow-md  "
                />
              </div>

              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1 ">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl text-primary font-bold mb-2">
                  {" "}
                  {data.title}{" "}
                </h1>
                <p className="text-sm text-primary/90 group-hover:text-white duration-200  line-clamp-2 ">
                  {data.description}{" "}
                </p>
                <button className="bg-primary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
