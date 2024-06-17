import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import BestProducts from "./components/BestProducts/BestProducts";
import Banner from "./components/Banner/Banner";
import Subscription from "./components/Subscription/Subscription";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-300 duration-200 ">
      <Navbar />
      <Hero />
      <BestProducts />
      <Banner />
      <Subscription />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
