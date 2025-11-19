import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModernBlog from "./pages/ModernBlog";
import BlogCategory from "./pages/BlogCategory";
import BlogDetails from "./pages/BlogDetails";
import { ModalProvider } from "./components/context/ModalContext";
import ModalContainer from "./components/modals/ModalContainer";
import UIkit from "uikit";
import { useEffect } from "react";
import About from "./pages/About";
import EducationNews from "./pages/EducationNews";

function App() {
  const location = useLocation();

  // Re-run UIkit on route change
  useEffect(() => {
    UIkit.update();
  }, [location.pathname]);

  return (
    <ModalProvider>
      <ModalContainer />

      {/* Header always visible */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-category" element={<BlogCategory />} />
          <Route path="/blog" element={<ModernBlog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/edu-news" element={<EducationNews />} />
          <Route path="/study-resources" element={<StudyResources />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </ModalProvider>
  );
}

export default App;
