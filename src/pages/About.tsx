import { Award, Globe, Users, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '150+', label: 'Destinations' },
    { number: '10K+', label: 'Happy Clients' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in luxury travel, partnering only with the world\'s finest hotels, airlines, and service providers.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our extensive network spans every continent, giving you access to exclusive experiences and accommodations worldwide.'
    },
    {
      icon: Users,
      title: 'Personalization',
      description: 'Every journey is crafted specifically for you, reflecting your unique preferences, interests, and travel style.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are travelers at heart, and our genuine passion for exploration drives us to create unforgettable experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Our Story</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#D4AF37]">Elite Journeys</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 md:p-12">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Founded in 2009, Elite Journeys has been at the forefront of luxury travel,
                crafting extraordinary experiences for discerning travelers who seek more than
                just a vacation. We believe that travel should be transformative, inspiring,
                and absolutely unforgettable.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Our team of seasoned travel experts brings decades of combined experience in
                luxury hospitality and destination management. We've personally visited every
                destination we recommend, ensuring that we can provide insider knowledge and
                authentic recommendations.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                What sets us apart is our unwavering commitment to personalized service.
                We don't just book trips, we create bespoke journeys tailored to your unique
                preferences, interests, and dreams. From the moment you contact us until you
                return home, we're with you every step of the way.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl"
              >
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our <span className="text-[#D4AF37]">Core Values</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl hover:border-[#D4AF37] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A045]/10 border border-[#D4AF37]/30 rounded-2xl p-12 backdrop-blur-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have trusted us to create their perfect luxury escape.
              Let us turn your travel dreams into reality.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
