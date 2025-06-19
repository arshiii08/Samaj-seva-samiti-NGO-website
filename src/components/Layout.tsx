import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Media', href: '/media' },
    { name: 'Team', href: '/team' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Financial', href: '/financial' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-purple-500">Samaj Seva Samiti</h1>
                <p className="text-sm text-dark-text">Himachal Pradesh</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary-500 text-white'
                        : 'text-dark-text hover:bg-accent-100 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-dark-text hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-500 text-white'
                      : 'text-dark-text hover:bg-accent-100 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-purple-500 text-light-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold">Samaj Seva Samiti</h3>
              </div>
              <p className="text-light-text/80 mb-4">
                Dedicated to creating positive change in communities worldwide through education, healthcare, and empowerment initiatives.
              </p>
              <div className="space-y-2 text-sm text-light-text/70">
                <p>Established: 2010</p>
                <p>Registration: 80G, 12A, FCRA</p>
                <p>Type: Public Trust</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-light-text/80 hover:text-accent-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-light-text/80">
                <p>Bangana, Himachal Pradesh</p>
                <p>+91 98765 43210</p>
                <p>info@hopefoundation.org</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-400 mt-8 pt-8 text-center text-light-text/70">
            <p>&copy; 2025 Samaj Seva Samiti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;