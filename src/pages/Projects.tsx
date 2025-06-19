import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'completed' | 'upcoming'>('current');

  const currentProjects = [
    {
      title: 'Digital Learning Centers',
      location: 'Maharashtra & Gujarat',
      description: 'Establishing computer labs and digital literacy programs in rural schools.',
      image: 'https://images.pexels.com/photos/8926509/pexels-photo-8926509.jpeg?auto=compress&cs=tinysrgb&w=600',
      beneficiaries: '2,500 students',
      duration: 'Jan 2024 - Dec 2024',
      impact: '15 schools equipped with digital infrastructure',
    },
    {
      title: 'Women Entrepreneurs Program',
      location: 'Rajasthan',
      description: 'Skill development and microfinance support for women-led businesses.',
      image: 'https://images.pexels.com/photos/8092532/pexels-photo-8092532.jpeg?auto=compress&cs=tinysrgb&w=600',
      beneficiaries: '800 women',
      duration: 'Mar 2024 - Feb 2025',
      impact: '200 new businesses established',
    },
    {
      title: 'Mobile Health Clinics',
      location: 'Odisha',
      description: 'Providing primary healthcare services to remote tribal communities.',
      image: 'https://images.pexels.com/photos/7615443/pexels-photo-7615443.jpeg?auto=compress&cs=tinysrgb&w=600',
      beneficiaries: '5,000 people',
      duration: 'Ongoing since 2023',
      impact: '12,000+ consultations provided',
    },
  ];

  const completedProjects = [
    {
      title: 'Clean Water Initiative',
      location: 'Uttar Pradesh',
      description: 'Installation of water purification systems and sanitation facilities.',
      image: 'https://images.pexels.com/photos/6647033/pexels-photo-6647033.jpeg?auto=compress&cs=tinysrgb&w=600',
      beneficiaries: '10,000 villagers',
      duration: 'Jan 2022 - Dec 2023',
      impact: '25 villages with clean water access',
    },
    {
      title: 'Adult Literacy Campaign',
      location: 'Bihar',
      description: 'Teaching basic reading, writing, and numeracy skills to adults.',
      image: 'https://images.pexels.com/photos/8926787/pexels-photo-8926787.jpeg?auto=compress&cs=tinysrgb&w=600',
      beneficiaries: '3,000 adults',
      duration: 'Sep 2021 - Aug 2023',
      impact: '85% literacy achievement rate',
    },
  ];

  const upcomingProjects = [
    {
      title: 'Solar Energy for Schools',
      location: 'Tamil Nadu',
      description: 'Installing solar panels and energy-efficient systems in rural schools.',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600',
      beneficiaries: '4,000 students',
      duration: 'Apr 2024 - Mar 2025',
      impact: '30 schools to become energy sustainable',
    },
    {
      title: 'Elderly Care Program',
      location: 'Kerala',
      description: 'Comprehensive healthcare and social support for senior citizens.',
      image: 'https://images.pexels.com/photos/7551656/pexels-photo-7551656.jpeg?auto=compress&cs=tinysrgb&w=600',
      beneficiaries: '1,200 seniors',
      duration: 'Jun 2024 - May 2026',
      impact: 'Improved quality of life for elderly',
    },
  ];

  const getProjects = () => {
    switch (activeTab) {
      case 'current':
        return currentProjects;
      case 'completed':
        return completedProjects;
      case 'upcoming':
        return upcomingProjects;
      default:
        return currentProjects;
    }
  };

  const causes = [
    { name: 'Education', color: 'bg-blue-100 text-blue-800' },
    { name: 'Healthcare', color: 'bg-green-100 text-green-800' },
    { name: 'Women Empowerment', color: 'bg-purple-100 text-purple-800' },
    { name: 'Environment', color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Water & Sanitation', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Skill Development', color: 'bg-amber-100 text-amber-800' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl leading-relaxed">
            Discover the impactful initiatives we're working on to create positive change in communities across India.
          </p>
        </div>
      </section>

      {/* Causes We Support */}
      <section className="py-16 bg-soft-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-500 mb-12">Causes We Support</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {causes.map((cause, index) => (
              <span
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-semibold ${cause.color}`}
              >
                {cause.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-light-purple-500 p-1 rounded-lg">
              {[
                { key: 'current', label: 'Current Projects' },
                { key: 'completed', label: 'Completed' },
                { key: 'upcoming', label: 'Upcoming' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'text-dark-text hover:text-primary-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjects().map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-500 mb-2">{project.title}</h3>
                  <div className="flex items-center text-dark-text mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-dark-text mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-dark-text">
                      <Users className="w-4 h-4 mr-2 text-primary-500" />
                      <span>{project.beneficiaries}</span>
                    </div>
                    <div className="flex items-center text-sm text-dark-text">
                      <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="bg-accent-100 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-dark-text">Impact: {project.impact}</p>
                  </div>
                  
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Want to Support Our Projects?</h2>
          <p className="text-xl mb-8 text-white/90">
            Your contribution can help us expand our impact and reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-500 hover:bg-light-text px-8 py-4 rounded-lg font-semibold transition-colors">
              Donate to Projects
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-purple-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;