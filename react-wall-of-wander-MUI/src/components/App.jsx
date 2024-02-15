import Header from "./Header";
import Banner from "./Benner";
import Mission from "./Mission";
import PopularPrint from "./component-popular-print/PopularPrint";
import FeaturedPrint from "./FeaturedPrint";
import Collection from "./component-collection/Collection";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Mission />
      <PopularPrint />
      <FeaturedPrint />
      <Collection />
      <Footer />
    </>
  );
}
export default App;
