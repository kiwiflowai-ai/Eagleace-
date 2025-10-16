import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import eagleLogo from "@/assets/eagleacelogo.jpeg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <img 
              src={eagleLogo} 
              alt="Eagle Ace Security Logo" 
              className="h-14 w-auto object-contain"
              style={{ backgroundColor: 'transparent' }}
            />
            <div>
              <h1 className="text-xl font-semibold text-white">Eagle Ace</h1>
              <p className="text-sm text-gray-300 font-medium">Security & Electrical</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/cctv" className="text-gray-300 hover:text-primary transition-colors font-medium">
              CCTV
            </a>
            <a href="/alarms" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Alarms
            </a>
            <a href="/electrical" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Electrical
            </a>
            <a href="#about" className="text-gray-300 hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/eagleace.nz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-lg">
                Get Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;