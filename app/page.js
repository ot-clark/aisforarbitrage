'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentROI, setCurrentROI] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    // Simulate real-time ROI updates
    const interval = setInterval(() => {
      setCurrentROI(prev => prev + (Math.random() - 0.5) * 0.5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Gradient Hero Background */}
      <div className="absolute inset-0 -z-10 w-full h-[600px] md:h-[700px] lg:h-[800px]" style={{background: 'linear-gradient(135deg, #e94057 0%, #8a2387 100%)'}} />
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-[#e94057]">A is for</span> Arbitrage
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#e94057] transition-colors font-medium">Features</a>
              <a href="#technology" className="text-gray-600 hover:text-[#e94057] transition-colors font-medium">Technology</a>
              <a href="#contact" className="text-gray-600 hover:text-[#e94057] transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
              <span className="text-[#e94057]">A is for</span>
              <br />
              <span className="text-gray-900">Arbitrage</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              Maximize your ad spend with AI-powered arbitrage across Facebook, Google, TikTok, and more
            </p>

            {/* Live ROI Display */}
            <div className="bg-gradient-to-r from-[#dbeafe] to-[#e0e7ff] rounded-2xl p-8 mb-12 border border-[#bfdbfe] max-w-md mx-auto">
              <div className="text-sm text-gray-500 mb-2 font-medium">Live Performance</div>
              <div className="text-4xl font-bold text-[#059669] mb-2">
                {(250 + currentROI).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-500 font-medium">Average ROI</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#e94057] hover:bg-[#c72c41] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Arbitraging
              </button>
              <button className="border-2 border-gray-300 hover:border-[#e94057] text-gray-700 hover:text-[#e94057] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e94057]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Platform</h3>
              <p className="text-gray-600 font-light">Automatically arbitrage across Facebook, Google, TikTok, and 50+ ad networks</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#e0e7ff] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#3730a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered</h3>
              <p className="text-gray-600 font-light">Machine learning algorithms detect price differences and optimize bids in real-time</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#dcfce7] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Profit Maximized</h3>
              <p className="text-gray-600 font-light">Increase your ROI by 200-500% through intelligent ad arbitrage strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#f8fafc] rounded-xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-[#059669] rounded-full"></div>
                    <span className="text-gray-900 font-medium">Monitor 50+ Ad Networks</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-[#1e40af] rounded-full"></div>
                    <span className="text-gray-900 font-medium">Detect Price Differences</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-[#3730a3] rounded-full"></div>
                    <span className="text-gray-900 font-medium">Auto-Adjust Bids</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-[#7c3aed] rounded-full"></div>
                    <span className="text-gray-900 font-medium">Maximize Profits</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Smart Arbitrage</h3>
              <p className="text-gray-600 text-lg mb-8 font-light">
                Our AI continuously monitors ad prices across multiple platforms, automatically 
                buying low and selling high to maximize your advertising ROI.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e94057]">50+</div>
                  <div className="text-gray-500 font-medium">Ad Networks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3730a3]">24/7</div>
                  <div className="text-gray-500 font-medium">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Supported Platforms
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl font-bold text-[#e94057] mb-2">Facebook</div>
              <div className="text-gray-500 font-medium">Ads Manager</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">Google</div>
              <div className="text-gray-500 font-medium">Ads Platform</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl font-bold text-[#ec4899] mb-2">TikTok</div>
              <div className="text-gray-500 font-medium">Ads Manager</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl font-bold text-[#7c3aed] mb-2">50+ More</div>
              <div className="text-gray-500 font-medium">Networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join thousands of advertisers who are already maximizing their ROI with AI-powered arbitrage.
          </p>
          <button className="bg-[#e94057] hover:bg-[#c72c41] text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#e94057]">A is for</span> Arbitrage
            </div>
            <p className="text-gray-400 mb-8 font-light">
              Revolutionizing ad arbitrage with AI-powered technology
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
