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
import StudyResources from "./pages/StudyResources";
import VideoLectures from "./pages/VideoLectures";
import VideoLecturesEnhanced from "./pages/EnhancedVideoLectures";
import ScholarshipsCareer from "./pages/ScholarshipsCareer";
import InstitutionDirectory from "./pages/InstitutionDirectory";
import KnowledgeHub from "./pages/KnowledgeHub";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import BlogDetail from "./pages/BlogDetails";

function App() {
  const location = useLocation();

  // Re-run UIkit on route change
  useEffect(() => {
    UIkit.update();
  }, [location.pathname]);
  const noLayoutRoutes = ["/admin"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);
  return (
    <ModalProvider>
      <ModalContainer />

      {/* Header always visible */}
      {!hideLayout && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog-category" element={<BlogCategory />} /> */}
          <Route path="/blog" element={<ModernBlog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/edu-news" element={<EducationNews />} />
          <Route path="/study-resources" element={<StudyResources />} />
          <Route path="/video-lectures" element={<VideoLecturesEnhanced />} />
          <Route path="/scholarship" element={<ScholarshipsCareer />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admin" element={<Login />} />
          <Route
            path="/institution-directory"
            element={<InstitutionDirectory />}
          />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog-category/:category" element={<BlogCategory />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      {!hideLayout && <Footer />}
    </ModalProvider>
  );
}

export default App;
