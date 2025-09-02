import { Button } from "./ui/button";

export function GamingFooter() {
  return (
    <footer className="bg-gray-950 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white mb-4">🎮 Epic Gaming</h3>
            <p className="text-gray-400 mb-4">
              The ultimate destination for gamers worldwide. Level up your gaming experience.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                📘 Facebook
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                🐦 Twitter
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Games</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Action Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RPG Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategy Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports Games</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leaderboards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Epic Gaming. All rights reserved. Made with ❤️ for gamers.
          </p>
        </div>
      </div>
    </footer>
  );
}