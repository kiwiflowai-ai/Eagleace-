import eagleLogo from "@/assets/eagleacelogo.jpeg";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={eagleLogo} 
                alt="Eagle Ace Security Logo" 
                className="h-12 w-auto"
                style={{ backgroundColor: 'transparent' }}
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">Eagle Ace</h3>
                <p className="text-sm text-muted-foreground">Security & Electrical Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Auckland's trusted security and electrical solutions provider. Protecting and powering homes and businesses 
              with cutting-edge technology and professional service.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Alarm Systems</li>
              <li>CCTV Surveillance</li>
              <li>Smart Sensors</li>
              <li>24/7 Monitoring</li>
              <li>Switchboard Upgrades</li>
              <li>Lighting Installation</li>
              <li>New Builds & Renos</li>
              <li>Installation & Setup</li>
              <li>Maintenance Support</li>
            </ul>
          </div>

          {/* Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Service Areas</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Auckland Central</li>
              <li>North Shore</li>
              <li>South Auckland</li>
              <li>West Auckland</li>
              <li>East Auckland</li>
              <li>Manukau</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+64 274 224 714</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@eagleace.co.nz</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Auckland, New Zealand</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/eagleace.nz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@eagleace.nz</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Eagle Ace Security & Electrical Solutions. All rights reserved. | 
            <span className="text-primary"> Licensed Security & Electrical Installer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;