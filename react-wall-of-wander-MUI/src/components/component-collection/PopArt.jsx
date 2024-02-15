import popArt from "../../assets/image/pop-art.jpg";
import Abstract from "./Abstract";
function PopArt() {
  return (
    <>
      <section id="collections">
        <h2>Collections</h2>
        <div className="ul">
          <div className="li">
            <figure className="color-orange">
              <img src={popArt} alt="Pop-Art" />
              <figcaption>
                <a
                  href="https://www.google.com/search?q=pop+art+pic&sca_esv=561856720&tbm=isch&sxsrf=AB5stBgFMUhwzJ8Ak7Jrf2sDdqdFdWxS
                                 _w:1693552410751&source=lnms&sa=X&ved=2ahUKEwifpueu7oiBAxWVdqQEHdpzDFYQ_AUoAXoECAIQAw&biw=1280&bih=683&dpr=1"
                  target="_blank"
                >
                  Pop Art
                </a>
              </figcaption>
            </figure>
          </div>
          <Abstract />
        </div>
      </section>
    </>
  );
}
export default PopArt;
