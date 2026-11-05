import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CheckupModal from './components/CheckupModal';
import ClientPortalModal from './components/ClientPortalModal';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CalculatorsPage from './pages/CalculatorsPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // State-based client-side multi-page routing
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'services', 'calculators', 'why-us', 'contact'
  
  // Modals state
  const [isCheckupOpen, setIsCheckupOpen] = useState(false);
  const [checkupGoal, setCheckupGoal] = useState('');
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Default active category in Services page if navigated from home cards
  const [selectedServiceCategory, setSelectedServiceCategory] = useState('loans');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  const handleOpenCheckup = (initialGoal = '') => {
    setCheckupGoal(initialGoal);
    setIsCheckupOpen(true);
  };

  const handleCheckupComplete = (data) => {
    triggerToast(`Financial Checkup Booked! Reference #${data.refCode}. Assigned to Baner Desk.`);
  };

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative">
      
      {/* Sticky Header / Navbar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onOpenCheckup={handleOpenCheckup}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Area based on currentPage state */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            onOpenCheckup={handleOpenCheckup}
            onSelectServiceCategory={(catId) => setSelectedServiceCategory(catId)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            onOpenCheckup={handleOpenCheckup}
            defaultCategory={selectedServiceCategory}
          />
        )}

        {currentPage === 'calculators' && (
          <CalculatorsPage 
            onOpenCheckup={handleOpenCheckup}
          />
        )}

        {currentPage === 'why-us' && (
          <WhyUsPage 
            onOpenCheckup={handleOpenCheckup}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onOpenCheckup={handleOpenCheckup}
          />
        )}
      </main>

      {/* Global Footer (Light Neutral Background) */}
      <Footer 
        setCurrentPage={setCurrentPage}
        onOpenCheckup={handleOpenCheckup}
      />

      {/* Multi-Step Modal: Free Financial Checkup */}
      <CheckupModal 
        key={`${isCheckupOpen ? 'open' : 'closed'}-${checkupGoal}`}
        isOpen={isCheckupOpen}
        onClose={() => setIsCheckupOpen(false)}
        initialGoal={checkupGoal}
        onComplete={handleCheckupComplete}
      />

      {/* Client Portal Modal */}
      <ClientPortalModal 
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* Toast Notification */}
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

    </div>
  );
}
