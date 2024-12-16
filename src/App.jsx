import "./App.css";
import { Routes, Route } from "react-router";

//pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import HighClass from "./pages/HighClass";
import KatiaDental from "./pages/KatiaDental";
import FcbBarcelona from "./pages/FcbBarcelona";
import Agora from "./pages/Agora";
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

export default function App() {
  return (
    <>
      {/* <ScrollToHashElement behavior="smooth" inline="center" block="center" /> */}
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/high-class" element={<HighClass />} />
        <Route path="/KatiaDental" element={<KatiaDental />} />
        <Route path="/FCBBarcelona" element={<FcbBarcelona />} />
        <Route path="/Agora" element={<Agora />} />
      </Routes>
      <Footer />
    </>
  );
}
