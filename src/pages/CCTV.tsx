import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Shield, Smartphone, Eye, Zap, Wrench } from "lucide-react";
import camerasImage from "@/assets/cameras.jpg";

const CCTV = () => {
  const features = [
    {
      icon: Camera,
      title: "HD Cameras",
      description: "High-definition cameras with crystal clear image quality for day and night monitoring."
    },
    {
      icon: Smartphone,
      title: "Remote Viewing",
      description: "Monitor your property from anywhere with our easy-to-use mobile application."
    },
    {
      icon: Eye,
      title: "Night Vision",
      description: "Advanced infrared technology for clear monitoring even in complete darkness."
    },
    {
      icon: Shield,
      title: "Professional Installation",
      description: "Expert installation by certified technicians ensuring optimal camera placement."
    }
  ];

  const packages = [
    {
      name: "Basic CCTV Package",
      price: "From $899",
      features: [
        "4 HD Cameras",
        "1TB Storage",
        "Mobile App Access",
        "Professional Installation",
        "1 Year Warranty"
      ]
    },
    {
      name: "Professional CCTV Package",
      price: "From $1,499",
      features: [
        "8 HD Cameras",
        "2TB Storage",
        "Mobile App Access",
        "Remote Viewing",
        "Professional Installation",
        "2 Year Warranty"
      ]
    },
    {
      name: "Commercial CCTV Package",
      price: "From $2,299",
      features: [
        "16 HD Cameras",
        "4TB Storage",
        "Advanced Analytics",
        "24/7 Monitoring",
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
                CCTV Camera
                <span className="block text-primary">Installations</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Complete CCTV surveillance systems with high-definition cameras and remote viewing capabilities. 
                Keep your property secure with our advanced camera technology and expert installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
                    <Camera className="h-4 w-4 mr-2" />
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={camerasImage} 
                alt="CCTV Camera Installation" 
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
              Why Choose Our CCTV Systems?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology meets professional installation for complete peace of mind
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
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact Eagle Ace today for a free CCTV consultation and customized quote for your home or business in Auckland.
          </p>
          <a href="#contact">
            <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
              <Camera className="h-4 w-4 mr-2" />
              Get Free Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CCTV;