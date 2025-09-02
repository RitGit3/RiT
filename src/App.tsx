import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioHero } from "./components/PortfolioHero";
import { PortfolioProjects } from "./components/PortfolioProjects";
import { PortfolioAbout } from "./components/PortfolioAbout";
import { PortfolioContact } from "./components/PortfolioContact";
import { PortfolioFooter } from "./components/PortfolioFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <PortfolioHeader />
      
      {/* Main Content */}
      <main>
        <PortfolioHero />
        <PortfolioProjects />
        <PortfolioAbout />
        <PortfolioContact />
      </main>
      
      {/* Footer */}
      <PortfolioFooter />
    </div>
  );
}