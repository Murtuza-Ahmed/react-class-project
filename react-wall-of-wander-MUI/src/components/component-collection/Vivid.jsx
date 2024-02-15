import vivid from "../../assets/image/vivid.jpg";
import Muisc from "./Music";
function Vivid() {
  return (
    <>
      <div className="li">
        <figure className="color-yellow">
          <img src={vivid} alt="vivid-Art" />
          <figcaption>
            <a
              href="https://www.google.com/search?q=vivid-art+pic&sca_esv=561856720&tbm=isch&sxsrf=AB5stBhjMH6fvDMhyRp3cgfiy3e_
                                 nbukpw:1693552524841&source=lnms&sa=X&ved=2ahUKEwiC-5rl7oiBAxW_RKQEHR2CBtMQ_AUoAXoECAMQAw&biw=1280&bih=683&dpr=1"
              target="_blank"
            >
              Vivid
            </a>
          </figcaption>
        </figure>
      </div>
      <Muisc />
    </>
  );
}

export default Vivid;
