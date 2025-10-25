import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Camera, Smartphone, Zap, Wrench, Lightbulb } from "lucide-react";
import alarmPanelImage from "@/assets/alarm-panel.jpg";
import camerasImage from "@/assets/cameras.jpg";
import sensorsImage from "@/assets/sensors.jpg";

const Products = () => {
  const products = [
    {
      title: "Security Alarm Installations",
      description: "Professional security alarm systems for residential and commercial properties with 24/7 monitoring.",
      image: alarmPanelImage,
      icon: Shield,
      features: ["Residential Alarms", "Commercial Alarms", "24/7 Monitoring", "Mobile App Control"]
    },
    {
      title: "CCTV Camera Installations",
      description: "Complete CCTV surveillance systems with high-definition cameras and remote viewing capabilities.",
      image: camerasImage,
      icon: Camera,
      features: ["HD Cameras", "Remote Viewing", "Night Vision", "Professional Installation"]
    },
    {
      title: "Electrical Services",
      description: "Expert electrical services including switchboard upgrades, power points, lighting, and complete rewiring for homes and businesses.",
      image: sensorsImage,
      icon: Wrench,
      features: ["Switchboard Upgrades & Repairs", "Power Points & Lighting", "New Builds & Rewires", "Safety Switch Installation"]
    },
    {
      title: "Appliance Installations",
      description: "Professional installation of heatpumps, appliances, and electrical equipment for homes and businesses.",
      image: alarmPanelImage,
      icon: Lightbulb,
      features: ["Heatpump Installation", "Appliance Setup", "Electrical Testing", "Warranty Support"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Professional installations for residential and commercial properties across Auckland and Waikato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <a href={index === 0 ? "/alarms" : index === 1 ? "/cctv" : index === 2 ? "/electrical" : "/appliances"}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="#contact">
            <Button variant="outline" size="lg" className="text-base px-8 py-4 h-auto font-medium border-2 hover:bg-primary hover:text-white">
              <Shield className="h-4 w-4 mr-2" />
              Get Custom Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
