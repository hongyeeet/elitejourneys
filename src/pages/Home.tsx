import { Link } from 'react-router-dom';
import { Sparkles, Globe, Shield, Clock, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6 inline-block">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Luxury Travel Redefined</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
              Your Journey
            </span>
            <br />
            <span className="text-white">Begins Here</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the world's most extraordinary destinations with unparalleled luxury,
            personalized service, and memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/destinations"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Explore Destinations
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-[#D4AF37] hover:bg-white/10 transition-all duration-300"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-[#D4AF37]">Elite Journeys</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We transform your travel dreams into extraordinary experiences with our signature luxury service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Worldwide Coverage',
                description: 'Access to 150+ destinations with exclusive partnerships at the world\'s finest hotels and resorts.'
              },
              {
                icon: Shield,
                title: 'Complete Protection',
                description: 'Comprehensive travel insurance and 24/7 support ensuring your peace of mind throughout your journey.'
              },
              {
                icon: Clock,
                title: 'Concierge Service',
                description: 'Personal travel consultants available around the clock to handle every detail of your luxury experience.'
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Only the finest accommodations, transportation, and experiences that meet our exacting standards.'
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Veteran travel specialists with decades of experience crafting unforgettable journeys.'
              },
              {
                icon: Sparkles,
                title: 'Tailored Experiences',
                description: 'Every itinerary is completely customized to your preferences, interests, and travel style.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl hover:border-[#D4AF37] transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-[#0A0A0A] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your <span className="text-[#D4AF37]">Luxury Adventure</span>?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Let our expert concierge team design a bespoke journey that exceeds your every expectation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              View Tour Packages
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-[#D4AF37] hover:bg-white/10 transition-all duration-300"
            >
              Speak with a Consultant
            </Link>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A045]/10 border border-[#D4AF37]/30 rounded-2xl backdrop-blur-sm">
            <p className="text-white/90 text-lg mb-4">
              Have questions? Our AI concierge is available 24/7 to assist you.
            </p>
            <p className="text-[#D4AF37] font-semibold">
              Click the chat icon in the bottom right to start a conversation!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
