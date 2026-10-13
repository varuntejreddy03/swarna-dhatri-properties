import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomMobileNav } from './components/BottomMobileNav';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WhyZaheerabadPage } from './pages/WhyZaheerabadPage';
import { PlotExplorerPage } from './pages/PlotExplorerPage';
import { ToolsPage } from './pages/ToolsPage';
import { OffersPage } from './pages/OffersPage';
import { BookVisitPage } from './pages/BookVisitPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqsPage } from './pages/FaqsPage';
import { GuidesPage } from './pages/GuidesPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { StyleguidePage } from './pages/StyleguidePage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
      document.documentElement.setAttribute('data-lang', 'en');
    }
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FCFBF7] text-[#0A1C16] selection:bg-[#D4A84D] selection:text-[#0A1C16]">
        <Header />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/why-zaheerabad-nimz" element={<WhyZaheerabadPage />} />
            <Route path="/plot-explorer" element={<PlotExplorerPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/book-visit" element={<BookVisitPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/styleguide" element={<StyleguidePage />} />

            {/* Clean redirection for any obsolete language prefixes */}
            <Route path="/te/*" element={<Navigate to="/" replace />} />
            <Route path="/en/*" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <BottomMobileNav />
      </div>
    </BrowserRouter>
  );
};

export default App;
