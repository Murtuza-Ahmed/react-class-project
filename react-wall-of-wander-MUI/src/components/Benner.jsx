import hero838 from "../assets/image/hero-838.png";
import hero1200 from "../assets/image/hero-1200.png";
import hero300 from "../assets/image/hero-300.png";
function Benner() {
  return (
    <>
      <section id="hero">
        <picture>
          <source srcSet={hero838} media="(min-width:500px)" />
          <source media="(min-width: 800px)" srcSet={hero1200} />
          <img src={hero300} alt="Banner" />
        </picture>
      </section>
    </>
  );
}

export default Benner;
