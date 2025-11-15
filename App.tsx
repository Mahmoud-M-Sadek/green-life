
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GardenDesignPage from './pages/services/GardenDesignPage';
import LandscapingPage from './pages/services/LandscapingPage';
import TurfPage from './pages/services/TurfPage';
import IrrigationPage from './pages/services/IrrigationPage';
import StadiumPage from './pages/services/StadiumPage';
import LightingPage from './pages/services/LightingPage';
import PavingPage from './pages/services/PavingPage';
import PergolaPage from './pages/services/PergolaPage';
import BeautifyPage from './pages/services/BeautifyPage';
import MaintenancePage from './pages/services/MaintenancePage';
import GreenWallPage from './pages/services/GreenWallPage';
import PlantSupplyPage from './pages/services/PlantSupplyPage';
import ProjectsPage from './pages/ProjectsPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white text-accent font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/garden-design" element={<GardenDesignPage />} />
          <Route path="/services/landscaping" element={<LandscapingPage />} />
          <Route path="/services/turf" element={<TurfPage />} />
          <Route path="/services/irrigation" element={<IrrigationPage />} />
          <Route path="/services/stadium" element={<StadiumPage />} />
          <Route path="/services/lighting" element={<LightingPage />} />
          <Route path="/services/paving" element={<PavingPage />} />
          <Route path="/services/pergola" element={<PergolaPage />} />
          <Route path="/services/beautify" element={<BeautifyPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />
          <Route path="/services/greenwall" element={<GreenWallPage />} />
          <Route path="/services/plantsupply" element={<PlantSupplyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
