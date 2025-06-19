import React from 'react';
import { Download, Shield, TrendingUp, PieChart, FileText, CheckCircle } from 'lucide-react';

const Financial: React.FC = () => {
  const reports = [
    {
      title: 'Annual Report 2023',
      description: 'Comprehensive overview of our activities, achievements, and financial statements for the year 2023.',
      size: '2.5 MB',
      type: 'PDF',
      date: 'March 2024',
      icon: '📊',
    },
    {
      title: 'Audit Report 2023',
      description: 'Independent audit report conducted by M/s. Chartered Accountants for financial year 2022-23.',
      size: '1.2 MB',
      type: 'PDF',
      date: 'April 2024',
      icon: '🔍',
    },
    {
      title: 'Impact Assessment 2023',
      description: 'Detailed analysis of program outcomes and beneficiary impact across all our initiatives.',
      size: '1.8 MB',
      type: 'PDF',
      date: 'February 2024',
      icon: '📈',
    },
    {
      title: '80G Tax Exemption Certificate',
      description: 'Official certificate for tax exemption benefits available to all donors.',
      size: '0.5 MB',
      type: 'PDF',
      date: 'Valid till 2026',
      icon: '📋',
    },
    {
      title: 'FCRA Registration Certificate',
      description: 'Foreign Contribution Regulation Act registration certificate.',
      size: '0.3 MB',
      type: 'PDF',
      date: 'Valid till 2025',
      icon: '🌐',
    },
    {
      title: 'Financial Summary Q4 2023',
      description: 'Quarterly financial summary showing income, expenditure, and project allocations.',
      size: '0.8 MB',
      type: 'PDF',
      date: 'January 2024',
      icon: '💰',
    },
  ];

  const expenditure = [
    { category: 'Program Activities', percentage: 75, amount: '₹45,00,000', color: 'bg-primary-500' },
    { category: 'Administrative Costs', percentage: 15, amount: '₹9,00,000', color: 'bg-accent-500' },
    { category: 'Fundraising', percentage: 7, amount: '₹4,20,000', color: 'bg-green-500' },
    { category: 'Reserves', percentage: 3, amount: '₹1,80,000', color: 'bg-blue-500' },
  ];

  const certifications = [
    {
      title: '80G Registration',
      description: 'Tax exemption certificate under Income Tax Act',
      status: 'Valid',
      expiry: '2026',
      icon: Shield,
    },
    {
      title: '12A Registration',
      description: 'Income tax exemption for the organization',
      status: 'Valid',
      expiry: 'Permanent',
      icon: CheckCircle,
    },
    {
      title: 'FCRA License',
      description: 'Foreign Contribution Regulation Act compliance',
      status: 'Valid',
      expiry: '2025',
      icon: FileText,
    },
    {
      title: 'Trust Registration',
      description: 'Registered as a Public Charitable Trust',
      status: 'Valid',
      expiry: 'Permanent',
      icon: TrendingUp,
    },
  ];

  const transparency = [
    'All financial records are audited annually by independent chartered accountants',
    'Regular board meetings are conducted with detailed financial reviews',
    'Quarterly impact reports are shared with donors and stakeholders',
    'Real-time project tracking and expenditure monitoring systems',
    'Public disclosure of all major donations and expenditures',
    'Compliance with all regulatory requirements and filing obligations',
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Financial Transparency</h1>
          <p className="text-xl leading-relaxed">
            We believe in complete transparency and accountability in our financial operations. 
            Access our reports, certifications, and learn how your contributions create impact.
          </p>
        </div>
      </section>

      {/* Expenditure Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How We Use Your Donations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fund Allocation 2023</h3>
                {expenditure.map((item, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{item.category}</span>
                      <span className="text-sm text-gray-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className={`h-3 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm font-semibold text-gray-700">
                      {item.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <PieChart className="w-16 h-16 text-primary-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Program-First Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  75% of every rupee donated goes directly to program activities, ensuring maximum impact 
                  for the communities we serve. We maintain minimal administrative costs while ensuring 
                  efficient operations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">₹60L</div>
                  <div className="text-gray-600">Total Funds 2023</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">50K+</div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Reports & Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{report.icon}</div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {report.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{report.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{report.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                  </div>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Legal Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <cert.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600 font-medium text-sm">{cert.status}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Valid till: {cert.expiry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Commitments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Transparency Commitments</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 gap-6">
              {transparency.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Financial Queries */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Have Financial Questions?</h2>
          <p className="text-xl mb-8 text-white/90">
            Our finance team is available to answer any questions about our financial operations, 
            donation usage, or impact measurement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Finance Team
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financial;