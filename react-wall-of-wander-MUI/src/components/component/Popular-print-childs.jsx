import scooty from "../../assets/image/lets-scoots.jpg";
function PopularPrintChilds() {
  return (
    <>
      <div className="li">
        <figure className="color-green">
          <source media="(min-width: 500px)" srcSet={scooty} />
          <img src={scooty} alt="Scooty" className="image-width" />
          <figcaption>
            <a
              href="https://www.google.com/search?q=scoot+old+pic&sca_esv=561856720&tbm=isch&sxsrf=AB5stBgZFXXpRZIfBdExv8zlNWGr7xglGg:1693552201303&source
                                    =lnms&sa=X&ved=2ahUKEwiuy_fK7YiBAxWOU6QEHbC9C2sQ_AUoAXoECAYQAw&biw=1280&bih=683&dpr=1"
              target="_blank"
            >
              Let's Scoot
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default PopularPrintChilds;
