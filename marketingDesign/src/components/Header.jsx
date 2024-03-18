import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <h2>M.S</h2>
          </div>
          <div className="ul">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
            <ul>
              <div className="icon">
                <li>
                  <FaSearch />
                </li>
                <div className="login-button">
                  <button>Login</button>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
