import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";
import About from "./pages/About";
import Services from "./pages/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/graphic-design" element={<Logo />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
