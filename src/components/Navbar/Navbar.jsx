import React from "react";
import Logo from "../../assets/tuxedo-icon.png";

const Navbar = () => {
  return (
    <div>
      <div>
        {/* upper navbar  */}
        <div>
          <div>
            <div>
              <a href="#">
                <img src={Logo} alt="Logo Suits Clothing." />
              </a>
            </div>
          </div>
        </div>
        {/* lower navbar  */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
