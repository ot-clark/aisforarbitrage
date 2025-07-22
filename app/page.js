'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "Edit Videos Like a Pro—No Experience Needed",
      excerpt: "Descript lets you edit audio and video like a text doc. Join 10,000+ creators.",
      category: "AI Tools",
      date: "Jul 20, 2025",
      readTime: "5 min read",
      slug: "descript",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0abfc] to-[#1dddbf] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8">
              Strategic
              <span className="text-red-100 block">Insider</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-4xl mx-auto font-light">
              Discover innovative products in tech and AI that are reshaping industries and creating new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-[#f0abfc] hover:bg-[#f8d4fd] text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Latest Posts
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#f0abfc] text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Post</h2>
            <div className="bg-gradient-to-r from-[#f8d4fd] to-white rounded-2xl p-8 border border-[#f0abfc]">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#f8d4fd] text-[#e091e8] px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                                      <a 
                      href={`/${blogPosts[0].slug}`}
                      className="bg-[#f0abfc] hover:bg-[#e091e8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                    >
                      Read Full Article
                    </a>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-xl h-64 flex items-center justify-center border border-gray-200">
                    <div className="flex items-center space-x-3 justify-center">
                      <img src="/descript-logo.png" alt="Descript company logo" style={{ width: '250px', maxWidth: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Post</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#f8d4fd] text-[#e091e8] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <a 
                      href={`/${post.slug}`}
                      className="text-[#f0abfc] hover:text-[#e091e8] font-medium"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Strategic Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest innovative product reviews and tech insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0abfc] focus:border-transparent"
            />
            <button className="bg-[#f0abfc] hover:bg-[#e091e8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
