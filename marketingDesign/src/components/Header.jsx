import { FaSearch } from "react-icons/fa";
import Toggle from "./Toggle";
import { useState } from "react";

const Header = () => {
  const [divVisible, setDivVisible] = useState(true);
  console.log(divVisible);
  const OpenToggle = () => {
    setDivVisible(!divVisible);
  };
  console.log(OpenToggle, "click");
  return (
    <div>
      <div className="container">
        <header>
          <nav>
            <div className="logo">
              <h1>M.S</h1>
            </div>
            <div>
              <div className={`ul ${divVisible ? "visible" : "hidden"}`}>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Project</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="main">
                <div className="icon">
                  <FaSearch />
                </div>
                <div className="button">
                  <button>Sign In</button>
                </div>
              </div>
            </div>
            <Toggle fun={OpenToggle} />
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Header;
