import { Button } from "@/components/ui/button";
import { Shield, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 bg-black">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
            Security & Electrical
            <span className="block font-bold text-primary">Solutions in Auckland</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Expert electrical services with <span className="font-medium text-white">5+ years</span> of experience. 
            Specialising in security systems, electrical installations, and appliance setup across Auckland.
          </p>
          
          <div className="mb-12">
            <div className="inline-flex items-center gap-12 px-6 py-4">
              <div className="text-center group">
                <div className="text-6xl font-light text-primary mb-1 group-hover:scale-105 transition-transform duration-200">A</div>
                <div className="text-sm font-medium text-gray-300 uppercase tracking-widest">Alarms</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center group">
                <div className="text-6xl font-light text-primary mb-1 group-hover:scale-105 transition-transform duration-200">C</div>
                <div className="text-sm font-medium text-gray-300 uppercase tracking-widest">Cameras</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center group">
                <div className="text-6xl font-light text-primary mb-1 group-hover:scale-105 transition-transform duration-200">E</div>
                <div className="text-sm font-medium text-gray-300 uppercase tracking-widest">Electrical</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact">
              <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Get Free Quote
              </Button>
            </a>
            <Button variant="outline" size="lg" className="text-base px-8 py-4 h-auto font-medium">
              <Phone className="h-4 w-4 mr-2" />
              +64 274 224 714
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-gray-400 font-medium">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">5★</div>
              <div className="text-sm text-gray-400 font-medium">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-gray-400 font-medium">Projects</div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Electrical Services</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Residential & Commercial Electrical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Switchboard Upgrades</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>New Builds & Rewires</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Heatpump & Appliance Installations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Security Services</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Security Alarm Installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>CCTV Camera Installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Professional Setup & Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;