import Header from "./Header";
import Banner from "./Benner";
import Mission from "./Mission";
import PopularPrint from "./component/PopularPrint";
import FeaturedPrint from "./FeaturedPrint";
import Collection from "./component-collection/Collection";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Mission />
      <PopularPrint />
      <FeaturedPrint />
      <Collection />
    </>
  );
}
export default App;
