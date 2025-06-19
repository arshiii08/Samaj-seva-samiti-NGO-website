import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Hope Foundation',
        '123 Hope Street, Andheri West',
        'Mumbai, Maharashtra 400058',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 98765 43210',
        '+91 22 2673 4567',
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@hopefoundation.org',
        'volunteer@hopefoundation.org',
        'donate@hopefoundation.org',
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'hover:text-red-600' },
  ];

  const officeLocations = [
    {
      city: 'Mumbai (Head Office)',
      address: '123 Hope Street, Andheri West, Mumbai - 400058',
      phone: '+91 98765 43210',
      email: 'mumbai@hopefoundation.org',
    },
    {
      city: 'Delhi',
      address: '456 Service Lane, Karol Bagh, New Delhi - 110005',
      phone: '+91 98765 43211',
      email: 'delhi@hopefoundation.org',
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Whitefield, Bangalore - 560066',
      phone: '+91 98765 43212',
      email: 'bangalore@hopefoundation.org',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl leading-relaxed">
            Get in touch with us to learn more about our work, volunteer opportunities, or how you can support our mission.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-purple-500 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">Subject *</label>
                  <select
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="media">Media Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-purple-500 mb-8">Get in Touch</h2>
                <p className="text-dark-text mb-8 leading-relaxed">
                  We'd love to hear from you! Whether you have questions about our programs, 
                  want to volunteer, or are interested in partnering with us, don't hesitate to reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-500 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-dark-text text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-purple-500 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-light-purple-500 rounded-lg text-dark-text ${social.color} transition-colors`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-soft-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-16">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-purple-500 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <p className="text-dark-text text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <p className="text-dark-text text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <p className="text-dark-text text-sm">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-16">Find Us</h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Google Maps integration would be placed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-gradient-to-r from-purple-500 to-accent-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 text-white/90">
            For urgent matters or emergency situations, please contact our 24/7 helpline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-purple-500 hover:bg-light-text px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </a>
            <a
              href="mailto:emergency@hopefoundation.org"
              className="border-2 border-white hover:bg-white hover:text-purple-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Emergency Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;