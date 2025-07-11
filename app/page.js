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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-white">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            A is for Arbitrage
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#technology" className="text-gray-300 hover:text-white transition-colors">Technology</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              A is for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Arbitrage
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Maximize your ad spend with AI-powered arbitrage across Facebook, Google, TikTok, and more
          </p>

          {/* Live ROI Display */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
            <div className="text-sm text-gray-400 mb-2">Live Performance</div>
            <div className="text-3xl font-mono text-green-400">
              {(250 + currentROI).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-400">Average ROI</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Arbitraging
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Platform</h3>
              <p className="text-gray-300">Automatically arbitrage across Facebook, Google, TikTok, and 50+ ad networks</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">Machine learning algorithms detect price differences and optimize bids in real-time</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Profit Maximized</h3>
              <p className="text-gray-300">Increase your ROI by 200-500% through intelligent ad arbitrage strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono">Monitor 50+ Ad Networks</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono">Detect Price Differences</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono">Auto-Adjust Bids</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono">Maximize Profits</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-6">Smart Arbitrage</h3>
              <p className="text-gray-300 text-lg mb-6">
                Our AI continuously monitors ad prices across multiple platforms, automatically 
                buying low and selling high to maximize your advertising ROI.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">50+</div>
                  <div className="text-gray-400">Ad Networks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-400">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Supported Platforms
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Facebook</div>
              <div className="text-gray-400 text-sm">Ads Manager</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Google</div>
              <div className="text-gray-400 text-sm">Ads Platform</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-2">TikTok</div>
              <div className="text-gray-400 text-sm">Ads Manager</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">50+ More</div>
              <div className="text-gray-400 text-sm">Networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Maximize ROI?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start arbitraging your ad spend across multiple platforms today
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-6 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105">
            Start Arbitraging Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              A is for Arbitrage
            </span>
          </div>
          <p className="text-gray-400 mb-6">AI-powered ad arbitrage platform</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
