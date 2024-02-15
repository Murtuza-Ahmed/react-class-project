import music from "../../assets/image/music.jpg";
import Vehicles from "./Vehicles";
function Muisc() {
  return (
    <>
      <div className="li">
        <figure className="color-red">
          <img src={music} alt="Music-Art" />
          <figcaption>
            <a
              href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
              target="_blank"
            >
              Music
            </a>
          </figcaption>
        </figure>
      </div>
      <Vehicles />
    </>
  );
}
export default Muisc;
