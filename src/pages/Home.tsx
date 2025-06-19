import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Globe, Award } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '50,000+' },
    { icon: Heart, label: 'Projects Completed', value: '200+' },
    { icon: Globe, label: 'Communities Served', value: '25+' },
    { icon: Award, label: 'Years of Service', value: '14+' },
  ];

  const causes = [
    {
      title: 'Education',
      description: 'Providing quality education and learning opportunities to underprivileged children.',
      image: 'https://images.pexels.com/photos/8926509/pexels-photo-8926509.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Healthcare',
      description: 'Ensuring access to basic healthcare services and medical support.',
      image: 'https://images.pexels.com/photos/7615443/pexels-photo-7615443.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Women Empowerment',
      description: 'Empowering women through skill development and entrepreneurship programs.',
      image: 'https://images.pexels.com/photos/8092532/pexels-photo-8092532.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Creating Hope,
                <span className="text-accent-500"> Changing Lives</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Join us in our mission to make a positive impact in communities across India. 
                Together, we can create sustainable change through education, healthcare, and empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-involved"
                  className="bg-accent-500 hover:bg-accent-600 text-dark-text px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
                >
                  Get Involved
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="border-2 border-white hover:bg-white hover:text-purple-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children in community"
                className="rounded-2xl shadow-2xl animate-pulse-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-soft-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-500 mb-2">{stat.value}</div>
                <div className="text-dark-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Causes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-500 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-dark-text max-w-3xl mx-auto">
              We work across multiple sectors to create comprehensive and lasting change in the communities we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-500 mb-3">{cause.title}</h3>
                  <p className="text-dark-text leading-relaxed">{cause.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-white/90">
            Every contribution, big or small, helps us continue our mission of creating positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white text-purple-500 hover:bg-light-text px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-white hover:bg-white hover:text-purple-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;