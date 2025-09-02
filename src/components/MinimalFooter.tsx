export function MinimalFooter() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container-content px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div>
              <div className="text-body text-white font-medium">RiT</div>
              <div className="text-body-small text-gray-400">Promhak Soksothearith</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-body-small text-gray-400 text-center md:text-right">
            <p>© 2024 RiT. Made in Cambodia 🇰🇭</p>
          </div>
        </div>
      </div>
    </footer>
  );
}