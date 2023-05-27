import "./App.scss";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Content from "./content/Content";
import Testimonial from "./testimonial/Testimonial";
import Footer from "./footer/Footer";
function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <Content />
        <Testimonial />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
