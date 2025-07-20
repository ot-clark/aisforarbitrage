import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Strategic Insider - Innovative Tech & AI Products',
  description: 'Discover the latest innovative products in tech and AI. Strategic insights for forward-thinking creators and entrepreneurs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#f0abfc] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f0abfc] to-[#e091e8]"></div>
                  <div className="relative z-10">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="11" cy="11" r="3" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900">Strategic Insider</span>
              </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-[#f0abfc] font-medium transition-colors">Home</Link>
                <Link href="/blog" className="text-gray-600 hover:text-[#f0abfc] font-medium transition-colors">Blog</Link>
                <Link href="/about" className="text-gray-600 hover:text-[#f0abfc] font-medium transition-colors">About</Link>
              </nav>
              <div className="md:hidden">
                <button className="text-gray-600 hover:text-[#f0abfc]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>
        {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-100 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-[#f0abfc] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f0abfc] to-[#e091e8]"></div>
                  <div className="relative z-10">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="11" cy="11" r="3" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">Strategic Insider</span>
              </div>
              <p className="text-gray-600">Discovering innovative products in tech and AI</p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="/privacy" className="text-gray-500 hover:text-[#f0abfc]">Privacy</a>
                <a href="/terms" className="text-gray-500 hover:text-[#f0abfc]">Terms</a>
                <a href="/contact" className="text-gray-500 hover:text-[#f0abfc]">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
