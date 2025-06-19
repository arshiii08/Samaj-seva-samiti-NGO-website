import React, { useState } from 'react';
import { Heart, Users, DollarSign, Briefcase, QrCode, CreditCard, Building } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'volunteer' | 'donate'>('volunteer');
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    skills: '',
    availability: '',
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', volunteerForm);
    // Handle form submission
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      reason: '',
      skills: '',
      availability: '',
    });
  };

  const ways = [
    {
      icon: Heart,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and make a direct impact in communities.',
      action: 'Sign Up',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: DollarSign,
      title: 'Donate',
      description: 'Support our programs with financial contributions that create lasting change.',
      action: 'Donate Now',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Briefcase,
      title: 'Sponsor',
      description: 'Partner with us to sponsor specific projects or events in your community.',
      action: 'Partner',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Users,
      title: 'Internships',
      description: 'Gain valuable experience while contributing to meaningful social work.',
      action: 'Apply',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const donationOptions = [
    { amount: '₹500', description: 'Provides school supplies for 5 children' },
    { amount: '₹1,000', description: 'Funds a health check-up for 10 people' },
    { amount: '₹2,500', description: 'Sponsors a woman entrepreneur for 1 month' },
    { amount: '₹5,000', description: 'Sets up a water purification unit' },
    { amount: '₹10,000', description: 'Funds digital learning tools for a classroom' },
    { amount: 'Custom', description: 'Choose your own amount' },
  ];

  const sponsorshipTiers = [
    {
      title: 'Education Sponsor',
      amount: '₹25,000/year',
      benefits: [
        'Sponsor education for 10 children',
        'Regular progress reports',
        'Certificate of appreciation',
        'Social media recognition',
      ],
    },
    {
      title: 'Healthcare Sponsor',
      amount: '₹50,000/year',
      benefits: [
        'Fund a mobile health clinic for 1 month',
        'Healthcare camp in your honor',
        'Quarterly impact reports',
        'Visit opportunities to projects',
      ],
    },
    {
      title: 'Community Sponsor',
      amount: '₹1,00,000/year',
      benefits: [
        'Adopt a complete village program',
        'Project naming opportunities',
        'Annual sponsor appreciation event',
        'Detailed impact assessment',
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl leading-relaxed">
            There are many ways to support our mission and create positive change in communities across India.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-16">Ways to Make a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ways.map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 rounded-full ${way.color} flex items-center justify-center mx-auto mb-4`}>
                  <way.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-purple-500 mb-3">{way.title}</h3>
                <p className="text-dark-text mb-6 leading-relaxed">{way.description}</p>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors font-semibold">
                  {way.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Donation Forms */}
      <section className="py-20 bg-soft-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-lg shadow-md">
              <button
                onClick={() => setActiveForm('volunteer')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeForm === 'volunteer'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-dark-text hover:text-primary-600'
                }`}
              >
                Volunteer Registration
              </button>
              <button
                onClick={() => setActiveForm('donate')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeForm === 'donate'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-dark-text hover:text-primary-600'
                }`}
              >
                Donation Options
              </button>
            </div>
          </div>

          {/* Volunteer Form */}
          {activeForm === 'volunteer' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-purple-500 mb-6 text-center">Join Our Volunteer Team</h3>
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">Why do you want to volunteer? *</label>
                    <textarea
                      required
                      rows={4}
                      value={volunteerForm.reason}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, reason: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">Skills & Experience</label>
                    <textarea
                      rows={3}
                      value={volunteerForm.skills}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, skills: e.target.value })}
                      placeholder="Tell us about relevant skills, experience, or interests..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">Availability</label>
                    <select
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select your availability</option>
                      <option value="weekends">Weekends only</option>
                      <option value="weekdays">Weekdays only</option>
                      <option value="flexible">Flexible schedule</option>
                      <option value="events">Events only</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Donation Options */}
          {activeForm === 'donate' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donationOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">{option.amount}</h3>
                      <p className="text-dark-text mb-4">{option.description}</p>
                      <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors">
                        Donate {option.amount !== 'Custom' ? option.amount : ''}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-purple-500 mb-6 text-center">Payment Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">UPI Payment</h4>
                    <p className="text-dark-text mb-4">Quick and secure UPI payments</p>
                    <p className="text-sm text-gray-500">UPI ID: donate@hopefoundation</p>
                  </div>
                  <div className="text-center">
                    <CreditCard className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Online Payment</h4>
                    <p className="text-dark-text mb-4">Credit/Debit cards, Net banking</p>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg">Pay Online</button>
                  </div>
                  <div className="text-center">
                    <Building className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Bank Transfer</h4>
                    <p className="text-dark-text mb-4">Direct bank account transfer</p>
                    <div className="text-sm text-gray-500">
                      <p>A/C: 1234567890</p>
                      <p>IFSC: SBIN0001234</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-16">Corporate Sponsorship</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                  <p className="text-2xl font-bold">{tier.amount}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-primary-500 mr-2">✓</span>
                        <span className="text-dark-text">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Become a Sponsor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Tax Benefits</h2>
          <p className="text-xl mb-8 text-white/90">
            All donations to Hope Foundation are eligible for tax deduction under Section 80G of the Income Tax Act.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">80G Certificate</h3>
              <p className="text-white/90">50% tax deduction on donations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Receipt Provided</h3>
              <p className="text-white/90">Official donation receipt for tax filing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;