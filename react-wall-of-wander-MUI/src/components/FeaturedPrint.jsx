import toocool740 from "../assets/image/too-cool-740.jpg";
import toocool1058 from "../assets/image/too-cool-1058.jpg";
import toocool300 from "../assets/image/too-cool-300.jpg";
import toocool1200 from "../assets/image/too-cool-1200.jpg";
function FeaturedPrint() {
  return (
    <>
      <section id="featured-print">
        <h2>Featured Print</h2>
        <figure className="color-yellow">
          <picture>
            <source media="(min-width: 500px)" srcSet={toocool740} />
            <source media="(min-width: 800px)" srcSet={toocool1058} />
            <source media="(min-width: 1200px)" srcSet={toocool1200} />
            <img src={toocool300} alt="Too Cool For School" />
          </picture>
          <figcaption>
            <a
              href="https://www.google.com/search?q=too+cool+for+school+pic&tbm=isch&ved=2ahUKEwjZhY347YiBAxX6nCcCHa4vAbEQ2
                        -cCegQIABAA&oq=too+cool+for+school+pic&gs_lcp=CgNpbWcQAzoECCMQJzoHCAAQigUQQzoFCAAQgARQuwhYkh9gziBoAHAAeACAAdoBiAHBBpIBBTAuMS4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient
                        =img&ei=qI7xZNmRAfq5nsEPrt-EiAs&bih=683&biw=1280"
              target="_blank"
            >
              Too Cool For School
            </a>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default FeaturedPrint;
