import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="container">
        <header>
          <nav>
            <div className="logo">
              <h1>M.S</h1>
            </div>
            <div className="ul">
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
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Header;
