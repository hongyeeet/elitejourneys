import { Calendar, Users, Check } from 'lucide-react';

const packages = [
  {
    name: 'Mediterranean Dreams',
    duration: '12 Days / 11 Nights',
    destinations: 'Italy, Greece, Croatia',
    price: '$8,999',
    image: 'https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=1200',
    inclusions: [
      'Luxury accommodations',
      'Private yacht excursions',
      'All meals at 5-star restaurants',
      'Professional tour guide',
      'Airport transfers',
      'Travel insurance'
    ]
  },
  {
    name: 'Asian Elegance',
    duration: '10 Days / 9 Nights',
    destinations: 'Japan, Thailand, Singapore',
    price: '$7,499',
    image: 'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1200',
    inclusions: [
      'Premium hotel stays',
      'Cultural experiences',
      'Michelin-starred dining',
      'Private transfers',
      'Guided tours',
      'Spa treatments'
    ]
  },
  {
    name: 'African Safari Luxury',
    duration: '8 Days / 7 Nights',
    destinations: 'Kenya, Tanzania',
    price: '$12,999',
    image: 'https://images.pexels.com/photos/1086302/pexels-photo-1086302.jpeg?auto=compress&cs=tinysrgb&w=1200',
    inclusions: [
      'Luxury safari lodges',
      'Private game drives',
      'Hot air balloon ride',
      'All meals included',
      'Expert guides',
      'Conservation fees'
    ]
  },
  {
    name: 'European Grand Tour',
    duration: '15 Days / 14 Nights',
    destinations: 'France, Switzerland, Austria, Germany',
    price: '$10,999',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200',
    inclusions: [
      '5-star hotels',
      'First-class train tickets',
      'Private museum tours',
      'Wine tasting experiences',
      'All transportation',
      'Daily breakfast'
    ]
  },
  {
    name: 'Tropical Paradise',
    duration: '7 Days / 6 Nights',
    destinations: 'Maldives',
    price: '$6,499',
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1200',
    inclusions: [
      'Overwater villa',
      'All-inclusive dining',
      'Spa treatments',
      'Water sports activities',
      'Sunset cruise',
      'Seaplane transfers'
    ]
  },
  {
    name: 'Middle East Opulence',
    duration: '9 Days / 8 Nights',
    destinations: 'Dubai, Abu Dhabi, Oman',
    price: '$9,499',
    image: 'https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=1200',
    inclusions: [
      'Luxury hotel suites',
      'Desert safaris',
      'Private yacht charter',
      'Shopping experiences',
      'Fine dining',
      'Helicopter tours'
    ]
  }
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm mb-6">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Curated Experiences</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Luxury <span className="text-[#D4AF37]">Tour Packages</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Meticulously crafted journeys that combine the world's most spectacular destinations
              with five-star accommodations, exclusive experiences, and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="group bg-black border-2 border-[#D4AF37]/30 rounded-2xl overflow-hidden hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      <span>2-6 People</span>
                    </div>
                  </div>

                  <p className="text-[#D4AF37] font-semibold mb-4">{pkg.destinations}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((inclusion, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                          <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[#D4AF37]/20">
                    <div>
                      <p className="text-white/60 text-xs mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-[#D4AF37]">{pkg.price}</p>
                      <p className="text-white/50 text-xs">per person</p>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="p-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A045]/10 border border-[#D4AF37]/30 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-white/70 mb-6">
                Every journey we create is fully customizable. Let us design the perfect itinerary tailored to your preferences.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                Request Custom Package
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
