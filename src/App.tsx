import { useState } from "react";
import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioHero } from "./components/PortfolioHero";
import { PortfolioProjects } from "./components/PortfolioProjects";
import { PortfolioAbout } from "./components/PortfolioAbout";
import { PortfolioContact } from "./components/PortfolioContact";
import { PortfolioFooter } from "./components/PortfolioFooter";
import { PaymentPage } from "./components/PaymentPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'payment'>('portfolio');

  // Payment page view
  if (currentPage === 'payment') {
    return (
      <div className="min-h-screen bg-gray-900">
        <PaymentPage onBackToPortfolio={() => setCurrentPage('portfolio')} />
      </div>
    );
  }

  // Portfolio view
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <PortfolioHeader onNavigateToPayment={() => setCurrentPage('payment')} />
      
      {/* Main Content */}
      <main>
        <PortfolioHero onNavigateToPayment={() => setCurrentPage('payment')} />
        <PortfolioProjects />
        <PortfolioAbout />
        <PortfolioContact />
      </main>
      
      {/* Footer */}
      <PortfolioFooter />
    </div>
  );
}