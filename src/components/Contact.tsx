import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://hook.us2.make.com/gchatrdh4a553dtqhvu4r1o4b94kf6b8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'Eagle Ace Website Contact Form'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact Eagle Ace today for a free security consultation and customized quote 
            for your home or business in Waikato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  Call Us Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">+64 274 224 714</p>
                <p className="text-muted-foreground">24/7 Emergency Support Available</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">info@eagleace.co.nz</p>
                <p className="text-muted-foreground">We'll respond within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  Service Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">Auckland and Waikato & Surrounding Areas</p>
                <p className="text-muted-foreground">North Shore, Central, South, West Auckland and Waikato</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-foreground">Sunday: Emergency calls only</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get Your Free Quote</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✅ Thank you for your inquiry! We will contact you within 2 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ❌ Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <select 
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Service Type</option>
                  <option value="residential">Residential Security</option>
                  <option value="commercial">Commercial Security</option>
                  <option value="surveillance">CCTV Surveillance</option>
                  <option value="alarm">Alarm Systems</option>
                  <option value="maintenance">Maintenance & Support</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your security needs..."
                  rows={4}
                  className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
              </div>
              <Button 
                type="submit"
                variant="premium" 
                size="lg" 
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;