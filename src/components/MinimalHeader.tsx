import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";

export function MinimalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="container-content px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-white font-semibold">RiT</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors text-body"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors text-body">
                Hire Me
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a 
              key={item.name}
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-heading-3 text-gray-300 hover:text-white transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary mt-8"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}