import React, { useState } from 'react';
import { Play, Download, Calendar, Image as ImageIcon } from 'lucide-react';

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'videos' | 'documents'>('gallery');

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Education Program Launch',
      date: 'March 2024',
      location: 'Rural Maharashtra',
    },
    {
      url: 'https://images.pexels.com/photos/8926509/pexels-photo-8926509.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Digital Learning Initiative',
      date: 'February 2024',
      location: 'Gujarat',
    },
    {
      url: 'https://images.pexels.com/photos/6646970/pexels-photo-6646970.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Health Camp',
      date: 'January 2024',
      location: 'Odisha',
    },
    {
      url: 'https://images.pexels.com/photos/8092532/pexels-photo-8092532.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Women Empowerment Workshop',
      date: 'December 2023',
      location: 'Rajasthan',
    },
    {
      url: 'https://images.pexels.com/photos/7615443/pexels-photo-7615443.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mobile Health Clinic',
      date: 'November 2023',
      location: 'Tribal Areas',
    },
    {
      url: 'https://images.pexels.com/photos/6647033/pexels-photo-6647033.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Clean Water Project',
      date: 'October 2023',
      location: 'Uttar Pradesh',
    },
  ];

  const videos = [
    {
      thumbnail: 'https://images.pexels.com/photos/8926509/pexels-photo-8926509.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Hope Foundation - Year in Review 2023',
      duration: '5:32',
      description: 'A comprehensive look at our achievements and impact in 2023.',
    },
    {
      thumbnail: 'https://images.pexels.com/photos/6646970/pexels-photo-6646970.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Digital Learning Centers - Transforming Education',
      duration: '3:45',
      description: 'See how technology is revolutionizing education in rural schools.',
    },
    {
      thumbnail: 'https://images.pexels.com/photos/8092532/pexels-photo-8092532.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Empowering Women Entrepreneurs',
      duration: '4:18',
      description: 'Stories of women who transformed their lives through our programs.',
    },
  ];

  const documents = [
    {
      title: 'Annual Report 2023',
      type: 'PDF',
      size: '2.5 MB',
      description: 'Comprehensive overview of our activities and financial statements.',
      icon: '📄',
    },
    {
      title: 'Impact Assessment Report',
      type: 'PDF',
      size: '1.8 MB',
      description: 'Detailed analysis of our program outcomes and beneficiary feedback.',
      icon: '📊',
    },
    {
      title: '80G Tax Exemption Certificate',
      type: 'PDF',
      size: '0.5 MB',
      description: 'Official certification for tax exemption benefits to donors.',
      icon: '📋',
    },
    {
      title: 'Project Brochure 2024',
      type: 'PDF',
      size: '3.2 MB',
      description: 'Overview of our current and upcoming project initiatives.',
      icon: '📖',
    },
    {
      title: 'Audit Report 2023',
      type: 'PDF',
      size: '1.2 MB',
      description: 'Independent audit report ensuring financial transparency.',
      icon: '🔍',
    },
  ];

  const testimonials = [
    {
      quote: "Hope Foundation has transformed our village. The digital learning center has opened new opportunities for our children's future.",
      author: "Sita Devi",
      role: "Village Head, Maharashtra",
      image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      quote: "Through their women empowerment program, I was able to start my own tailoring business and support my family independently.",
      author: "Meera Shah",
      role: "Beneficiary, Rajasthan",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      quote: "The mobile health clinic has been a blessing for our remote community. Healthcare is now accessible to everyone.",
      author: "Dr. Amit Patel",
      role: "Community Health Worker",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Media & Gallery</h1>
          <p className="text-xl leading-relaxed">
            Explore our journey through photos, videos, and stories that capture the impact of our work.
          </p>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              {[
                { key: 'gallery', label: 'Photo Gallery', icon: ImageIcon },
                { key: 'videos', label: 'Videos', icon: Play },
                { key: 'documents', label: 'Documents', icon: Download },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                    activeTab === tab.key
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{image.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{image.location}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                        <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Documents */}
          {activeTab === 'documents' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{doc.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded mr-2">{doc.type}</span>
                          <span>{doc.size}</span>
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center text-sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;