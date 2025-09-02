export function SimpleHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl text-black">
            Portfolio
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">
              Projects
            </a>
            <a href="#blog" className="text-gray-700 hover:text-purple-600 transition-colors">
              Blog
            </a>
          </nav>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <span className="text-xl">☰</span>
          </div>
        </div>
      </div>
    </header>
  );
}