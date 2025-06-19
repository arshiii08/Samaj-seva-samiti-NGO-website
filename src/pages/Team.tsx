import React from 'react';
import { Mail, Linkedin, Users, Award } from 'lucide-react';

const Team: React.FC = () => {
  const boardMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & President',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Sharma brings over 20 years of experience in community development and public health. She holds a PhD in Social Work and has previously worked with UNICEF and WHO.',
      specialization: 'Community Development, Public Health',
      email: 'priya@hopefoundation.org',
      linkedin: '#',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Co-Founder & Secretary',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'An education advocate with 15+ years in rural development. Rajesh has a Masters in Education and has implemented literacy programs across 5 states.',
      specialization: 'Education, Rural Development',
      email: 'rajesh@hopefoundation.org',
      linkedin: '#',
    },
    {
      name: 'Anjali Mehta',
      role: 'Treasurer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'A chartered accountant with expertise in non-profit financial management. Anjali ensures transparency and accountability in all our financial operations.',
      specialization: 'Financial Management, Compliance',
      email: 'anjali@hopefoundation.org',
      linkedin: '#',
    },
  ];

  const coreTeam = [
    {
      name: 'Dr. Suresh Patel',
      role: 'Program Director - Health',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading our healthcare initiatives with 12 years of experience in community health programs.',
      department: 'Healthcare',
    },
    {
      name: 'Kavita Singh',
      role: 'Program Director - Education',
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Overseeing educational programs and digital literacy initiatives across rural communities.',
      department: 'Education',
    },
    {
      name: 'Arjun Reddy',
      role: 'Field Operations Manager',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Coordinating ground-level implementation and community engagement activities.',
      department: 'Operations',
    },
    {
      name: 'Ritu Agarwal',
      role: 'Communications Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing our outreach, media relations, and digital communication strategies.',
      department: 'Communications',
    },
    {
      name: 'Vikram Joshi',
      role: 'Partnerships Coordinator',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Building strategic partnerships with corporations, government, and other NGOs.',
      department: 'Partnerships',
    },
    {
      name: 'Neha Gupta',
      role: 'Volunteer Coordinator',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing volunteer programs and community engagement initiatives.',
      department: 'Volunteer Management',
    },
  ];

  const stats = [
    { icon: Users, label: 'Core Team Members', value: '25+' },
    { icon: Users, label: 'Active Volunteers', value: '200+' },
    { icon: Award, label: 'Years Combined Experience', value: '150+' },
    { icon: Users, label: 'Board Members', value: '8' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl leading-relaxed">
            Meet the dedicated individuals who make our mission possible through their expertise, passion, and commitment.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs font-medium text-gray-700">Specialization:</p>
                    <p className="text-sm text-primary-600">{member.specialization}</p>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="p-2 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <span className="text-xs bg-accent-100 text-accent-800 px-2 py-1 rounded-full">
                      {member.department}
                    </span>
                  </div>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 text-white/90">
            Are you passionate about creating positive change? We're always looking for dedicated individuals 
            to join our mission as volunteers, interns, or team members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Volunteer With Us
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Career Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;