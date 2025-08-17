import { Heart, Smile, Baby, Shield, Sparkles, Stethoscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and aesthetic treatments.',
      features: ['Teeth Whitening', 'Veneers', 'Smile Makeovers']
    },
    {
      icon: Shield,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions for a natural-looking smile.',
      features: ['Single Implants', 'Full Mouth Restoration', 'Implant Crowns']
    },
    {
      icon: Heart,
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or clear aligners.',
      features: ['Metal Braces', 'Clear Aligners', 'Retainers']
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Gentle dental care for children in a fun, comfortable environment.',
      features: ['Regular Checkups', 'Fluoride Treatments', 'Dental Education']
    },
    {
      icon: Sparkles,
      title: 'Preventive Care',
      description: 'Regular cleanings and checkups to maintain optimal oral health.',
      features: ['Professional Cleaning', 'Oral Exams', 'X-rays']
    },
    {
      icon: Stethoscope,
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental problems.',
      features: ['Pain Relief', 'Urgent Repairs', 'Emergency Surgery']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care for all ages. From routine cleanings to complex procedures, 
            we provide the highest quality treatment with the latest technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;