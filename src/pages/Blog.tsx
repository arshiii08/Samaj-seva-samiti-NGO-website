import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'impact-stories', name: 'Impact Stories', count: 5 },
    { id: 'updates', name: 'Updates', count: 3 },
    { id: 'events', name: 'Events', count: 4 },
  ];

  const featuredPost = {
    title: 'Transforming Rural Education Through Technology',
    excerpt: 'How our Digital Learning Centers are revolutionizing education in remote villages across Maharashtra and Gujarat, bringing quality learning opportunities to over 2,500 students.',
    image: 'https://images.pexels.com/photos/8926509/pexels-photo-8926509.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Priya Sharma',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Impact Stories',
    tags: ['Education', 'Technology', 'Rural Development'],
  };

  const blogPosts = [
    {
      title: 'Women Entrepreneurs Program: Success Stories from Rajasthan',
      excerpt: 'Meet three remarkable women who transformed their lives through our skill development and microfinance support program.',
      image: 'https://images.pexels.com/photos/8092532/pexels-photo-8092532.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Kavita Singh',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Impact Stories',
      tags: ['Women Empowerment', 'Entrepreneurship'],
    },
    {
      title: 'Annual Report 2023: A Year of Impact and Growth',
      excerpt: 'Reflecting on our achievements in 2023 - from reaching 50,000+ beneficiaries to launching new initiatives across 5 states.',
      image: 'https://images.pexels.com/photos/6646970/pexels-photo-6646970.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Rajesh Kumar',
      date: 'March 5, 2024',
      readTime: '12 min read',
      category: 'Updates',
      tags: ['Annual Report', 'Impact', 'Growth'],
    },
    {
      title: 'Community Health Camps: Bringing Healthcare to Remote Areas',
      excerpt: 'Our mobile health clinics have provided over 12,000 consultations in tribal areas of Odisha, addressing critical healthcare needs.',
      image: 'https://images.pexels.com/photos/7615443/pexels-photo-7615443.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Suresh Patel',
      date: 'February 28, 2024',
      readTime: '5 min read',
      category: 'Impact Stories',
      tags: ['Healthcare', 'Mobile Clinics', 'Rural Health'],
    },
    {
      title: 'Volunteer Appreciation Day 2024: Celebrating Our Heroes',
      excerpt: 'Honoring the 200+ volunteers who make our work possible through their dedication and passion for social change.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Neha Gupta',
      date: 'February 20, 2024',
      readTime: '4 min read',
      category: 'Events',
      tags: ['Volunteers', 'Appreciation', 'Community'],
    },
    {
      title: 'Clean Water Initiative: 25 Villages Transformed',
      excerpt: 'The completion of our water purification project in Uttar Pradesh has brought clean drinking water to 10,000 villagers.',
      image: 'https://images.pexels.com/photos/6647033/pexels-photo-6647033.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Arjun Reddy',
      date: 'February 15, 2024',
      readTime: '7 min read',
      category: 'Impact Stories',
      tags: ['Clean Water', 'Sanitation', 'Village Development'],
    },
    {
      title: 'Partnership Announcement: Collaborating for Greater Impact',
      excerpt: 'We are excited to announce new partnerships with leading corporations and NGOs to expand our reach and effectiveness.',
      image: 'https://images.pexels.com/photos/8926787/pexels-photo-8926787.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Vikram Joshi',
      date: 'February 10, 2024',
      readTime: '3 min read',
      category: 'Updates',
      tags: ['Partnerships', 'Collaboration', 'Growth'],
    },
  ];

  const upcomingEvents = [
    {
      title: 'Annual Fundraising Gala',
      date: 'April 15, 2024',
      location: 'Mumbai',
      description: 'Join us for an evening of inspiration and impact.',
    },
    {
      title: 'Volunteer Training Workshop',
      date: 'April 20, 2024',
      location: 'Delhi',
      description: 'Training session for new volunteers.',
    },
    {
      title: 'Community Health Camp',
      date: 'April 25, 2024',
      location: 'Rural Odisha',
      description: 'Free health check-ups and medical consultations.',
    },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().replace(' ', '-') === activeCategory);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl leading-relaxed">
            Stay updated with our latest initiatives, impact stories, and community events that are creating positive change.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Story</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-w-16 aspect-h-12 lg:aspect-h-16">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-6">
                    <User className="w-4 h-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center group w-fit">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts with Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filter */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-primary-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="bg-accent-100 text-accent-600 px-2 py-1 rounded text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                        <a href="#" className="line-clamp-2">{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-4">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center group"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
                  <div className="space-y-6">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-l-4 border-primary-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{event.location}</div>
                        <p className="text-sm text-gray-600">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-6 text-white/90">
                    Subscribe to our newsletter for the latest updates on our programs and impact stories.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    />
                    <button className="w-full bg-white text-primary-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Education', 'Healthcare', 'Women Empowerment', 'Rural Development', 'Technology', 'Impact Stories', 'Volunteers', 'Partnerships'].map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;