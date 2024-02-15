import music from "../../assets/image/music.jpg";
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
    </>
  );
}
export default Muisc;
