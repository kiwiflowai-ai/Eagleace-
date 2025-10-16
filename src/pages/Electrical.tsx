import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Wrench, Home, Building, Lightbulb, Settings } from "lucide-react";
import sensorsImage from "@/assets/sensors.jpg";

const Electrical = () => {
  const features = [
    {
      icon: Zap,
      title: "Residential & Commercial",
      description: "Expert electrical work for both homes and businesses with certified installations."
    },
    {
      icon: Wrench,
      title: "Switchboard Upgrades",
      description: "Modern switchboard upgrades to improve safety and accommodate new electrical loads."
    },
    {
      icon: Home,
      title: "New Builds & Rewires",
      description: "Complete electrical installations for new constructions and comprehensive rewiring projects."
    },
    {
      icon: Lightbulb,
      title: "Heatpump Installations",
      description: "Professional heatpump installation and setup for optimal heating and cooling efficiency."
    }
  ];

  const services = [
    {
      name: "Residential Electrical",
      price: "From $150/hr",
      features: [
        "Power Point Installation",
        "Light Fitting Installation",
        "Switchboard Upgrades",
        "Safety Switch Installation",
        "Electrical Testing",
        "Warranty Support"
      ]
    },
    {
      name: "Commercial Electrical",
      price: "From $180/hr",
      features: [
        "Commercial Wiring",
        "Three Phase Installations",
        "Emergency Lighting",
        "Power Distribution",
        "Compliance Testing",
        "Maintenance Contracts"
      ]
    },
    {
      name: "Heatpump Installation",
      price: "From $899",
      features: [
        "Heatpump Supply & Install",
        "Electrical Connections",
        "Ductwork Installation",
        "System Testing",
        "Warranty Registration",
        "User Training"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Electrical
                <span className="block text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Residential and commercial electrical work including switchboard upgrades and new installations. 
                Professional electrical services with certified technicians and quality workmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
                    <Zap className="h-4 w-4 mr-2" />
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={sensorsImage} 
                alt="Electrical Services" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Electrical Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified electricians providing safe, reliable electrical solutions for your home and business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Electrical Work Done?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact Eagle Ace today for a free electrical consultation and quote for your home or business in Auckland.
          </p>
          <a href="#contact">
            <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
              <Zap className="h-4 w-4 mr-2" />
              Get Free Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electrical;

