import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./pages/Header";
import LoginSignUpPage from "./pages/LoginSignUpPage";
import AIDemo from "./pages/AIDemo";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import TemplateGallery from "./pages/TemplateGallery";
import ScrollToTop from "@/components/ScrollToTop.jsx";

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: '30px' }}>
        <Header />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignUpPage />} />
        <Route path="/ai-demo" element={<AIDemo />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/templates" element={<TemplateGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
