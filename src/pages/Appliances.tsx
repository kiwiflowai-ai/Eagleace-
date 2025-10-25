import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Lightbulb, Home, Building, Zap, Settings } from "lucide-react";
import alarmPanelImage from "@/assets/alarm-panel.jpg";

const Appliances = () => {
  const features = [
    {
      icon: Wrench,
      title: "Heatpump Installation",
      description: "Professional heatpump installation and setup for optimal heating and cooling efficiency."
    },
    {
      icon: Lightbulb,
      title: "Appliance Setup",
      description: "Complete setup and configuration of electrical appliances for homes and businesses."
    },
    {
      icon: Zap,
      title: "Electrical Testing",
      description: "Comprehensive electrical testing and safety checks for all installed appliances."
    },
    {
      icon: Home,
      title: "Warranty Support",
      description: "Full warranty support and maintenance services for all installed appliances."
    }
  ];

  const packages = [
    {
      name: "Basic Appliance Setup",
      price: "From $299",
      features: [
        "Appliance Installation",
        "Electrical Connections",
        "Basic Testing",
        "User Instructions",
        "1 Year Warranty",
        "Follow-up Support"
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
    },
    {
      name: "Premium Package",
      price: "From $1,499",
      features: [
        "Multiple Appliance Setup",
        "Smart Home Integration",
        "Advanced Testing",
        "Maintenance Plan",
        "Extended Warranty",
        "Priority Support"
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
                Appliance
                <span className="block text-primary">Installations</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional installation of heatpumps, appliances, and electrical equipment for homes and businesses. 
                Expert setup and configuration with full warranty support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
                    <Wrench className="h-4 w-4 mr-2" />
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={alarmPanelImage} 
                alt="Appliance Installation" 
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
              Professional Appliance Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert installation and setup services for all your electrical appliances and equipment
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
            Ready to Install Your Appliances?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact Eagle Ace today for a free consultation and quote for your appliance installation needs in Auckland and Waikato.
          </p>
          <a href="#contact">
            <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
              <Wrench className="h-4 w-4 mr-2" />
              Get Free Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appliances;

