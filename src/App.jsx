import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import BestProducts from "./components/BestProducts/BestProducts";
import Banner from "./components/Banner/Banner";
import Subscription from "./components/Subscription/Subscription";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <div className="dark:bg-gray-300">
      <Navbar />
      <Hero />
      <BestProducts />
      <Banner />
      <Subscription />
      <Products />
    </div>
  );
};

export default App;
