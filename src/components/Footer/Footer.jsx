import React from "react";
import Logo from "../../assets/red-tie.png";
import Banner from "../../assets/gray-banner.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-black bg-gray-300  dark:bg-gray-500 dark:text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/*   */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 ">
              <img src={Logo} alt="" className="max-w-[50px]" />
              Suiting
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              voluptate, minima repellat labore reprehenderit aperiam.
            </p>
          </div>
          {/*   */}
          <div className="grid grid-cols-2  sm:grid-cols-3 col-span-2 md:pl-14">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 ">
                  Links
                </h1>
                <ul>
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer  dark:hover:text-red-500 hover:translate-x-1 duration-200 text-primary hover:text-red-600 dark:text-white"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div></div>
            {/*  */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaLocationArrow />
                  <p className="">Paris, France</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+444 444 444</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
