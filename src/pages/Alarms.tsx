import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Smartphone, Bell, Home, Building, Zap } from "lucide-react";
import alarmPanelImage from "@/assets/alarm-panel.jpg";

const Alarms = () => {
  const features = [
    {
      icon: Shield,
      title: "24/7 Monitoring",
      description: "Round-the-clock professional monitoring with instant response to any security breach."
    },
    {
      icon: Smartphone,
      title: "Mobile App Control",
      description: "Arm, disarm, and monitor your alarm system from anywhere using your smartphone."
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Immediate notifications via phone, SMS, and mobile app when alarms are triggered."
    },
    {
      icon: Home,
      title: "Smart Integration",
      description: "Seamlessly integrates with smart home devices and automation systems."
    }
  ];

  const packages = [
    {
      name: "Residential Alarm",
      price: "From $699",
      features: [
        "Control Panel",
        "Door/Window Sensors",
        "Motion Detectors",
        "Mobile App",
        "Professional Installation",
        "1 Year Warranty"
      ]
    },
    {
      name: "Commercial Alarm",
      price: "From $1,199",
      features: [
        "Commercial Control Panel",
        "Multiple Zone Coverage",
        "Access Control Integration",
        "24/7 Monitoring",
        "Mobile App",
        "Professional Installation",
        "2 Year Warranty"
      ]
    },
    {
      name: "Premium Package",
      price: "From $1,899",
      features: [
        "Advanced Control Panel",
        "Wireless Sensors",
        "Video Verification",
        "24/7 Monitoring",
        "Mobile App",
        "Smart Home Integration",
        "Professional Installation",
        "3 Year Warranty"
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
                Security Alarm
                <span className="block text-primary">Installations</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional security alarm systems for residential and commercial properties with 24/7 monitoring. 
                Protect what matters most with our advanced alarm technology and expert installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
                    <Shield className="h-4 w-4 mr-2" />
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={alarmPanelImage} 
                alt="Security Alarm System" 
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
              Advanced Alarm Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art security systems designed to keep your property safe and secure
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
            Secure Your Property Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact Eagle Ace today for a free security consultation and customized alarm system quote for your home or business in Auckland.
          </p>
          <a href="#contact">
            <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
              <Shield className="h-4 w-4 mr-2" />
              Get Free Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Alarms;