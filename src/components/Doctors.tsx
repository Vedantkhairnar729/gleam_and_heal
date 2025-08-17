import { Calendar, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'General Dentistry & Cosmetic Dentistry',
      experience: '12 years experience',
      education: 'DDS, Harvard School of Dental Medicine',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      achievements: ['Board Certified', 'Cosmetic Dentistry Specialist', '500+ Smile Makeovers']
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Orthodontics & Invisalign',
      experience: '15 years experience',
      education: 'DDS, MS Orthodontics, UCLA',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      achievements: ['Invisalign Diamond Provider', 'Top 1% Orthodontist', '3000+ Cases Completed']
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialization: 'Pediatric Dentistry',
      experience: '8 years experience',
      education: 'DDS, Pediatric Residency, UCSF',
      image: 'https://images.unsplash.com/photo-1594824609149-57f739dc8e96?w=400&h=400&fit=crop&crop=face',
      achievements: ['Pediatric Specialist', 'Child-Friendly Approach', '2000+ Happy Kids']
    },
    {
      name: 'Dr. David Wilson',
      specialization: 'Oral Surgery & Implants',
      experience: '18 years experience',
      education: 'DDS, MS Oral Surgery, Johns Hopkins',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      achievements: ['Oral Surgery Specialist', 'Implant Expert', '5000+ Successful Surgeries']
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced dental professionals are dedicated to providing you with 
            the highest quality care using the latest techniques and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 bg-background border-border overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {doctor.name}
                </h3>
                
                <p className="text-primary font-medium mb-2">
                  {doctor.specialization}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Award className="w-4 h-4 mr-2" />
                  {doctor.experience}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {doctor.education}
                </div>

                <div className="space-y-1 mb-6">
                  {doctor.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {achievement}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-primary shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book with Dr. {doctor.name.split(' ')[1]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;