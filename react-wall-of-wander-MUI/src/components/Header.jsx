import logo from "../assets/image/header-logo.svg";
function Header() {
  return (
    <>
      <div className="header">
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img src={logo} />
                </a>
              </li>
              <li>
                <a href="#">Conatact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Collection</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
export default Header;
