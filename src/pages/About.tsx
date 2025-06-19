import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every initiative with empathy and genuine care for those we serve.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of community and work together to achieve common goals.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We focus on creating measurable, sustainable change that transforms lives.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We maintain complete transparency in our operations and financial management.',
    },
  ];

  const founders = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & President',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Sharma is a social entrepreneur with 20+ years of experience in community development and healthcare.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Co-Founder & Secretary',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'An education advocate who has dedicated his life to improving literacy rates in rural communities.',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Hope Foundation</h1>
          <p className="text-xl leading-relaxed">
            Since 2010, we've been committed to creating sustainable change through community-driven initiatives 
            in education, healthcare, and social empowerment.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary-500 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-500">Our Mission</h2>
                </div>
                <p className="text-lg text-dark-text leading-relaxed">
                  To empower underprivileged communities by providing access to quality education, healthcare, 
                  and sustainable livelihood opportunities, fostering self-reliance and dignity.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-accent-500 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-500">Our Vision</h2>
                </div>
                <p className="text-lg text-dark-text leading-relaxed">
                  A world where every individual has equal opportunities to thrive, regardless of their 
                  socio-economic background, and where communities are empowered to create their own solutions.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646970/pexels-photo-6646970.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community gathering"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-soft-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">Our Story</h2>
          <div className="prose prose-lg mx-auto text-dark-text">
            <p className="text-xl leading-relaxed mb-6">
              Hope Foundation was born from a simple yet powerful belief: that every person deserves the opportunity 
              to lead a dignified and fulfilling life. Founded in 2010 by Dr. Priya Sharma and Rajesh Kumar, 
              our organization started with a small education program in rural Maharashtra.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What began as a grassroots initiative to provide basic literacy to children has grown into a 
              comprehensive development organization serving over 25 communities across India. Our approach 
              has always been community-centric, believing that sustainable change comes from within.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Hope Foundation operates multiple programs spanning education, healthcare, women's empowerment, 
              and skill development. We've impacted over 50,000 lives and continue to expand our reach while 
              maintaining our core values of transparency, compassion, and community collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-500 mb-3">{value.title}</h3>
                <p className="text-dark-text leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-soft-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-16">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-purple-500 mb-2">{founder.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{founder.role}</p>
                  <p className="text-dark-text leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Registration & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">80G Certification</h3>
              <p className="text-white/90">Tax exemption for donors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">12A Registration</h3>
              <p className="text-white/90">Income tax exemption</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">FCRA License</h3>
              <p className="text-white/90">Foreign contribution acceptance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;