import vehicles from "../../assets/image/vehicles.jpg";
function Vehicles() {
  return (
    <>
      <div className="li">
        <figure className="color-green">
          <img src={vehicles} alt="Vehicles-Art" />
          <figcaption>
            <a
              href="https://www.google.com/search?q=vehicles-art+pic&sca_esv=561868494&tbm=isch&sxsrf
                                =AB5stBgC4Iq6pEVRIp1Tj2wWwUXRAr2bQg:1693552625027&source=lnms&sa=X&ved=2ahUKEwiq4P2U74iBAxVocKQEHYOfAzsQ_AUoAXoECAEQAw"
              target="_blank"
            >
              Vehicles
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
export default Vehicles;
