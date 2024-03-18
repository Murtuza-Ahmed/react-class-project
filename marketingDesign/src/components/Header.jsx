import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>M.S</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Sevices</li>
            <li>Project</li>
            <li>Contact</li>
            <div className="icon-button">
              <ul>
                <li>
                  <FaSearch />
                </li>
                <button>Login</button>
              </ul>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
