import About from "./layouts/about";
import Banner from "./layouts/banner";
import Contact from "./layouts/contact";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Services from "./layouts/services";

export default function App() {
  return (
    <>
      <Banner />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
