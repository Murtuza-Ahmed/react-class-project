import facebook from "../assets/image/icons8-facebook.svg";
import twitterIcon from "../assets/image/icons8-twitter-circled.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <footer>
          <div className="social">
            <h3>Stay Connected!</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <img src={facebook} alt="FaceBook-Icon" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  <img src={twitterIcon} alt="Twitter-Icon" />
                </a>
              </li>
            </ul>
          </div>
          <address>
            Wall of Wander
            <br />
            RBC Palaza
            <br />
            60 South 6th Street
            <br />
            Minneapellis, MN 55402
          </address>
        </footer>
      </div>
    </>
  );
}
export default Footer;
