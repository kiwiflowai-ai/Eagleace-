import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Clock, MapPin } from "lucide-react";
import teamPhoto from "@/assets/team-photo.png";
import securityStaff from "@/assets/security-staff.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Why Choose Eagle Ace?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Auckland's most trusted professionals for security alarm installations, CCTV camera setups, electrical work, and appliance installations 
            for both residential and commercial properties across the region.
          </p>
          
          {/* Trust Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50</div>
              <div className="text-sm text-gray-400 font-medium">Properties Secured</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Monitoring Service</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 max-w-6xl mx-auto">
          <div>
            <h3 className="text-4xl font-light text-foreground mb-8 tracking-tight">Our Professional Team</h3>
            <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
              Our certified specialists bring decades of combined experience in security alarm installations, CCTV camera setups, 
              electrical work, switchboard upgrades, new builds, rewires, and heatpump installations. Each team 
              member is fully licensed and trained to provide the highest level of professional service for both 
              residential and commercial properties.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Expert Team</h4>
                </div>
                <p className="text-sm text-muted-foreground">Licensed professionals</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Certified</h4>
                </div>
                <p className="text-sm text-muted-foreground">Industry certifications</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">24/7 Support</h4>
                </div>
                <p className="text-sm text-muted-foreground">Round-the-clock service</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Local Experts</h4>
                </div>
                <p className="text-sm text-muted-foreground">Auckland-based specialists</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={teamPhoto}
                alt="Eagle Ace professional security team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={securityStaff}
                alt="Eagle Ace security professionals on duty"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
          <h3 className="text-3xl font-light text-foreground mb-8 tracking-tight">
            The Eagle Ace Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">🏠 100% Locally Owned</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                We're proud to be Auckland-based, understanding local needs and providing 
                personalized service to our community.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">🛡️ Trusted by Auckland</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                Join 50+ satisfied customers who trust Eagle Ace for their 
                security and electrical needs across Auckland and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;