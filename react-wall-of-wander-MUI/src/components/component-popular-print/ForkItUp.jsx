import forkit from "../../assets/image/fork-it-up.jpg";
import EyeingYou from "./EyeingYou";
function ForkItUp() {
  return (
    <>
      <div className="stripe">
        <section id="popular-prints">
          <h2>Popular Prints</h2>
          <div className="ul">
            <div className="li">
              <figure className="color-red">
                <img src={forkit} alt="Fork-It-Up" />
                <figcaption>
                  <a
                    href="https://www.google.com/search?q=fork+it+up+pic&sca_esv=561856720&tbm=isch&sxsrf
                                =AB5stBjV3_ihi4yEg6hFIbz5nZ_TGSf5aA:1693551902853&source=lnms&sa=X&ved=2ahUKEwi0ms687IiBAxV9VaQEHbYPBc8Q_
                                AUoAXoECAYQAw&biw=1280&bih=683&dpr=1"
                    target="_blank"
                  >
                    Fork It Up
                  </a>
                </figcaption>
              </figure>
            </div>
            <EyeingYou />
          </div>
        </section>
      </div>
    </>
  );
}

export default ForkItUp;
