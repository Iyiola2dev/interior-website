import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";
import Services from "../components/Services";
import Banner2 from "../components/Banner2";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden px-2 py-6">
      <Hero />
      <Brand />
      <Services />
      <Banner2 />
      <Banner2 />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
