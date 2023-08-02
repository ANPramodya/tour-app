import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import Offer from "./components/offers/Offer";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
