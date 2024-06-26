import Slider from "react-slick";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialData = [
  {
    id: 1,
    name: "Anatoly Vera",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolore ab reprehenderit tenetur nobis fugiat.",
    img: Img1,
  },
  {
    id: 2,
    name: "Francis Ghaaribi",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolore ab reprehenderit tenetur nobis fugiat.",
    img: Img2,
  },
  {
    id: 3,
    name: "Charles Almeida",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolore ab reprehenderit tenetur nobis fugiat.",
    img: Img3,
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/*  */}

        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-blue-900 ">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold mt-2">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            perferendis voluptatum laborum?
          </p>
        </div>
        {/* Testimonial  */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                {" "}
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4 ">
                    <img
                      src={data.img}
                      alt="Photo de profil"
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm text-primary dark:text-gray-300 ">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-gray-200">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
