import LightBtn from "../../assets/light-mode.png";
import DarkBtn from "../../assets/dark-mode.png";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  //   console.log(element); html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={LightBtn}
        alt="Light mode."
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer transition-all duration-200 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={DarkBtn}
        alt="Dark mode."
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer transition-all duration-200`}
      />
    </div>
  );
};

export default DarkMode;
