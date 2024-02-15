import landScape from "../../assets/image/landscape.jpg";
function LandScape() {
  return (
    <>
      <div className="li">
        <figure className="color-skyblue">
          <img src={landScape} alt="Land-Scape-Art" />
          <figcaption>
            <a
              href="https://www.google.com/search?q=landscape-art+pic&sca_esv=561868494&tbm=isch&sxsrf=AB5stBiUnp0dud163kzzJ8xJbHHUba4DpA:1693552707117&source
                                =lnms&sa=X&ved=2ahUKEwjWj5C874iBAxUZWaQEHWPzB2EQ_AUoAXoECAEQAw&biw=1280&bih=683&dpr=1"
              target="_blank"
            >
              LandScape
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default LandScape;
