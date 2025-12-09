import { Plane, Hotel, FileText, Shield, Car, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Luxury Flights',
    description: 'Access to first-class and business-class seats on premium airlines worldwide. We secure the best fares and upgrades for our clients.',
    features: [
      'Business & First Class bookings',
      'Private jet charters',
      'Airport lounge access',
      'Premium seat selection',
      'Multi-city itineraries',
      'Flight change assistance'
    ]
  },
  {
    icon: Hotel,
    title: 'Premium Hotels',
    description: 'Exclusive partnerships with the world\'s finest hotels, resorts, and boutique properties ensuring the ultimate in luxury accommodation.',
    features: [
      '5-star hotels & resorts',
      'Room upgrades when available',
      'VIP check-in services',
      'Late checkout options',
      'Exclusive hotel amenities',
      'Personalized concierge'
    ]
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Comprehensive visa and documentation support to ensure smooth travel. We handle the paperwork so you can focus on your journey.',
    features: [
      'Visa application assistance',
      'Document preparation',
      'Application tracking',
      'Expedited processing',
      'Travel document guidance',
      'Entry requirement updates'
    ]
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive travel protection covering medical emergencies, cancellations, lost luggage, and more for complete peace of mind.',
    features: [
      'Medical coverage abroad',
      'Trip cancellation protection',
      'Lost baggage coverage',
      'Emergency evacuation',
      '24/7 assistance hotline',
      'COVID-19 coverage'
    ]
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Seamless ground transportation including airport transfers, luxury car rentals, and private drivers for ultimate comfort.',
    features: [
      'Airport pickup & drop-off',
      'Luxury car rentals',
      'Private chauffeur service',
      'Yacht & helicopter charters',
      'Train ticket booking',
      'Multi-destination transfers'
    ]
  },
  {
    icon: HeadphonesIcon,
    title: 'Concierge Service',
    description: '24/7 luxury concierge support for every aspect of your journey. From restaurant reservations to emergency assistance.',
    features: [
      '24/7 customer support',
      'Restaurant reservations',
      'Event ticket booking',
      'Emergency assistance',
      'Itinerary modifications',
      'Personal travel advisor'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Comprehensive Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#D4AF37]">Luxury Services</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              From flight bookings to 24/7 concierge support, we handle every detail of your journey
              with precision and care, ensuring a seamless luxury travel experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
                  <button className="text-[#D4AF37] font-semibold text-sm hover:text-[#C9A045] transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A045]/10 border border-[#D4AF37]/30 rounded-2xl p-12 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need More Information?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Our luxury travel specialists are available 24/7 to answer your questions
                and help you plan the perfect journey tailored to your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                  Contact Our Team
                </button>
                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-[#D4AF37] hover:bg-white/10 transition-all duration-300">
                  Chat with AI Assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
