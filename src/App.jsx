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

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/high-class" element={<HighClass />} />
        <Route path="/katia-dental" element={<KatiaDental />} />
        <Route path="/fc-barcelona" element={<FcbBarcelona />} />
        <Route path="/agora" element={<Agora />} />
      </Routes>
      <Footer />
    </>
  );
}
