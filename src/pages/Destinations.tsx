import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    name: 'Maldives',
    description: 'Pristine overwater villas and crystal-clear turquoise waters',
    highlights: 'Private Islands, Diving, Spa Retreats',
    imageUrl: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Paris, France',
    description: 'The city of lights, romance, and timeless elegance',
    highlights: 'Eiffel Tower, Louvre, Michelin Dining',
    imageUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Santorini, Greece',
    description: 'Iconic white-washed buildings overlooking the Aegean Sea',
    highlights: 'Sunset Views, Wine Tasting, Beaches',
    imageUrl: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Dubai, UAE',
    description: 'Futuristic luxury meets Arabian traditions',
    highlights: 'Burj Khalifa, Shopping, Desert Safari',
    imageUrl: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Bora Bora',
    description: 'The crown jewel of French Polynesia',
    highlights: 'Overwater Bungalows, Snorkeling, Romance',
    imageUrl: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Tokyo, Japan',
    description: 'Ancient traditions blend with cutting-edge innovation',
    highlights: 'Temples, Shopping, Culinary Excellence',
    imageUrl: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Swiss Alps',
    description: 'Majestic peaks and world-class alpine luxury',
    highlights: 'Skiing, Mountain Views, Chalets',
    imageUrl: 'https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Amalfi Coast, Italy',
    description: 'Dramatic cliffs, charming villages, and Mediterranean beauty',
    highlights: 'Coastal Drives, Italian Cuisine, Capri',
    imageUrl: 'https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'New York City',
    description: 'The city that never sleeps, where luxury meets culture',
    highlights: 'Broadway, Shopping, Fine Dining',
    imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export default function Destinations() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm mb-6">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Curated Destinations</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Your Next <span className="text-[#D4AF37]">Luxury Escape</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              From pristine tropical paradises to iconic cultural capitals, we offer exclusive access
              to the world's most sought-after destinations with unparalleled luxury service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-full border border-[#D4AF37]/50">
                  <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-white text-sm font-semibold">Luxury</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-white/80 mb-3 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.highlights}</span>
                  </div>

                  <div className="mt-4 h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C9A045] w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="p-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A045]/10 border border-[#D4AF37]/30 rounded-2xl backdrop-blur-sm inline-block">
              <p className="text-white text-lg mb-4">
                Don't see your dream destination? We can arrange travel to any location worldwide.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                Request Custom Destination
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
