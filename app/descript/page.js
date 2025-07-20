import Link from 'next/link';

export default function DescriptPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-6 relative">
                    <div className="absolute top-0 left-0 w-6 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-2 left-0 w-4 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-4 left-0 w-6 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-blue-900">descript</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Edit Videos Like a Pro—No Experience Needed
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descript lets you edit audio and video like a text doc. Join 10,000+ creators.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              🔘 Start Free With Descript
            </button>
          </div>
        </div>
      </section>

      {/* Why Descript Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              💡 Why Descript?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              &ldquo;Editing shouldn&apos;t take hours. Descript&apos;s AI cuts the work in half.&rdquo;
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transcribe audio instantly</h3>
              <p className="text-gray-600">Convert speech to text with AI-powered accuracy</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Remove filler words in one click</h3>
              <p className="text-gray-600">Clean up your content automatically</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Screen recording + podcast editing</h3>
              <p className="text-gray-600">All-in-one app for creators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Makes Descript Special?</h2>
            
            <p className="text-gray-700 mb-6">
              Descript has revolutionized the way creators approach video and audio editing. Unlike traditional editing software that requires hours of learning complex timelines and technical skills, Descript operates on a simple yet powerful principle: edit your content like you&apos;re editing a document.
            </p>
            
            <p className="text-gray-700 mb-6">
              The platform&apos;s AI-powered transcription technology automatically converts your audio and video into editable text. This means you can delete words, sentences, or entire paragraphs just by highlighting and deleting text. The corresponding audio or video is automatically adjusted, eliminating the need for precise timeline editing.
            </p>
            
            <p className="text-gray-700 mb-6">
              What truly sets Descript apart is its comprehensive suite of AI tools. The filler word removal feature automatically detects and removes &ldquo;ums,&rdquo; &ldquo;uhs,&rdquo; and other verbal crutches. The studio sound enhancement uses AI to clean up background noise and improve audio quality, making professional-grade recordings possible even with basic equipment.
            </p>
            
            <p className="text-gray-700 mb-6">
              For podcasters and video creators, Descript offers an all-in-one solution that combines screen recording, audio editing, and video production. The platform&apos;s Rooms feature allows for remote collaboration, making it easy to record interviews or co-host sessions with guests anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            📊 Compare Descript to Alternatives
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Descript ✅</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Adobe Premiere ❌</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">DaVinci Resolve ❌</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Text-based editing</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-lg">✅</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">AI filler removal</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-lg">✅</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Screen recording</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-lg">✅</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Podcast editing</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-lg">✅</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">AI voice cloning</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-lg">✅</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">❌</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Learning curve</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-lg">Easy</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">Steep</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-lg">Steep</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            🌟 Creator Testimonials
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 border border-red-100">
              <blockquote className="text-lg text-gray-700 mb-4">
                &ldquo;I went from dreading edits to loving them. Descript is a game changer!&rdquo;
              </blockquote>
              <cite className="text-sm text-gray-600 font-medium">– Sarah K., Podcaster</cite>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 border border-red-100">
              <blockquote className="text-lg text-gray-700 mb-4">
                &ldquo;My team cut our editing time by 60%. Can&apos;t recommend it enough.&rdquo;
              </blockquote>
              <cite className="text-sm text-gray-600 font-medium">– James T., YouTuber</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            📣 Start Editing Smarter Today
          </h2>
          <button className="btn-primary text-lg px-8 py-4">
            🔘 Try Descript Free Now
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            📚 FAQ
          </h2>
          
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: Is Descript free?
              </h3>
              <p className="text-gray-600">
                A: Yes! Get started with their free plan to test all core features.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: Can I use Descript for podcasts?
              </h3>
              <p className="text-gray-600">
                A: Absolutely—it's built for podcasters and video creators alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Link 
                href="/"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                ← Back to Strategic Insider
              </Link>
            </div>
      </section>
    </div>
  );
} 