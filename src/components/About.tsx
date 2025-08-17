import { Heart, Shield, Users, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, understanding their unique needs and concerns.'
    },
    {
      icon: Shield,
      title: 'Safe & Hygienic',
      description: 'Strict sterilization protocols and state-of-the-art equipment ensure your safety.'
    },
    {
      icon: Users,
      title: 'Family-Friendly',
      description: 'Welcoming environment for patients of all ages, from toddlers to seniors.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality dental care with proven results.'
    }
  ];

  const achievements = [
    '15+ years of dental excellence',
    '5000+ satisfied patients',
    'Advanced dental technology',
    'Continuing education certified',
    '24/7 emergency care available',
    'Multilingual staff support'
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                About DentalCare
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, DentalCare has been dedicated to providing exceptional 
                dental services to our community. Our mission is to create beautiful, 
                healthy smiles while ensuring every patient feels comfortable and cared for.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine cutting-edge technology with a personal touch, offering 
                comprehensive dental care in a modern, welcoming environment. Our team 
                of experienced professionals is committed to staying at the forefront 
                of dental innovation to provide you with the best possible care.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose Us</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 bg-background border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-secondary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-secondary border-border shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To provide comprehensive, compassionate dental care that enhances our patients' 
                oral health, overall well-being, and confidence. We are committed to building 
                lasting relationships with our patients through personalized treatment, 
                advanced technology, and a dedication to excellence in everything we do."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;