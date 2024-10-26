import BestSeller from "../components/BestSeller";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import SiteFeature from "../components/SiteFeature";

const Home = () => {
  return (
    <>
      <Hero />
      <SiteFeature />
      <FeaturedProducts />
      <BestSeller />
    </>
  );
};

export default Home;
