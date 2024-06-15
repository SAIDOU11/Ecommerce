import Img1 from "../../assets/AnthraciteSuit.jpg";
import Img2 from "../../assets/BlackSuit.jpg";
import Img3 from "../../assets/GraySuit.jpg";
import Img4 from "../../assets/Suit2pieces.jpg";
import Img5 from "../../assets/BlueSuit.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Suit Anthracite Color",
    rating: 5.0,
    color: "Anthracite",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Suit Black Color",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Suit Gray Color",
    rating: 4.4,
    color: "Gray",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Suit 2 pieces",
    rating: 4.6,
    color: "Black",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Suit Blue Color",
    rating: 4.9,
    color: "Blue",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 ">
      <div className="container ">
        {/* 1 */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-blue-900 ">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Selling Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            perferendis voluptatum laborum?
          </p>
        </div>
        {/* 2 */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md "
                />
                <div>
                  <h3 className="font-semibold">{data.title} </h3>
                  <p className="text-sm text-black ">{data.color} </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
