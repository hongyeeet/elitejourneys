import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm mb-6">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-[#D4AF37]">Our Team</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to start planning your dream luxury vacation? Our travel specialists are here to help
              you create an unforgettable journey tailored to your desires.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                      <p className="text-white/70">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-white/70">hello@elitejourneys.com</p>
                      <p className="text-white/70">support@elitejourneys.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Office</h3>
                      <p className="text-white/70">123 Luxury Lane</p>
                      <p className="text-white/70">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A045]/10 border border-[#D4AF37]/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#D4AF37]">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#D4AF37]">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-[#D4AF37]">12:00 PM - 5:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-sm text-white/70">
                    Emergency support available 24/7 for travelers
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-white/70">
                      Your message has been received. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Destination of Interest</label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="">Select a destination</option>
                        <option value="maldives">Maldives</option>
                        <option value="paris">Paris, France</option>
                        <option value="santorini">Santorini, Greece</option>
                        <option value="dubai">Dubai, UAE</option>
                        <option value="bora-bora">Bora Bora</option>
                        <option value="tokyo">Tokyo, Japan</option>
                        <option value="swiss-alps">Swiss Alps</option>
                        <option value="amalfi">Amalfi Coast, Italy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                        placeholder="Tell us about your dream vacation..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A045] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
